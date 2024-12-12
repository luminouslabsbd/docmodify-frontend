<script setup>
    import { ref, reactive, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { toast } from 'vue3-toastify';
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
    import Evidence from '~/components/evidence/Evidence.vue';
    import { tabs } from '~/utils/helper';
    import { useTokenStore } from '~/stores/useTokenStore';
    import ButtonLoader from '~/components/ButtonLoader.vue';

    definePageMeta({
        middleware: ['auth'],
    });

    useHead({ title: 'Assessment' });

    const defaultValues = ref({
        descriptionTitle: 'Requirement Description',
        pciDssTitle: 'PCI DSS Requirement',
        placeholder: 'Not Applicable',
        inputDefaultValue: 'Not Applicable',
        checkboxDefaultValue: '☐',
        checked: '☒',
        notChecked: '☐',
    });

    const currentTab = ref('document');
    const evidence = ref({})
    const errors = ref({});
    const isShow = ref(false)
    const isEdit = ref({
        edit: false,
        id: null,
    });
    const isLoading = ref(false);
    const route = useRoute();
    const inputValues = ref({});
    const isOpen = ref(false);
    const isOpenEdit = ref(false);
    const evidences = ref([]);
    const requirementId = ref(1);
    const formEvidences = ref([]);
    const evidenceTitle = ref({
        number:'Reference Number',
        name:{
            title:'',
            subTitle:''
        },
        purpose:'',
        revisionDate:{
            title:'',
            subTitle:'',
        }
    })

    const title = computed(() => {
        switch (currentTab.value) {
            case tabs.DOCUMENT:
                evidenceTitle.value.name.title = "Document Name";
                evidenceTitle.value.name.subTitle = "(including version, if applicable)";
                evidenceTitle.value.purpose = "Document Purpose";
                evidenceTitle.value.revisionDate.title = "Document Revision Date";
                evidenceTitle.value.revisionDate.subTitle = "(if applicable)";
                return "Documentation Evidence";

            case tabs.INTERVIEW:
            evidenceTitle.value.name.title = "Title of Workpaper with Interview Notes";
                evidenceTitle.value.purpose = "Topics Covered";
                evidenceTitle.value.revisionDate.title = "Role(s) of Interviewee(s)";
                return "Interview Evidence";

            case tabs.ASSESSMENT:
                evidenceTitle.value.name.title = "Title of Workpaper or Evidence";
                evidenceTitle.value.purpose = "Topics Covered or Evidence Collected";
                evidenceTitle.value.revisionDate.title = "Sample Set Reference Number from Table 6.3";
                evidenceTitle.value.revisionDate.subTitle = "(if applicable)";
                return "Assessment Evidence";

            default:
            return "Unknown Evidence";
        }
    });



    const { data: menus, refresh: menuRefresh } = useAsyncData(
        'user_menus',
        () =>
            $fetch('/user/get-menus', {
                baseURL: useRuntimeConfig().public.apiUrl,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${useTokenStore().token}`,
                },
            }),
        {
            cache: true,
            immediate: true,

        }
    );

    const { data: pciDssStatus , refresh: pciDssStatusRefresh } = useApiFetch(
        '/user/get-menu-status',
        {
            method: 'POST',
            immediate: true,
            body: {
                projectId: route.params.id,
            },
        },
    );



    const setRequirementId = (id) => {
        requirementId.value = id;
    };

    const {
        data,
        refresh,
        pending: getFromPending,
        status: getFromStatus,
        refresh: fromRefresh,
    } = await useApiFetch(
        '/user/others-project-form',
        {
            method: 'POST',
            immediate: true,
            body: {
                requirementId,
                projectId: route.params.project_id,
                userId: route.params.user_id,
            },
        },
        {
            watch: [requirementId],
        }
    );
    watch(
        data,
        (newData) => {
            if (newData?.values) {
                try {
                    inputValues.value = JSON.parse(newData.values);
                } catch (error) {
                    console.error('Failed to parse `values` in data:', error);
                    inputValues.value = {};
                }
            }

            if(newData?.evidence){
                formEvidences.value = newData?.evidence;
            }
        },
        { immediate: true }
    );

    watch(requirementId, () => {
        refresh();
        pciDssStatusRefresh();
    });

    const cleanHtml = (input) => {
        if (!input || typeof input !== 'string' || input.trim() === '') {
            return '';
        }
        input = input.replace(/\n/g, '%%NEWLINE%%');
        input = input.replace(/<(?!\/?(i|b|em|strong|u)\b)[^>]+>/gi, '');
        return input.replace(/%%NEWLINE%%/g, '\n');
    }

    const submitForm = async () => {
        isLoading.value = true;
        const formData = new FormData(event.target);
        const pciDss = {};
        formData.forEach((value, key) => {
            pciDss[key] = cleanHtml(value);
        });

        try {
            const { data: pciDssSubmit } = await useApiFetch('/user/submit-pci-data', {
                method: 'POST',
                body: JSON.stringify({
                    form: pciDss,
                    projectId: route.params.id,
                    requirementId: data.value?.requirement_id,
                    descriptionId: data.value?.description_id,
                    pciDssId: data.value?.id,
                }),
            });

            isLoading.value = false;
            toast.success('Docx data create or update success!');
            fromRefresh();
            pciDssStatusRefresh();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    // const changeTab = async (tab) => {
    //     alert(tab);
    //     selectedTab.value = tab;
    //     alert('selectedTab.value',JSON.stringify(selectedTab.value))
    //     await fetchEvidence();
    // };

    const fetchEvidence = async (tab) => {
        currentTab.value = tab;
        const { data, error, status } = await useApiFetch(`/user/others-user-evidence/${tab}`, {
            method: 'GET',
            params:{
                projectId: route.params.project_id,
                userId: route.params.user_id,

            }
        });

        if (status.value === 'success') {
            evidences.value = data.value?.data;
            isOpen.value = true;
        }

        // if (status.value === 'error') {
        //     console.log('Error ', error);
        // }
    };

    // menu active and de-active system using by key
    const activeRequirement = ref(0);
    const activeDescription = ref(0);



    const getStatusText = (pciDssId) =>{
        const status = this.statusData.find(data => data.pci_id === pciDssId);
        return status ? status.status : 'Unknown'; // Default to 'Unknown' if no status is found
    }

  // Get the background color for a given pciDss ID
  const getStatusColor=(pciDssId)=>{
    const status = pciDssStatus.value.find(data => data.pci_id === pciDssId);
    const getItem = pciDssStatus.value.filter(data => data.pci_dss_id === pciDssId);
    if(getItem){
        if(getItem[0]?.status === 'inPlace'){
            return "bg-[#4CAF50]"
        }else if(getItem[0]?.status === 'notApplicable'){
            return "bg-[#9E9E9E]"
        }else if(getItem[0]?.status === 'notTested'){
            return "bg-[#FFB6C1]"
        }else if(getItem[0]?.status === 'notInPlace'){
            return "bg-[#F44336]"
        }else if(getItem[0]?.status === 'compensatingControl'){
            return "bg-[#FFEB3B]"
        }else if(getItem[0]?.status === 'customizedApproach'){
            return "bg-[#D1C4E9]"
        }else {
            return "bg-gray-200"
        }
    }
  }

  const getRows = (name)=>{
    switch (name) {
      case 'qa_reviewer_pci_credentials_3_6':
      case 'remote_testing_reason':
      case 'conflict_of_interest_description_1_4':
      case 'roc_consecutive_years_1_6':
      case 'excluded_scope_description_3_1':
      case 'saq_eligibility_description_3_1':
      case 'ifNoProvideAssessment_3_2':
      case 'anyAdditionalCommentsOrFindings_3_3':
      case 'evidence_repositories_description_6_1':
      case 'samplingRationaleUsed_6_2':
        return 5;
      case 'date_report_note':
      case 'entity_security_impact_services_2_1':
      case 'assessor_scope_difference_3_1':
      case 'scope_limiting_factors_3_1':
      case 'proceduresRequiringScanning_5_1':
      case 'documentedPoliciesProcedures_5_3':
        return 7;
      case 'products_services_disclosure_1_4':
      case 'entity_business_description_2_1':
      case 'technologiesProcessesUsedImplement_3_2':
      case 'assessorWhoAttestsInstruction_3_3':
      case 'assessor_attestation_6_1' :
        return 8;
      default:
        return 1
    }
  }


   function getExtensionColor(extension) {
        switch (extension) {
            case 'pdf':
                return 'bg-green-500';
            case 'docx':
                return 'bg-blue-500';
            case 'jpg':
                return 'bg-violet-500'
            case 'jpeg':
                return 'bg-orange-500'
            case 'png':
                return 'bg-yellow-500';
            case 'mp4':
                return 'bg-rose-500';
            default:
                return 'bg-gray-500';
    }
   }


    const showEvidence = async (id) =>{
        try {
            const { data, error, pending, status } = await useApiFetch(`/user/show-evidence/${id}`);

            if (status.value === 'error') {
                errors.value = error.value?.data?.errors;
            }
            if (status.value === 'success') {
               evidence.value = data.value?.data;
               isShow.value = true;
            }
        } catch (error) {
            toast.error('Something want wrong!')
        }
    }

    const getEvidenceById = async (id) => {
        const { data, error, status } = await useApiFetch(`/user/show-evidence/${id}`, {
            method: 'GET',

        });

        if (status.value === 'error') {
            toast.error("Something want wrong!");
        }

        if (status.value === 'success') {
            editForm.value = data.value.data
            console.log("🚀 ~ getEvidenceById ~ editForm:", editForm.value)
            isEdit.value.edit = true;
            isEdit.value.id = id;
            isOpenEdit.value = true;
        }
    }

    const form = ref({
        number: {
            key:'referenceNumber_6_4_',
            value:''
        },
        name:{
            key:'documentName_6_4_',
            value:''
        },
        purpose:{
            key:'documentPurpose_6_4_',
            value:''
        },
        revision_date:{
            key:'documentRevisionDate_6_4_',
            value:''
        },
        file:null,
        type:currentTab.value
    });
    const editForm = ref({})

    const resetForm = () => {
        form.value = {
            reference_number_value: '',
            document_name_value: '',
            document_purpose_value:'',
            document_revision_date_value:'',
            file:null,
            type:tab
        };
        errors.value = {};
    };

    const uploadFile = (event) => {
        const target = event.target;
        if (target.files?.[0]) {
            editForm.value.file = target.files[0];
        }
    }
    const submitEditForm = async() =>{
        isLoading.value = true;
        const formData = new FormData();

        formData.append('id',editForm.value.id);
        formData.append('number',editForm.value.reference_number_value);
        formData.append('name',editForm.value.document_name_value);
        formData.append('purpose',editForm.value.document_purpose_value);
        formData.append('revision',editForm.value.document_revision_date_value);
        formData.append('file',editForm.value.file);
        formData.append('type',currentTab.value);

        errors.value = {};
        try {
            const { data, error, pending, status } = await useApiFetch(`/user/evidence`, {
                method:"POST",
                body: formData,
            });


            if (status.value === 'error') {
                isLoading.value = false;
                errors.value = error.value?.data?.errors;
            }
            if (status.value === 'success') {
                await fetchEvidence(currentTab.value);
                editForm.value = {};
                isOpenEdit.value = false;
                isLoading.value = false;
                toast.success(data.value?.message)
            }
        } catch (error) {
            toast.error('Something want wrong!')
            isLoading.value = false;
        }
    }

</script>
<template>
    <div class="panel font-arial">
        <div
            class="sticky top-[55px] mb-5 flex items-center justify-between border-b border-gray-100 bg-white px-3 py-3 backdrop:blur-md dark:border-slate-800 dark:bg-black-dark-light dark:text-dark-light"
        >
            <h5 class="text-lg font-semibold dark:text-white-light">Assignment - PCI DSS v4.0.1 Report on Compliance</h5>
            <button @click="fetchEvidence('document')" type="button" class="btn btn-info btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <span class="ml-2">Reference</span>
            </button>
        </div>
        <div class="flex justify-between">
            <div class="w-3/12 p-4">
                <ul class="menu-scroll h-full max-h-screen overflow-y-scroll">
                    <li v-for="(requirement, reqIndex) in menus" @click="activeRequirement = requirement.id" :key="'req_key_' + reqIndex">
                        <h3
                            class="mb-1 cursor-pointer rounded-sm bg-gray-300 px-3 py-2 font-bold dark:bg-slate-800"
                            :class="{ 'bg-info text-white': requirement.id === activeRequirement }"
                        >
                            {{ requirement?.title }}
                        </h3>

                        <ul class="ml-3" v-if="requirement.id === activeRequirement">
                            <li
                                v-for="(description, descIndex) in requirement?.descriptions"
                                @click="activeDescription = description.id"
                                :key="'desc_key_' + descIndex"
                            >
                                <h3
                                    class="mb-1 cursor-pointer rounded-sm bg-gray-200 px-2 py-1 dark:bg-slate-800/75"
                                    :class="{ 'bg-info text-white': description.id === activeDescription }"
                                    v-html="description?.title"
                                ></h3>

                                <ul class="ml-6" v-if="description.id === activeDescription">
                                    <li
                                        v-for="(pciDss, pciIndex) in description?.pci_dss"
                                        @click.stop="pciDss?.id !== 26 && pciDss?.id !== 27 && pciDss?.id !== 28 ? setRequirementId(pciDss?.id) : null"
                                        :key="'pcidss_key_' + pciIndex"
                                        :class="{'cursor-not-allowed': pciDss?.id === 26 || pciDss?.id === 27 || pciDss?.id === 28}"
                                    >
                                        <h3
                                        class="mb-2 rounded-sm px-2 py-1 hover:bg-info hover:text-white dark:bg-slate-700"
                                        :class="getStatusColor(pciDss?.id) ?? bg-gray-100"
                                        :style="{ cursor: pciDss?.id === 26 || pciDss?.id === 27 || pciDss?.id === 28 ? 'not-allowed' : 'pointer' }"
                                        >
                                        {{ pciDss?.key }}
                                        </h3>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="w-9/12 p-4">
                <div class="mt-10 flex h-full items-start justify-center" v-if="getFromStatus === 'pending'">
                    <div class="flex flex-col items-center">
                        <SklitonLoader />
                        <p class="text-lg font-bold">Please Wait</p>
                    </div>
                </div>
                <form @submit.prevent="submitForm" v-if="getFromStatus === 'success'">
                    <h2 class="text-2xl font-bold">{{ data?.description?.requirement?.title }}</h2>
                    <div class="">
                        <div v-if="JSON.parse(data?.description?.form)?.assignment">
                            <h3 class="text-xl font-bold">{{ data?.description?.title }}</h3>
                            <div class="">
                                <h4 class="my-3 text-lg font-semibold">{{ data?.title }}</h4>
                                <div v-if="JSON.parse(data?.form)?.subTitle" v-html="JSON.parse(data?.form)?.subTitle" />

                                <!-- 1.8 Requirement Table -->
                                <div v-if="JSON.parse(data?.form)?.isRequirement">
                                    <table class="table border border-slate-900">
                                        <thead>
                                            <tr>
                                                <th rowspan="2" class="align-middle" style="border:1px solid; background: teal; color: white">PCI DSS Requirement</th>
                                                <th colspan="4" class="align-middle" style="border:1px solid; background: teal; color: white">
                                                    Assessment Finding Select all options that apply.
                                                </th>
                                                <th colspan="2" class="align-middle" style="border:1px solid; background: #b57faf; color: white">
                                                    Select If Below Method(s) Was Used
                                                </th>
                                            </tr>
                                            <tr>
                                                <th class="" style="border:1px solid; background-color: #cbd4d5; color: black">In Place</th>
                                                <th class="" style="border:1px solid; background-color: #cbd4d5; color: black">Not Applicable</th>
                                                <th class="" style="border:1px solid; background-color: #cbd4d5; color: black">Not Tested</th>
                                                <th class="" style="border:1px solid; background-color: #cbd4d5; color: black">Not in Place</th>
                                                <th class="" style="border:1px solid; background-color: #ebd6e4; color: black">Compensating Control</th>
                                                <th class="" style="border:1px solid; background-color: #ebd6e4; color: black">Customized Approach</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style="border: 1px solid; padding: 3px 5px" v-for="(row, key) in JSON.parse(data?.form)?.tableBody">
                                                <td style="border: 1px solid;text-align: center;" class="text-dark">{{ row?.title }}</td>
                                                <td style="border: 1px solid;text-align:center;" class="text-dark" v-for="(td, key) in row?.inputs">
                                                    <input type="hidden" :name="td?.name" :value="defaultValues.notChecked" />
                                                    <input
                                                        type="checkbox"
                                                        :name="td?.name"
                                                        :checked="inputValues[td?.name] && inputValues[td?.name] === '☒'"
                                                        class="form-check-input border border-secondary"
                                                        :value="defaultValues.checked"
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="my-8">
                                        <p>
                                            In the sections below identify the sub-requirements with the following results and assessment methods. If there are
                                            none, enter “Not Applicable.” Note: Natural grouping of requirements is allowed (for example, Req. 3, 1.1, 1.1.1,
                                            1.1.2, or 1.2.1 through 1.2.3, etc.) to reduce the number of individual requirements listed.
                                        </p>
                                    </div>
                                    <table class="table border border-slate-900">
                                        <thead>
                                            <tr style="border: 1px solid; padding: 3px 5px">
                                                <th style="border: 1px solid;text-align: center;" class="text-dark">Not Applicable</th>
                                                <th style="border: 1px solid;text-align: center;" class="text-dark">Not Tested</th>
                                                <th style="border: 1px solid;text-align: center;" class="text-dark">Not in Place Due to a Legal Restriction</th>
                                                <th style="border: 1px solid;text-align: center;" class="text-dark">Not in Place Not Due to a Legal Restriction</th>
                                                <th style="border: 1px solid;text-align: center;" class="text-dark">Compensating Control</th>
                                                <th style="border: 1px solid;text-align: center;" class="text-dark">Customized Approach</th>
                                            </tr>
                                            <tr style="border: 1px solid">
                                                <td style="border: 1px solid; text-align: center; padding: 23px 56px" class="text-dark">
                                                    <input
                                                        type="hidden"
                                                        :name="'sub_requirements_interviews_1_1_1_not_applicable'"
                                                        :value="defaultValues.notChecked"
                                                    />
                                                    <input
                                                        type="checkbox"
                                                        :name="'sub_requirements_interviews_1_1_1_not_applicable'"
                                                        :checked="
                                                            inputValues['sub_requirements_interviews_1_1_1_not_applicable'] &&
                                                            inputValues['sub_requirements_interviews_1_1_1_not_applicable'] === '☒'
                                                        "
                                                        class="form-check-input border border-secondary"
                                                        :value="defaultValues.checked"
                                                    />
                                                </td>
                                                <td style="border: 1px solid; text-align: center; padding: 23px 56px" class="text-dark">
                                                    <input
                                                        type="hidden"
                                                        :name="'sub_requirements_interviews_1_1_1_not_tested'"
                                                        :value="defaultValues.notChecked"
                                                    />
                                                    <input
                                                        type="checkbox"
                                                        :name="'sub_requirements_interviews_1_1_1_not_tested'"
                                                        :checked="
                                                            inputValues['sub_requirements_interviews_1_1_1_not_tested'] &&
                                                            inputValues['sub_requirements_interviews_1_1_1_not_tested'] === '☒'
                                                        "
                                                        class="form-check-input border border-secondary"
                                                        :value="defaultValues.checked"
                                                    />
                                                </td>
                                                <td style="border: 1px solid; text-align: center; padding: 23px 56px" class="text-dark">
                                                    <input
                                                        type="hidden"
                                                        :name="'sub_requirements_interviews_1_1_1_not_in_place_due_to_legal'"
                                                        :value="defaultValues.notChecked"
                                                    />
                                                    <input
                                                        type="checkbox"
                                                        :name="'sub_requirements_interviews_1_1_1_not_in_place_due_to_legal'"
                                                        :checked="
                                                            inputValues['sub_requirements_interviews_1_1_1_not_in_place_due_to_legal'] &&
                                                            inputValues['sub_requirements_interviews_1_1_1_not_in_place_due_to_legal'] === '☒'
                                                        "
                                                        class="form-check-input border border-secondary"
                                                        :value="defaultValues.checked"
                                                    />
                                                </td>
                                                <td style="border: 1px solid; text-align: center; padding: 23px 56px" class="text-dark">
                                                    <input
                                                        type="hidden"
                                                        :name="'sub_requirements_interviews_1_1_1_not_in_place_not_due_to_legal'"
                                                        :value="defaultValues.notChecked"
                                                    />
                                                    <input
                                                        type="checkbox"
                                                        :name="'sub_requirements_interviews_1_1_1_not_in_place_not_due_to_legal'"
                                                        :checked="
                                                            inputValues['sub_requirements_interviews_1_1_1_not_in_place_not_due_to_legal'] &&
                                                            inputValues['sub_requirements_interviews_1_1_1_not_in_place_not_due_to_legal'] === '☒'
                                                        "
                                                        class="form-check-input border border-secondary"
                                                        :value="defaultValues.checked"
                                                    />
                                                </td>
                                                <td style="border: 1px solid; text-align: center; padding: 23px 56px" class="text-dark">
                                                    <input
                                                        type="hidden"
                                                        :name="'sub_requirements_interviews_1_1_1_compensating_control'"
                                                        :value="defaultValues.notChecked"
                                                    />
                                                    <input
                                                        type="checkbox"
                                                        :name="'sub_requirements_interviews_1_1_1_compensating_control'"
                                                        :checked="
                                                            inputValues['sub_requirements_interviews_1_1_1_compensating_control'] &&
                                                            inputValues['sub_requirements_interviews_1_1_1_compensating_control'] === '☒'
                                                        "
                                                        class="form-check-input border border-secondary"
                                                        :value="defaultValues.checked"
                                                    />
                                                </td>
                                                <td style="border: 1px solid; text-align: center; padding: 23px 56px" class="text-dark">
                                                    <input
                                                        type="hidden"
                                                        :name="'sub_requirements_interviews_1_1_1_customized_approach'"
                                                        :value="defaultValues.notChecked"
                                                    />
                                                    <input
                                                        type="checkbox"
                                                        :name="'sub_requirements_interviews_1_1_1_customized_approach'"
                                                        :checked="
                                                            inputValues['sub_requirements_interviews_1_1_1_customized_approach'] &&
                                                            inputValues['sub_requirements_interviews_1_1_1_customized_approach'] === '☒'
                                                        "
                                                        class="form-check-input border border-secondary"
                                                        :value="defaultValues.checked"
                                                    />
                                                </td>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>

                                <!-- Show specific design table -->
                                <div v-if="JSON.parse(data?.form)?.isAssignmentKey">
                                    <!-- 3.3 Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === '13_3_3'">
                                        <table class="mt-5 table">
                                           <tbody>
                                            <tr>
                                                 <td class="border border-slate-900 p-3 w-[50%] align-top">
                                                    Indicate whether the assessed entity uses one or more PCI SSC validated products or solutions.
                                                 </td>
                                                 <td class="border border-slate-900 p-3">
                                                    <div class="flex items-center gap-4">
                                                        <div class="flex items-center space-x-4">
                                                            <label class="flex items-center space-x-1">
                                                                <PcidssCheckbox
                                                                    :name="`indicate_whether_assessed_solutions_3_3_yes`"
                                                                    :inputValue="inputValues[`indicate_whether_assessed_solutions_3_3_yes`]"
                                                                />
                                                                <span class="text-gray-700 cursor-pointer">Yes</span>
                                                            </label>
                                                        </div>
                                                        <div class="flex items-center space-x-4">
                                                            <label class="flex items-center space-x-1">
                                                                <PcidssCheckbox
                                                                    :name="`indicate_whether_assessed_solutions_3_3_no`"
                                                                    :inputValue="inputValues[`indicate_whether_assessed_solutions_3_3_no`]"
                                                                />
                                                                <span class="text-gray-700 cursor-pointer">No</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" class="border border-slate-900 p-3">
                                                    If “Yes,” provide the following information regarding items the organization uses from PCI SSC's Lists of Validated Products and Solutions:
                                                </td>
                                            </tr>
                                           </tbody>
                                        </table>

                                        <table class="mt-5 table">
                                            <tbody>
                                                <tr style="background-color: teal; color: white">
                                                <th class="border border-slate-900 p-3 font-semibold" >Name of PCI SSC validated product or solution</th>
                                                <th class="border border-slate-900 p-3 font-semibold" >Version of product or solution</th>
                                                <th class="border border-slate-900 p-3 font-semibold" >PCI SSC Standard to which product or solution was validated</th>
                                                <th class="border border-slate-900 p-3 font-semibold" >PCI SSC listing reference number</th>
                                                <th class="border border-slate-900 p-3 font-semibold" >Expiry date of listing</th>
                                            </tr>
                                            <tr v-for="row in JSON.parse(data?.form)?.tableBody_3_2">
                                                <td class="border border-slate-900 p-0" v-for="td in row?.names">
                                                    <PcidssTextarea
                                                        :name="td"
                                                        :inputValue = "inputValues[td]"
                                                        :rows="1"
                                                    />
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <table class="mt-5 table">
                                           <tbody>
                                            <tr>
                                                 <td class="border border-slate-900 w-[50%] align-top">
                                                    Provide the name of the assessor who attests that they have read the instruction manual associated with each of the software/solution(s) listed above and confirmed that the merchant has implemented the solution per the instructions and detail in the instruction manual.
                                                 </td>
                                                 <td class="border border-slate-900 p-0">
                                                    <PcidssTextarea
                                                        :name="`assessorWhoAttestsInstruction_3_3`"
                                                        :inputValue = "inputValues[`assessorWhoAttestsInstruction_3_3`]"
                                                        :rows="getRows(`assessorWhoAttestsInstruction_3_3`)"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                 <td class="border border-slate-900 align-top">
                                                    Any additional comments or findings the assessor would like to include, if applicable.
                                                 </td>
                                                 <td class="border border-slate-900 p-0">
                                                    <PcidssTextarea
                                                        :name="`anyAdditionalCommentsOrFindings_3_3`"
                                                        :inputValue = "inputValues[`anyAdditionalCommentsOrFindings_3_3`]"
                                                        :rows="getRows(`anyAdditionalCommentsOrFindings_3_3`)"
                                                    />
                                                </td>
                                            </tr>
                                           </tbody>
                                        </table>
                                    </div>
                                    <!-- 4.1 Requirement Table -->
                                     <div v-if="JSON.parse(data?.form)?.isAssignmentKey === '13_4_1'">
                                        <div class="p-2 my-3 border-4 border-dashed border-gray-300 dark:border-gray-600">
                                            <div class="text-6xl font-extrabold text-center py-48 text-gray-500">Insert Diagrams</div>
                                        </div>
                                     </div>

                                    <!-- 4.2 Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === '13_4_2'">
                                        <div class="p-2 my-3 border-4 border-dashed border-gray-300 dark:border-gray-600">
                                            <div class="text-6xl font-extrabold text-center py-48 text-gray-500">Insert Diagrams</div>
                                        </div>

                                        <div class="">
                                            <p class="font-semibold my-5" >4.2.1 Description of Account Data Flows</p>
                                            <table class="table border">
                                              <tbody>
                                                <tr>
                                                    <td class="p-2" colspan="2">
                                                        <p>Identify in which of the following account data flows the assessed entity participates:</p>
                                                        <p>
                                                            <b>Note:</b>These data flows must be described in detail in the sections of the table that follow.
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="flex p-4">
                                                        <div class="flex items-center flex-wrap gap-4">
                                                            <div class="flex items-center gap-4">
                                                                <div v-for="(item, key) in ['Authorization', 'Capture', 'Settlement', 'Chargeback/Dispute', 'Refunds', 'Other']" :key="key" class="flex items-center space-x-4">
                                                                    <label class="flex items-center space-x-1">
                                                                        <PcidssCheckbox
                                                                            :name="`${item}_${key}`"
                                                                            :inputValue="inputValues[`${item}_${key}`]"
                                                                        />
                                                                        <span class="text-gray-700 cursor-pointer">{{ item }}</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p>
                                                            <b>Identify and describe all data flows.</b>Descriptions should include how and where account data
                                                            enters the environment, is transmitted, is processed, is stored, and how and why any personnel
                                                            access the account data. Add rows as necessary.
                                                        </p>
                                                    </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table class="table border border-slate-900">
                                              <tbody>
                                                <tr>
                                                    <td class="p-2 font-semibold text-white" style="text-align: center; background-color: teal; width: 35%">
                                                        Account data flows (For example, account data flow 1, account data flow 2)
                                                    </td>

                                                    <td class="p-2 font-semibold text-white" style="text-align: center; background-color: teal; width: 65%">
                                                        Description (Include the type of account data)
                                                    </td>
                                                </tr>
                                                <tr v-for="item in 2">
                                                    <td class="border border-slate-900 p-0 align-top">
                                                        <PcidssTextarea
                                                            :name="`accountDataFlows_4_2_${item}`"
                                                            :inputValue = "inputValues[`accountDataFlows_4_2_${item}`]"
                                                            :rows="1"
                                                        />
                                                    </td>
                                                    <td class="border border-slate-900 p-0 align-top">
                                                        <PcidssTextarea
                                                            :name="`descriptionInclude_4_2_${item}`"
                                                            :inputValue = "inputValues[`descriptionInclude_4_2_${item}`]"
                                                            :rows="1"
                                                        />
                                                    </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <!-- 4.3 Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === '13_4_3'">
                                        <table class="mt-3 table">
                                            <thead>
                                                <tr class="border border-slate-900 text-center">
                                                    <th class="font-semibold" style="background-color: teal; color: white; text-align: center">
                                                        Data Store <sup>1</sup>
                                                    </th>
                                                    <th class="font-semibold" style="background-color: teal; color: white; text-align: center">
                                                        File Name(s),Table Names(s)and/or Field Names
                                                    </th>
                                                    <th class="font-semibold" style="background-color: teal; color: white; text-align: center">
                                                        Account Data Elements Stored<sup>2</sup>
                                                    </th>
                                                    <th class="font-semibold" style="background-color: teal; color: white; text-align: center">
                                                        How Data Is Secured<sup>3</sup>
                                                    </th>
                                                    <th class="font-semibold" style="background-color: teal; color: white; text-align: center">
                                                        How Access to Data Stores Is Logged <sup>4</sup>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(row, key) in JSON.parse(data?.form)?.tableBody">
                                                    <td class="border border-slate-900 w-[20%] p-0" v-for="name in row?.names">
                                                        <PcidssTextarea
                                                            :name="name"
                                                            :inputValue = "inputValues[name]"
                                                            :rows="1"
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <ol class="mt-3" style="list-style: square">
                                            <li>Database name, file server name, and so on.</li>
                                            <li>For example, PAN, expiry, cardholder name, and so on.</li>
                                            <li>For example, what type of encryption and strength.</li>
                                            <li>
                                                Description of logging mechanism used for logging access to data — for example, describe the enterprise log
                                                management solution, application-level logging, operating system logging, etc. in place.
                                            </li>
                                        </ol>

                                        <div class="mt-3">
                                            <h3 class="text-lg font-semibold">4.3.1 Storage of SAD</h3>
                                            <table class="table-bordered table border-secondary">
                                                <tbody>
                                                    <tr>
                                                    <td class="border border-slate-900 p-2" colspan="2">
                                                        <p>If SAD is stored complete the following:</p>
                                                        <li>Note: Anywhere SAD is stored should be documented in the table in 4.3</li>
                                                    </td>
                                                </tr>
                                                <tr class="border border-slate-900">
                                                    <td class="border border-slate-900 p-2">Indicate whether SAD is stored post authorization:</td>
                                                    <td class="border border-slate-900 p-2">
                                                        <div class="flex gap-2">
                                                            <div class="flex items-center gap-4">
                                                                <div class="flex items-center space-x-4">
                                                                    <label class="flex items-center space-x-1">
                                                                        <PcidssCheckbox
                                                                            :name="`indicateWhetherSADAuthorization_4_3_1_yes`"
                                                                            :inputValue="inputValues[`indicateWhetherSADAuthorization_4_3_1_yes`]"
                                                                        />
                                                                        <span class="text-gray-700 cursor-pointer">Yes</span>
                                                                    </label>
                                                                </div>
                                                            </div>

                                                            <div class="flex items-center gap-4">
                                                                <div class="flex items-center space-x-4">
                                                                    <label class="flex items-center space-x-1">
                                                                        <PcidssCheckbox
                                                                            :name="`indicateWhetherSADAuthorization_4_3_1_no`"
                                                                            :inputValue="inputValues[`indicateWhetherSADAuthorization_4_3_1_no`]"
                                                                        />
                                                                        <span class="text-gray-700 cursor-pointer">No</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="border border-slate-900 p-2 w-[50%]">Indicate whether SAD is stored as part of Issuer functions:</td>
                                                    <td class="border border-slate-900 p-2">
                                                        <div class="flex gap-2">
                                                            <div class="flex items-center gap-4">
                                                                <div class="flex items-center space-x-4">
                                                                    <label class="flex items-center space-x-1">
                                                                        <PcidssCheckbox
                                                                            :name="`indicateWhetherSADIssuerFunction_4_3_1_yes`"
                                                                            :inputValue="inputValues[`indicateWhetherSADIssuerFunction_4_3_1_yes`]"
                                                                        />
                                                                        <span class="text-gray-700 cursor-pointer">Yes</span>
                                                                    </label>
                                                                </div>
                                                            </div>

                                                            <div class="flex items-center gap-4">
                                                                <div class="flex items-center space-x-4">
                                                                    <label class="flex items-center space-x-1">
                                                                        <PcidssCheckbox
                                                                            :name="`indicateWhetherSADAuthorization_4_3_1_no`"
                                                                            :inputValue="inputValues[`indicateWhetherSADAuthorization_4_3_1_no`]"
                                                                        />
                                                                        <span class="text-gray-700 cursor-pointer">No</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <!-- 4.4 Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === '13_4_4'">
                                        <table class="table-bordered table border-secondary">
                                           <tbody>
                                            <tr style="background-color: teal; color: white">
                                                <th class="border border-slate-900 p-3 text-center w-[15%]" rowspan="2">Company Name</th>
                                                <th class="border border-slate-900 p-3 text-center w-[15%]" rowspan="2">
                                                    Identify what account data is shared, or if account data is not shared, how the organization could impact
                                                    the security of account data<sup>1</sup>
                                                </th>
                                                <th class="border border-slate-900 p-3 text-center w-[15%]" rowspan="2">
                                                    Describe the purpose for utilizing the service provider<sup>2</sup>
                                                </th>
                                                <th class="border border-slate-900 p-3 text-center w-[10%]" colspan="2">
                                                    Has the third party been assessed separately against PCI DSS?
                                                </th>
                                                <th class="border border-slate-900 p-3 text-center w-[30%]" colspan="2">
                                                    If Yes,<br />
                                                    identify the date and PCI DSS version of the AOC
                                                </th>
                                                <th class="border border-slate-900 p-3 text-center w-[10%]" colspan="2">
                                                    If No, were the services provided by the third party included in this assessment?
                                                </th>
                                            </tr>
                                            <tr style="background-color: #e1e1e1">
                                                <td style="text-align:center;" class="border border-slate-900 p-2">Yes</td>
                                                <td style="text-align:center;" class="border border-slate-900 p-2">No</td>
                                                <td style="text-align:center;" class="border border-slate-900 p-2 w-[20%]">Date</td>
                                                <td style="text-align:center;" class="border border-slate-900 p-2 w-[10%]">Version</td>
                                                <td style="text-align:center;" class="border border-slate-900 p-2">Yes</td>
                                                <td style="text-align:center;" class="border border-slate-900 p-2">No</td>
                                            </tr>
                                            <tr v-for="row in JSON.parse(data?.form)?.tableBody">
                                                <td style="text-align:center;" class="border border-slate-900 p-0" v-for="(td, key) in row?.names">
                                                    <div v-if="key === 3 || key === 4 || key === 7 || key === 8">
                                                        <div v-if="key === 3">
                                                            <PcidssCheckbox
                                                                :name="`${td}_yes`"
                                                                :inputValue="inputValues[`${td}_yes`]"
                                                            />
                                                        </div>
                                                        <div v-if="key === 4">
                                                            <PcidssCheckbox
                                                                :name="`${td}_no`"
                                                                :inputValue="inputValues[`${td}_no`]"
                                                            />
                                                        </div>
                                                        <div v-if="key === 7">
                                                            <PcidssCheckbox
                                                                :name="`${td}_yes`"
                                                                :inputValue="inputValues[`${td}_yes`]"
                                                            />
                                                        </div>
                                                        <div v-if="key === 8">
                                                            <PcidssCheckbox
                                                                :name="`${td}_no`"
                                                                :inputValue="inputValues[`${td}_no`]"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div v-else>
                                                        <PcidssTextarea
                                                            :name="td"
                                                            :inputValue="inputValues[td]"
                                                            :rows="1"
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                           </tbody>
                                        </table>

                                        <ul class="mt-3">
                                            <li>1 For example, PAN, expiry date, providing support via remote access, and so on.</li>
                                            <li>2 For example, third-party storage, transaction processing, custom software development, and so on.</li>
                                        </ul>
                                    </div>

                                    <!-- 4.5 Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === '13_4_5'">
                                        <div v-for="(table) in JSON.parse(data?.form)?.tableBody">
                                            <p class="font-semibold my-5" v-html="table?.title" />
                                            <table class="mt-3">
                                                <tbody>
                                                    <tr class="border border-slate-900 text-center" style="background-color: teal; color: white">
                                                    <th class="p-2 w-[33%]">Network Name (In scope)</th>
                                                    <th class="p-2">Type of Network</th>
                                                    <th class="p-2 w-[33%]">Function/ Purpose of Network</th>
                                                </tr>
                                                <tr v-for="row in table?.names">
                                                    <td class="border border-slate-900 p-0" v-for="td in row?.names">
                                                        <PcidssTextarea
                                                            :name="td"
                                                            :inputValue = "inputValues[td]"
                                                            :rows="1"
                                                        />
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <!-- 4.6 Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === '13_4_6'">
                                        <table class="mt-3">
                                            <tbody>
                                                <tr class="text-center" style="background-color: teal; color: white ;text-align: center;">
                                                    <th class="border border-slate-900 p-2 text-center w-[33%]">
                                                        Facility Type (Datacenters, corporate office, call center, mail processing facility, etc.)
                                                    </th>
                                                    <th class="border border-slate-900 p-2 text-center">
                                                        Total Number of Locations (How many locations of this type are in scope)
                                                    </th>
                                                    <th class="border border-slate-900 p-2 text-center w-[33%]">Location(s) of Facility (for example, city, country)</th>
                                                </tr>
                                                <tr v-for="row in JSON.parse(data?.form)?.tableBody">
                                                    <td class="border border-slate-900 p-0" v-for="td in row?.names">
                                                        <PcidssTextarea
                                                            :name="td"
                                                            :inputValue = "inputValues[td]"
                                                            :rows="1"
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <!-- 4.7 Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === '13_4_7'">
                                        <table class="mt-3">
                                            <tbody>
                                                <tr class="text-center" style="background-color: teal; color: white">
                                                    <th class="w-[20%] border border-slate-900 p-3 text-center font-semibold">Type of System Component <sup>1</sup></th>
                                                    <th class="w-[20%] border border-slate-900 p-3 text-center font-semibold">Total Number of System Components <sup>2</sup></th>
                                                    <th class="w-[20%] border border-slate-900 p-3 text-center font-semibold">Vendor</th>
                                                    <th class="w-[20%] border border-slate-900 p-3 text-center font-semibold">Product Name and Version</th>
                                                    <th class="w-[20%] border border-slate-900 p-3 text-center font-semibold">Role/Function Description</th>
                                                </tr>
                                                <tr v-for="row in JSON.parse(data?.form)?.tableBody">
                                                    <td class="border border-slate-900 p-0" v-for="td in row?.names">
                                                        <PcidssTextarea
                                                            :name="td"
                                                            :inputValue = "inputValues[td]"
                                                            :rows="1"
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div class="mt-5">
                                            <p>1	For example, application, firewall, server, IDS, Anti-malware software, database, and so on.</p>
                                            <p>2	How many system components of this type are in scope.</p>
                                        </div>
                                    </div>

                                    <!-- 5.1 Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === '13_5_1'">
                                        <table class="table-bordered mt-5 table border-secondary">
                                            <tbody>
                                                <tr>
                                                    <td class="border border-slate-900 p-2 align-top" style="width: 50%">
                                                        Indicate whether this is the assessed entity’s initial PCI DSS assessment against the ASV scan requirements.
                                                    </td>
                                                    <td class="border border-slate-900">
                                                        <div class="flex items-center gap-4">
                                                            <div class="flex items-center space-x-4">
                                                                <label class="flex items-center space-x-1">
                                                                    <PcidssCheckbox
                                                                        :name="`assessedEntityInitialPciDssAssessment_5_1_yes`"
                                                                        :inputValue="inputValues[`assessedEntityInitialPciDssAssessment_5_1_yes`]"
                                                                    />
                                                                    <span class="text-gray-700 cursor-pointer">Yes</span>
                                                                </label>
                                                            </div>
                                                            <div class="flex items-center space-x-4">
                                                                <label class="flex items-center space-x-1">
                                                                    <PcidssCheckbox
                                                                        :name="`assessedEntityInitialPciDssAssessment_5_1_no`"
                                                                        :inputValue="inputValues[`assessedEntityInitialPciDssAssessment_5_1_no`]"
                                                                    />
                                                                    <span class="text-gray-700 cursor-pointer">No</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="border border-slate-900 p-2 align-top">
                                                        If yes, Identify the name of the document the assessor verified to include the entity’s documented policies
                                                        and procedures requiring scanning at least once every three months going forward.
                                                    </td>
                                                    <td class="border border-slate-900 p-0">
                                                        <PcidssTextarea
                                                            :name="`proceduresRequiringScanning_5_1`"
                                                            :inputValue = "inputValues[`proceduresRequiringScanning_5_1`]"
                                                            :rows="getRows('proceduresRequiringScanning_5_1')"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="border border-slate-900 p-2 align-top">Assessor comments, if applicable:</td>
                                                    <td class="border border-slate-900 p-0">
                                                        <PcidssTextarea
                                                            :name="`assessorCommentsApplicable_5_1`"
                                                            :inputValue = "inputValues[`assessorCommentsApplicable_5_1`]"
                                                            :rows="1"
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <!-- 5.2 Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === '13_5_2'">
                                        <table class="table">
                                            <tbody>
                                                <tr>
                                                    <td class="border border-slate-900 p-2" style="width: 50%">
                                                        Indicate whether the ASV and the assessed entity completed the Attestations of Scan Compliance, confirming
                                                        that all externally accessible (Internet-facing) IP addresses in existence at the entity were appropriately
                                                        scoped for the ASV scans.
                                                    </td>
                                                    <td class="border border-slate-900 p-2">
                                                        <div class="flex items-center gap-4">
                                                            <div class="flex items-center space-x-4">
                                                                <label class="flex items-center space-x-1">
                                                                    <PcidssCheckbox
                                                                        :name="`attestationsScanComplianceConfirming_5_2_yes`"
                                                                        :inputValue="inputValues[`attestationsScanComplianceConfirming_5_2_yes`]"
                                                                    />
                                                                    <span class="text-gray-700 cursor-pointer">Yes</span>
                                                                </label>
                                                            </div>
                                                            <div class="flex items-center space-x-4">
                                                                <label class="flex items-center space-x-1">
                                                                    <PcidssCheckbox
                                                                        :name="`attestationsScanComplianceConfirming_5_2_no`"
                                                                        :inputValue="inputValues[`attestationsScanComplianceConfirming_5_2_no`]"
                                                                    />
                                                                    <span class="text-gray-700 cursor-pointer">No</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <!-- 5.3 Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === '13_5_3'">
                                        <table class="table-bordered table border-secondary">
                                            <tbody>
                                                <tr style="background-color: teal; color: white">
                                                <th class="border border-slate-900 p-2 w-[29%]" rowspan="2">Date of the Scan(s)</th>
                                                <th class="border border-slate-900 p-2 w-[10%]" colspan="2">Was the scan performed via authenticated scanning?</th>
                                                <th class="border border-slate-900 p-2 w-[10%]" colspan="2">
                                                    Were any high-risk or critical vulnerabilities per the entity's vulnerability risk rankings at Requirement
                                                    6.3.1 found?
                                                </th>
                                                <th class="border border-slate-900 p-2 w-[50%]" rowspan="2">
                                                    For all scans where high-risk or critical vulnerabilities were found, provide date(s) of re-scans showing
                                                    that the vulnerabilities have been corrected.
                                                </th>
                                                </tr>
                                                <tr style="background-color: #dfdfdf">
                                                    <td style="text-align:center;" class="border border-slate-900 p-2">Yes</td>
                                                    <td style="text-align:center;" class="border border-slate-900 p-2">No</td>
                                                    <td style="text-align:center;" class="border border-slate-900 p-2">Yes</td>
                                                    <td style="text-align:center;" class="border border-slate-900 p-2">No</td>
                                                </tr>
                                                <tr v-for="(row, key) in JSON.parse(data?.form)?.tableBody">
                                                    <td style="text-align:center;" class="border border-slate-900 p-0" v-for="(td, key) in row?.names">
                                                        <div v-if="key === 1 || key === 2 || key === 3 || key === 4">
                                                            <PcidssCheckbox
                                                                :name="td"
                                                                :inputValue="inputValues[td]"
                                                            />
                                                        </div>
                                                        <div v-else>
                                                            <PcidssTextarea
                                                                :name="td"
                                                                :inputValue = "inputValues[td]"
                                                                :rows="1"
                                                            />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <table class="mt-5 table">
                                            <tbody>
                                                <tr>
                                                    <td class="border border-slate-900 p-2 align-top" style="width: 50%">
                                                        Indicate whether the ASV and the assessed entity completed the Attestations of Scan Compliance, confirming
                                                        that all externally accessible (Internet-facing) IP addresses in existence at the entity were appropriately
                                                        scoped for the ASV scans.
                                                    </td>
                                                    <td class="border border-slate-900 p-2">
                                                        <div class="flex items-center gap-4">
                                                            <div class="flex items-center space-x-4">
                                                                <label class="flex items-center space-x-1">
                                                                    <PcidssCheckbox
                                                                        :name="`attestationsScanComplianceConfirming_5_3_yes`"
                                                                        :inputValue="inputValues[`attestationsScanComplianceConfirming_5_3_yes`]"
                                                                    />
                                                                    <span class="text-gray-700 cursor-pointer">Yes</span>
                                                                </label>
                                                            </div>
                                                            <div class="flex items-center space-x-4">
                                                                <label class="flex items-center space-x-1">
                                                                    <PcidssCheckbox
                                                                        :name="`attestationsScanComplianceConfirming_5_3_no`"
                                                                        :inputValue="inputValues[`attestationsScanComplianceConfirming_5_3_no`]"
                                                                    />
                                                                    <span class="text-gray-700 cursor-pointer">No</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="border border-slate-900 p-2 align-top">
                                                        If yes, Identify the name of the document the assessor verified to include the entity’s documented policies
                                                        and procedures requiring scanning at least once every three months going forward.
                                                    </td>
                                                    <td class="border border-slate-900 p-0">
                                                        <PcidssTextarea
                                                            :name="`documentedPoliciesProcedures_5_3`"
                                                            :inputValue = "inputValues[`documentedPoliciesProcedures_5_3`]"
                                                            :rows="getRows('documentedPoliciesProcedures_5_3')"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="border border-slate-900 p-2 align-top">Assessor comments, if applicable:</td>
                                                    <td class="border border-slate-900 p-0">
                                                        <PcidssTextarea
                                                            :name="`assessorCommentsApplicable_5_3`"
                                                            :inputValue = "inputValues[`assessorCommentsApplicable_5_3`]"
                                                            :rows="1"
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <!-- 6.3 Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === '14_1_3'">
                                        <table class="mt-5 table">
                                            <tbody>
                                                <tr style="background-color: teal; color: white">
                                                    <th class="border border-slate-900 p-3 font-semibold w-[15%]">Tested Sample</th>
                                                    <th class="border border-slate-900 p-3 font-semibold w-[25%]">Sample Type Description</th>
                                                    <th class="border border-slate-900 p-3 font-semibold w-[25%]">All Items in Sample Set?</th>
                                                    <th class="border border-slate-900 p-3 font-semibold w-[15%]">Selection Method</th>
                                                    <th class="border border-slate-900 p-3 font-semibold w-[10%]">Total Sampled</th>
                                                    <th class="border border-slate-900 p-3 font-semibold w-[10%]">Total Population</th>
                                                </tr>
                                                <tr v-for="row in JSON.parse(data?.form)?.tableBody">
                                                    <td class="border border-slate-900 p-0" v-for="td in row?.names">
                                                        <PcidssTextarea
                                                            :name="td"
                                                            :inputValue = "inputValues[td]"
                                                            :rows="getRows(td)"
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <!-- 6.4 Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === '14_1_4'">
                                        <table class="mt-5 table">
                                            <tbody>
                                                <tr style="background-color: teal; color: white">
                                                    <th class="border border-slate-900 p-3 font-semibold">Reference Number</th>
                                                    <th class="border border-slate-900 p-3 font-semibold">Document Name (including version, if applicable)</th>
                                                    <th class="border border-slate-900 p-3 font-semibold">Document Purpose</th>
                                                    <th class="border border-slate-900 p-3 font-semibold">Document Revision Date (if applicable)</th>
                                                </tr>
                                                <tr v-for="row in JSON.parse(data?.form)?.tableBody">
                                                    <td class="border border-slate-900 p-3" v-for="td in row?.names">
                                                        <PcidssTextarea
                                                            :name="td"
                                                            :inputValue = "inputValues[td]"
                                                            :rows="1"
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <!-- 6.5 Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === '14_1_5'">
                                        <table class="mt-5 table">
                                            <tbody>
                                                <tr style="background-color: teal; color: white">
                                                    <th class="border border-slate-900 p-3 font-semibold">Reference Number</th>
                                                    <th class="border border-slate-900 p-3 font-semibold">Title of Workpaper with Interview Notes</th>
                                                    <th class="border border-slate-900 p-3 font-semibold">Topics Covered</th>
                                                    <th class="border border-slate-900 p-3 font-semibold">Role(s) of Interviewee(s)</th>
                                                </tr>
                                                <tr v-for="row in JSON.parse(data?.form)?.tableBody">
                                                    <td class="border border-slate-900 p-3" v-for="td in row?.names">
                                                        <PcidssTextarea
                                                            :name="td"
                                                            :inputValue = "inputValues[td]"
                                                            :rows="1"
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <!-- 6.6 Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === '14_1_6'">
                                        <table class="mt-5 table">
                                            <tbody>
                                                <tr style="background-color: teal; color: white">
                                                    <th class="border border-slate-900 p-3 font-semibold">Reference Number</th>
                                                    <th class="border border-slate-900 p-3 font-semibold">Title of Workpaper or Evidence</th>
                                                    <th class="border border-slate-900 p-3 font-semibold">Topics Covered or Evidence Collected</th>
                                                    <th class="border border-slate-900 p-3 font-semibold">
                                                        Sample Set Reference Number from Table 6.3 (if applicable)
                                                    </th>
                                                </tr>
                                                <tr v-for="row in JSON.parse(data?.form)?.tableBody">
                                                    <td class="border border-slate-900 p-3" v-for="td in row?.names">
                                                        <PcidssTextarea
                                                            :name="td"
                                                            :inputValue = "inputValues[td]"
                                                            :rows="1"
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <!-- A3 C Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === 'A3_1_3'">
                                        <table class="mt-5 table">
                                            <tbody>
                                                <tr style="background-color: teal; color: white">
                                                    <th class="border border-slate-900 p-3 font-semibold">Requirement Number and Definition</th>
                                                    <th class="border border-slate-900 p-3 font-semibold">Information Required</th>
                                                    <th class="border border-slate-900 p-3 font-semibold">Explanation</th>
                                                </tr>
                                                <tr v-for="(row, rowKey) in JSON.parse(data?.form)?.tableBody" :key="rowKey">
                                                    <template v-for="(td, tdKey) in row" :key="tdKey">
                                                        <td v-if="tdKey === 'name'" class="border border-slate-900 p-2">
                                                            <input
                                                                type="text"
                                                                class="form-input"
                                                                :value="inputValues[td] ?? defaultValues.placeholder"
                                                                :name="td"
                                                            />
                                                        </td>
                                                        <td v-else-if="tdKey === 'title-1' && rowKey === 2" class="border border-slate-900 p-2" rowspan="2">
                                                            {{ td }}
                                                        </td>
                                                        <td v-else-if="tdKey !== 'name'" class="border border-slate-900 p-2">
                                                            {{ td }}
                                                        </td>
                                                    </template>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <!-- A3 E Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === 'A3_1_5'">
                                        <table class="mt-5 table">
                                            <tbody>
                                                <tr style="background-color: teal; color: white">
                                                    <th class="border border-slate-900 p-3 font-semibold" colspan="2">Requirement Number and Definition</th>
                                                </tr>
                                                <tr v-for="(row, rowKey) in JSON.parse(data?.form)?.tableBody" :key="rowKey">
                                                    <td class="border border-slate-900 p-3" v-for="(td, tdKey) in row" :key="tdKey">
                                                        <template v-if="tdKey === 'title'">
                                                            {{ td }}
                                                        </template>
                                                        <template v-else-if="tdKey === 'name'">
                                                            <input
                                                                type="text"
                                                                class="form-input"
                                                                :value="inputValues[td] ?? defaultValues.placeholder"
                                                                :name="td"
                                                            />
                                                        </template>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table class="table-bordered mt-5 table border-dark">
                                            <tbody>
                                                <tr>
                                                <td class="border border-slate-900 p-3" colspan="3">
                                                    Describe the testing procedures derived and performed by the assessor to validate that the implemented
                                                    controls meet the Customized Approach Objective; for example, whether the customized control(s) is
                                                    sufficiently robust to provide at least an equivalent level of protection as provided by the defined
                                                    approach. Note 1: Technical reviews (for example, reviewing configuration settings, operating effectiveness,
                                                    etc.) should be performed where possible and appropriate. Note 2: Add additional rows for each
                                                    assessor-derived testing procedure, as needed. Ensure that all rows to the right of the “Assessor-derived
                                                    testing procedure” are copied for each assessor-derived testing procedure that is added.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="border border-slate-900 p-3" style="width: 23%" rowspan="3">
                                                    Enter assessor-derived testing procedure here:
                                                </td>
                                                <td class="border border-slate-900 p-3" style="width: 23%">
                                                    Identify what was tested (for example, individuals interviewed, system components reviewed, processes
                                                    observed, etc.) Note: all items tested must be uniquely identified.
                                                </td>
                                                <td class="border border-slate-900 p-3" style="width: 54%">
                                                    <input
                                                        type="text"
                                                        class="form-input"
                                                        :value="inputValues['individualsInterviewedE'] ?? defaultValues.placeholder"
                                                        :name="'individualsInterviewedE'"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="border border-slate-900 p-3">Identify all evidence examined for this testing procedure.</td>
                                                <td class="border border-slate-900 p-3">
                                                    <input
                                                        type="text"
                                                        class="form-input"
                                                        :value="inputValues['testingProcedureE'] ?? defaultValues.placeholder"
                                                        :name="'testingProcedureE'"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="border border-slate-900 p-3">
                                                    Describe the results of the testing performed by the assessor for this testing procedure and how these
                                                    results verify the implemented controls meet the Customized Approach Objective.
                                                </td>
                                                <td class="border border-slate-900 p-3">
                                                    <input
                                                        type="text"
                                                        class="form-input"
                                                        :value="inputValues['describeResultsTestingPerformedE'] ?? defaultValues.placeholder"
                                                        :name="'describeResultsTestingPerformedE'"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="border border-slate-900 p-3" colspan="3">
                                                    Document the testing procedures derived and performed by the assessor to validate the controls are
                                                    maintained to ensure ongoing effectiveness; for example, how the entity monitors for control effectiveness
                                                    and how control failures are detected, responded to, and the actions taken. Note 1: Technical reviews (for
                                                    example, reviewing configuration settings, operating effectiveness, etc.) should be performed where possible
                                                    and appropriate. Note 2: Add additional rows for each assessor-derived testing procedure, as needed. Ensure
                                                    that all rows to the right of the “Assessor-derived testing procedure” are copied for each assessor-derived
                                                    testing procedure that is added.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="border border-slate-900 p-3" rowspan="3">Enter assessor-derived testing procedure here:</td>
                                                <td class="border border-slate-900 p-3">
                                                    Identify what was tested (for example, individuals interviewed, system components reviewed, processes
                                                    observed, etc.) Note: all items tested must be uniquely identified.
                                                </td>
                                                <td class="border border-slate-900 p-3">
                                                    <input
                                                        type="text"
                                                        class="form-input"
                                                        :value="inputValues['individualsInterviewedSystemComponentsReviewedE'] ?? defaultValues.placeholder"
                                                        :name="'individualsInterviewedSystemComponentsReviewedE'"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="border border-slate-900 p-3">Identify all evidence examined for this testing procedure.</td>
                                                <td class="border border-slate-900 p-3">
                                                    <input
                                                        type="text"
                                                        class="form-input"
                                                        :value="inputValues['evidenceExaminedTestingProcedureE'] ?? defaultValues.placeholder"
                                                        :name="'evidenceExaminedTestingProcedureE'"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="border border-slate-900 p-3">
                                                    Describe the results of the testing performed by the assessor for this testing procedure and how these
                                                    results verify the implemented controls are maintained to ensure ongoing effectiveness.
                                                </td>
                                                <td class="border border-slate-900 p-3">
                                                    <input
                                                        type="text"
                                                        class="form-input"
                                                        :value="inputValues['implementedControlsMaintainedE'] ?? defaultValues.placeholder"
                                                        :name="'implementedControlsMaintainedE'"
                                                    />
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <!-- Show Title And Input Filed -->
                                <div v-else>
                                    <table class="border border-slate-900" v-if="!JSON.parse(data?.form)?.isRequirement">
                                        <tr class="border border-slate-900" v-for="row in JSON.parse(data?.form)?.tableBody">
                                            <!-- Title Show -->
                                            <td
                                                class="px-2 align-top"
                                                :class="{
                                                    'font-bold  py-2': row?.colspan,
                                                }"
                                                :style="{
                                                    backgroundColor: row?.bg,
                                                    color: row?.bg ? 'white' : 'black',
                                                }"
                                                :colspan="row?.colspan"
                                                v-if="row?.title"
                                                v-html="row?.title"
                                            />

                                            <!-- 1.3 Content Show -->
                                            <td class="w-[55%] border border-slate-900 p-2" v-if="row?.pciDss === '1.3'">
                                                <div class="space-y-1">
                                                    <label class="flex items-center space-x-1" v-for="(item, key) in row?.content">
                                                        <PcidssCheckbox
                                                            :name="item?.name"
                                                            :inputValue="inputValues[item?.name]"
                                                        />
                                                        <span class="text-gray-700 cursor-pointer">{{ item?.label}}</span>
                                                    </label>
                                                </div>
                                            </td>

                                            <!-- 1.4 Content Show -->
                                            <td class="w-[55%] border border-slate-900 p-2" v-if="row?.pciDss === '1.4'">
                                                <div class="flex items-center gap-4">
                                                    <div v-for="(item, key) in row?.content" :key="key" class="flex items-center space-x-4">
                                                        <label class="flex items-center space-x-1">
                                                            <PcidssCheckbox
                                                                :name="item?.name"
                                                                :inputValue="inputValues[item?.name]"
                                                            />
                                                            <span class="text-gray-700 cursor-pointer">{{ item?.label}}</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </td>

                                            <!-- 1.5 Content Show -->
                                            <td class="w-[55%] border border-slate-900 p-2" v-if="row?.pciDss === '1.5'">
                                                <div class="flex items-center gap-4">
                                                    <div v-for="(item, key) in row?.content" :key="key" class="flex items-center space-x-4">
                                                        <label class="flex items-center space-x-1">
                                                            <PcidssCheckbox
                                                                :name="`${item?.name}`"
                                                                :inputValue="inputValues[`${item?.name}`]"
                                                            />
                                                            <span class="text-gray-700 cursor-pointer">{{ item?.label}}</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </td>

                                            <!-- 1.7 Content Show -->
                                            <tr v-if="row?.pciDss === '1.7'" v-for="(item, key) in row?.content" :key="key">
                                                <!-- First column with checkbox -->
                                                <td class="w-[15%] border border-slate-900 p-2 text-center">
                                                    <PcidssCheckbox
                                                    :name="item?.name"
                                                    :inputValue="inputValues[item?.name]"
                                                    />
                                                </td>
                                                <!-- Second column with text -->
                                                <td class="w-[85%] border border-slate-900 p-2">
                                                    <span class="text-gray-700 cursor-pointer">{{ item?.title }}</span>
                                                </td>
                                            </tr>

                                            <!-- 2.1 for second last multiple checkbox -->
                                            <td class="w-[60%] border border-slate-900 p-2" v-if="row?.checkboxContent">
                                                <div class="flex items-center gap-4">
                                                    <div v-for="(item, key) in row?.checkboxContent" :key="key" class="flex items-center space-x-4">
                                                        <label class="flex items-center space-x-1">
                                                            <PcidssCheckbox
                                                                :name="`${item?.name}`"
                                                                :inputValue="inputValues[`${item?.name}`]"
                                                            />
                                                            <span class="text-gray-700 cursor-pointer">{{ item?.label}}</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </td>

                                            <!-- 6.1 Content Show -->
                                            <td class="w-[55%] border border-slate-900 p-2" v-if="row?.pciDss === '3.2' || row?.pciDss === '6.1' || row?.pciDss === '6.2'">
                                                <div class="flex items-center gap-4">
                                                    <div v-for="(item, key) in row?.content" :key="key" class="flex items-center space-x-4">
                                                        <label class="flex items-center space-x-1">
                                                            <PcidssCheckbox
                                                                :name="`${item?.name}`"
                                                                :inputValue="inputValues[`${item?.name}`]"
                                                            />
                                                            <span class="text-gray-700 cursor-pointer">{{ item?.label}}</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </td>

                                            <!-- default apply for all -->
                                            <td class="w-[60%] border border-slate-900 p-0" v-if="row?.name">
                                                <PcidssTextarea
                                                    :name="row?.name"
                                                    :inputValue = "inputValues[row?.name]"
                                                    :rows="getRows(row?.name)"
                                                />
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <!-- Show PciDss -->
                        <div v-else>
                            <div class="p-2 text-white" style="background-color: teal">{{ defaultValues.descriptionTitle }}</div>
                            <div class="py-4 font-semibold" v-html="data?.description?.title" />
                            <div>
                                <div class="p-2 text-white" style="background-color: teal">{{ defaultValues.pciDssTitle }}</div>
                                <div class="py-4 font-semibold" v-html="data?.title" />
                                <div>
                                    <table class="table-bordered table border-secondary text-dark">
                                        <thead>
                                            <tr>
                                                <th
                                                    class="border border-slate-900 text-xl font-bold"
                                                    colspan="4"
                                                    style="background-color: teal; color: white; text-align: center"
                                                >
                                                    Assessment Findings (select one)
                                                </th>
                                                <th
                                                    class="border border-slate-900 text-xl font-bold"
                                                    colspan="4"
                                                    style="background-color: #b57faf; color: white; text-align: center"
                                                >
                                                    Select If Below Method(s) Was Used
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style="text-align:center;" class="border border-slate-900 bg-gray-100 text-center text-md font-bold whitespace-nowrap">In Place</td>
                                                <td style="text-align:center;" class="border border-slate-900 bg-gray-100 text-center text-md font-bold whitespace-nowrap">Not Applicable</td>
                                                <td style="text-align:center;" class="border border-slate-900 bg-gray-100 text-center text-md font-bold whitespace-nowrap">Not Tested</td>
                                                <td style="text-align:center;" class="border border-slate-900 bg-gray-100 text-center text-md font-bold whitespace-nowrap">Not in Place</td>
                                                <td style="text-align:center;" class="border border-slate-900 bg-pink-100 text-center text-md font-bold whitespace-nowrap">Compensating Control*</td>
                                                <td style="text-align:center;" class="border border-slate-900 bg-pink-100 text-center text-md font-bold whitespace-nowrap">Customized Approach*</td>
                                            </tr>
                                            <tr>
                                                <td
                                                    v-for="(name, key) in JSON.parse(data?.form).names"
                                                    :key="key"
                                                    class="border border-slate-900 p-3 text-center"
                                                    style="text-align: center;"
                                                >
                                                    <PcidssCheckbox
                                                        :name="name"
                                                        :inputValue="inputValues[name]"
                                                        :checked="key == 1"
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr class="bg-teal ">
                                                <td class="border border-slate-900 p-3 text-left align-top text-white" colspan="3" style="width: 50%">
                                                    <div class="text-dark" v-html="JSON.parse(data?.form)?.note?.title"></div>
                                                </td>
                                                <td class="border border-slate-900 p-0 mb-0 align-top" colspan="3">
                                                    <PcidssTextarea
                                                        :name="JSON.parse(data?.form)?.note?.name"
                                                        :inputValue = "inputValues[JSON.parse(data?.form)?.note?.name]"
                                                        :rows="10"
                                                    />
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    <table class="table-bordered table border-dark" v-if="JSON.parse(data?.form).tableBody">
                                        <thead>
                                            <tr>
                                                <th
                                                    class="border border-t-0 border-slate-900 text-white text-lg font-bold"
                                                    style="width: 25%; background-color: teal; text-align: center"
                                                >
                                                    Testing Procedures
                                                </th>
                                                <th
                                                    class="border border-t-0 border-slate-900 text-white text-lg font-bold"
                                                    style="width: 25%; background-color: teal; text-align: center"
                                                >
                                                    Reporting Instructions
                                                </th>
                                                <th
                                                    class="border border-t-0 border-slate-900 text-white text-lg font-bold"
                                                    style="width: 50%; background-color: teal; text-align: center"
                                                >
                                                    Reporting Details: Assessor’s Response
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(tr, trIndex) in JSON.parse(data?.form).tableBody" :key="trIndex">
                                                <td
                                                    class="border border-slate-900 p-0 mb-0 align-top"
                                                    v-for="(td, tdIndex) in tr.td"
                                                    :key="tdIndex"
                                                    :rowspan="tr?.rowspan && tdIndex == 0 ? tr?.rowspan : null"
                                                >
                                                <PcidssTextarea
                                                    v-if="tdIndex === 'name'"
                                                    :name="td"
                                                    :inputValue = "inputValues[td]"
                                                    :rows="10"
                                                />
                                                    <div v-else v-html="td" class="p-2"></div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <button class="btn btn-info btn-lg mt-4" :disabled="isLoading" type="submit">
                        <ButtonLoader :isLoading="isLoading" />
                        Save
                    </button> -->
                </form>
            </div>
        </div>
    </div>
    <div
        :class="[
            isOpen ? 'translate-x-0' : 'translate-x-full',
            'fixed right-0 top-0 z-50 h-full w-[950px] bg-white shadow-lg transition-transform duration-300 ease-in-out dark:bg-black',
        ]"
    >
        <div class="flex items-center justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-black">
            <h2 class="text-2xl font-bold">Reference Panel</h2>
            <button @click="isOpen = false" class="btn btn-sm btn-danger">✕</button>
        </div>
        <div class="px-4 py-2">
            <div>
                <ul class="flex gap-4 mb-3">
                    <li @click="fetchEvidence('document')" class="bg-gray-200 text-dark px-3 py-2 rounded-sm cursor-pointer block w-full text-center hover:bg-info hover:text-white" :class="{'bg-info text-white': currentTab === 'document'}">Document</li>
                    <li @click="fetchEvidence('interview')" class="bg-gray-200 text-dark px-3 py-2 rounded-sm cursor-pointer block w-full text-center hover:bg-info hover:text-white" :class="{'bg-info text-white': currentTab === 'interview'}">Interview</li>
                    <li @click="fetchEvidence('assessment')" class="bg-gray-200 text-dark px-3 py-2 rounded-sm cursor-pointer block w-full text-center hover:bg-info hover:text-white" :class="{'bg-info text-white': currentTab === 'assessment'}">Assessment</li>
                </ul>
            </div>
            <div>
                <div class="table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th class="border border-white-dark">Reference Number</th>
                            <th class="border border-white-dark">{{ evidenceTitle.name?.title }}</th>
                            <th class="border border-white-dark">{{ evidenceTitle?.purpose}}</th>
                            <th class="border border-white-dark">{{ evidenceTitle?.revisionDate?.title}}</th>
                            <th class="border border-white-dark">File Type</th>
                            <!-- <th class="border border-white-dark text-right" v-if="!otherProject">Action</th> -->
                        </tr>
                    </thead>

                    <tbody v-if="evidences?.length">
                        <tr class="" v-for="(evidence,key) in evidences">
                            <td class="border border-white-dark">{{ evidence?.reference_number_value ?? '---' }}</td>
                            <td class="border border-white-dark">{{ evidence?.document_name_value ?? '---' }}</td>
                            <td class="border border-white-dark">{{ evidence?.document_purpose_value ?? '---' }}</td>
                            <td class="border border-white-dark">{{ evidence?.document_revision_date_value ?? '---' }}</td>
                            <td class="border border-white-dark">
                                <span class="px-[10px] py-[1px] rounded-sm text-white font-semibold text-sm"
                                    :class="getExtensionColor(evidence?.extension)"
                                    >{{ evidence?.extension }}</span>
                            </td>
                            <!-- <td class="border border-white-dark text-right" v-if="!otherProject">
                                <div class="flex gap-1">
                                    <button @click="getEvidenceById(evidence?.id)" class="btn btn-info btn-sm">
                                        Add
                                    </button>
                                    <button @click="showEvidence(evidence?.id)" class="btn btn-info btn-sm">
                                        View
                                    </button>
                                </div>
                            </td> -->
                        </tr>
                    </tbody>
                </table>
                <template v-if="!(evidences?.length)">
                        <h3 class="text-xl font-semibold text-center mt-40">No Data Found</h3>
                </template>
                </div>
            </div>
        </div>
    </div>

    <div :class="[
        isOpenEdit ? 'translate-x-0' : 'translate-x-full',
        'fixed right-0 top-0 z-50 h-full w-[950px] bg-white dark:bg-black shadow-lg transition-transform duration-300 ease-in-out',
    ]">
        <div class="flex items-center justify-between border-b border-gray-200 bg-gray-50 dark:bg-black dark:border-gray-800 p-4">
            <h2 class="text-2xl font-semibold">Create {{ title }}</h2>
            <button @click="isOpenEdit = false" class="btn btn-sm btn-info">✕</button>
        </div>
        <div class="p-4">
            <form @submit.prevent="submitEditForm">
                <div class="space-y-5">
                    <div>
                        <label for="number">Reference Number <small class="text-red-500">*</small></label>
                        <input v-model="editForm.reference_number_value" id="number" type="text" placeholder="Enter reference number"
                            class="form-input" />
                        <p v-if="errors?.number" class="text-red-500">{{ errors?.number[0] }}</p>
                    </div>

                    <div>
                        <label for="name">{{ evidenceTitle.name?.title }} <small class="text-red-500">*</small></label>
                        <input v-model="editForm.document_name_value" id="name" type="text" :placeholder="`${evidenceTitle.name?.title} ${evidenceTitle.name?.subTitle}`"
                            class="form-input" />
                        <p v-if="errors?.name" class="text-red-500">{{ errors?.name[0] }}</p>
                    </div>

                    <div>
                        <label for="purpose">{{ evidenceTitle.purpose }} <small class="text-red-500">*</small></label>
                        <input v-model="editForm.document_purpose_value" id="purpose" type="text" :placeholder="evidenceTitle.purpose"
                            class="form-input" />
                        <p v-if="errors?.purpose" class="text-red-500">{{ errors?.purpose[0] }}</p>
                    </div>

                    <div>
                        <label for="revision_date">{{ evidenceTitle.revisionDate?.title}} <small class="text-red-500">*</small></label>
                        <input v-model="editForm.document_revision_date_value" id="revision_date" :type="currentTab === tabs.DOCUMENT ? 'date' : 'text'" :placeholder="`${evidenceTitle.revisionDate?.title} ${evidenceTitle.revisionDate?.subTitle}`"
                            class="form-input" />
                        <p v-if="errors?.revision_date" class="text-red-500">{{ errors?.revision_date[0] }}</p>
                    </div>


                    <div>
                        <div class="flex gap-2 items-center">
                            <label for="file">Reference File <code>Docx,PDF,Text etc...</code> <small class="text-red-500">*</small></label>
                            <span v-if="editForm.file" @click="showEvidence(editForm?.id)">
                                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" class="w-4 h-4 cursor-pointer">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <g fill="#000000">
                                        <path d="M9 .75A.75.75 0 019.75 0h4.5c.206 0 .393.083.529.218l.001.002.002.001A.748.748 0 0115 .75v4.5a.75.75 0 01-1.5 0V2.56L7.28 8.78a.75.75 0 01-1.06-1.06l6.22-6.22H9.75A.75.75 0 019 .75z"></path>
                                        <path d="M3.25 3.5a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0110.75 14h-7.5A2.25 2.25 0 011 11.75v-7.5A2.25 2.25 0 013.25 2h4a.75.75 0 010 1.5h-4z"></path>
                                    </g>
                                    </g>
                                </svg>
                            </span>
                        </div>

                        <input @change="uploadFile" id="file" type="file" placeholder="Enter reference file" class="form-input" />
                        <p v-if="errors?.file" class="text-red-500">{{ errors?.file[0] }}</p>
                    </div>

                    <div>
                        <button type="submit" class="btn btn-info" :disabled="isLoading" >
                            <ButtonLoader :isLoading="isLoading"/>
                            {{ 'Submit' }}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div :class="[
        isShow ? 'translate-x-0' : 'translate-x-full',
        'fixed right-0 top-0 z-50 h-full w-[950px] bg-white shadow-lg transition-transform duration-300 ease-in-out overflow-hidden',
    ]">
        <div class="flex items-center justify-between bg-gray-50 p-4">
            <h2 class="text-2xl font-semibold">Show {{ title }}</h2>
            <button @click="isShow = false" class="btn btn-sm btn-info">✕</button>
        </div>
        <div class="p-4">
            <template v-if="evidence?.file === null">
                <div class="flex flex-col items-center justify-center h-screen gap-3 text-center">
                    <h1 class="font-semibold text-2xl">No Data Found</h1>
                </div>
            </template>
            <template v-else>
                <template v-if="evidence?.extension === 'pdf'">
                <div class="w-full h-screen overflow-hidden">
                    <iframe class="w-full h-full" :src="evidence?.fileUrl"></iframe>
                </div>
            </template>
              <!-- Image Display with Standard Design -->
            <template v-if="evidence?.extension === 'jpg' || evidence?.extension === 'jpeg' || evidence?.extension === 'png'">
                <div class="w-full h-[80vh] max-w-full flex items-center justify-center overflow-hidden bg-gray-100">
                    <img class="max-w-full max-h-full object-contain" :src="evidence?.fileUrl" alt="evidence">
                </div>
            </template>

            <template v-else>
                <div class="w-full h-screen overflow-hidden">
                    <iframe class="w-full h-full" :src="evidence?.fileUrl"></iframe>
                </div>
            </template>
            </template>

        </div>
    </div>
</template>
