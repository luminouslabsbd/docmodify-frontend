<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import { toast } from "vue3-toastify";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import Evidence from "~/components/evidence/Evidence.vue";
import { tabs } from "~/utils/helper";
import { useTokenStore } from "~/stores/useTokenStore";

definePageMeta({
    middleware:['auth']
})

useHead({ title: 'Assessment' });


const defaultValues = ref({
    descriptionTitle: "Requirement Description",
    pciDssTitle: "PCI DSS Requirement",
    placeholder: "Not Applicable",
    inputDefaultValue: "Not Applicable",
    checkboxDefaultValue: "☐",
    checked: '☒',
    notChecked: '☐',
});

const selectedTab = ref(tabs.DOCUMENT);
const route = useRoute();
const inputValues = ref({});
const isOpen = ref(false);
const evidences = ref([]);
const requirementId = ref(1)
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
)

const setRequirementId = (id) => {
    requirementId.value = id;
}


// const { data, refresh } = await useApiFetch('/user/get-form', {
//     method: 'POST',
//     immediate: true,
//     watch: [requirementId],
//     body: {
//         requirementId,
//         projectId:route.params.id,
//     }
// }, {
//     watch: [requirementId]
// });

// watch(data.value, (value)=>{
//     console.log("data", data)
//     console.log("watch value", value)
// })

// if(data.value){

//     console.log(data.value)
//     inputValues.value = JSON.parse(data.value?.values);
// }



const { data , refresh, pending:getFrompending , status:getFromStatus} = await useApiFetch('/user/get-form', {
  method: 'POST',
  immediate: true,
  body: {
    requirementId,
    projectId: route.params.id,
  }
}, {
  watch: [requirementId]
});

// Watch for changes in `data` and update `inputValues`
watch(data, (newData) => {
  if (newData?.values) {
    try {
      inputValues.value = JSON.parse(newData.values);
    } catch (error) {
      console.error("Failed to parse `values` in data:", error);
      inputValues.value = {}; // reset to empty object if parsing fails
    }
  }
}, { immediate: true }); // immediate: true to apply it on initial load as well

// Optional: Watch for changes in `requirementId` and refresh `data`
watch(requirementId, () => {
  refresh(); // Trigger API refetch when `requirementId` changes
});







const submitForm = async () => {
    const formData = new FormData(event.target);
    const pciDss = {};
    formData.forEach((value, key) => {
        pciDss[key] = value;
    });
    try {
        const { data: pciDssSubmit } = await useApiFetch('/user/submit-pci-data', {
            method: 'POST',
            body: JSON.stringify({
                form: pciDss,
                projectId: route.params.id,
                requirementId: data.value?.requirement_id,
                descriptionId: data.value?.description_id,
                pciDssId: data.value?.id
            }),
        });

        console.log("🚀 ~ submitForm ~ data:", pciDssSubmit.value)
        toast.success("Docx data create or update success!");
    } catch (error) {
        console.error("Error submitting form:", error);
    }

};

const changeTab = async (tab) => {
    selectedTab.value = tab;
    await fetchEvidence();
}

const fetchEvidence = async () => {
    const { data, error, status } = await useApiFetch(`/user/evidence/${selectedTab.value}`, {
        method: 'GET'
    });
    if (status.value === 'success') {
        evidences.value = data.value?.data;
        isOpen.value = true
    }

    if (status.value === 'error') {
        console.log('Error ', error)
    }
}



// menu active and de-active system using by key

const activeRequirement = ref(0)
const activeDescription = ref(0)
const activePciDss = ref(0)


</script>
<template>
    <div class="panel">
        <div
            class="mb-5 flex items-center justify-between sticky top-[58px] bg-white dark:bg-black-dark-light dark:text-dark-light backdrop:blur-md px-3 py-3 border-b border-gray-100 dark:border-slate-800">
            <h5 class="text-lg font-semibold dark:text-white-light">Assignment - PCI DSS v4.0.1 Report on Compliance
            </h5>
            <button @click="fetchEvidence()" type="button" class="btn btn-info btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <span class="ml-2">Reference</span>
            </button>
        </div>
        <div class="flex justify-between">
            <div class="w-3/12 p-4">
                <ul class="max-h-screen h-full overflow-y-scroll menu-scroll">
                    <li v-for="(requirement, reqIndex) in menus"
                        @click="activeRequirement = requirement.id"
                        :key="'req_key_' + reqIndex">

                        <h3 class="font-bold bg-gray-300 dark:bg-slate-800 px-3 py-2 mb-1 rounded-sm cursor-pointer"
                        :class="{'bg-info text-white': requirement.id === activeRequirement}">
                            {{ requirement?.title }}
                        </h3>

                        <ul class="ml-3" v-if="requirement.id === activeRequirement">
                            <li v-for="(description, descIndex) in requirement?.descriptions"
                                @click="activeDescription = description.id"
                                :key="'desc_key_' + descIndex">

                                <h3 class="px-2 py-1 mb-1 bg-gray-200 dark:bg-slate-800/75 rounded-sm cursor-pointer"
                                    :class="{'bg-info text-white': description.id === activeDescription}"
                                    v-html="description?.title">
                                </h3>

                                <ul class="ml-6" v-if="description.id === activeDescription">
                                    <li v-for="(pciDss, pciIndex) in description?.pci_dss"
                                        @click.stop="setRequirementId(pciDss?.id)"
                                        :key="'pcidss_key_' + pciIndex">

                                        <h3 class="px-2 py-1 bg-gray-100 dark:bg-slate-700 mb-2 rounded-sm cursor-pointer hover:bg-info hover:text-white"
                                        :class="{'bg-info text-white': pciDss.id === data.id}">
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
                <div class="h-full flex items-start justify-center mt-10" v-if="getFromStatus === 'pending'">
                    <div class="flex items-center flex-col">
                        <SklitonLoader/>
                        <p class="text-lg font-bold">Please Wait</p>
                    </div>
                </div>
                <form @submit.prevent="submitForm" v-if="getFromStatus === 'success'">
                    <h2 class="text-2xl font-bold">{{ data?.description?.requirement?.title }}</h2>
                    <div class="">
                        <div v-if="JSON.parse(data?.description?.form)?.assignment">
                            <h3 class="text-xl font-bold">{{ data?.description?.title }}</h3>
                            <div class="">
                                <h4 class="text-lg font-semibold text-red-600 my-3">{{ data?.title }}</h4>
                                <div v-if="JSON.parse(data?.form)?.subTitle"
                                    v-html="JSON.parse(data?.form)?.subTitle" />

                                <!-- 1.8 Requirement Table -->
                                <div v-if="JSON.parse(data?.form)?.isRequirement">
                                    <table class="table border border-slate-900">
                                        <thead>
                                            <tr>
                                                <th rowspan="2" class="align-middle"
                                                    style="background: teal;color: white;">
                                                    PCI DSS Requirement
                                                </th>
                                                <th colspan="4" class="align-middle"
                                                    style="background: teal;color: white;">
                                                    Assessment Finding
                                                    Select all options that apply.</th>
                                                <th colspan="2" class="align-middle"
                                                    style="background: #B57FAF;color: white;">
                                                    Select If Below Method(s) Was Used</th>
                                            </tr>
                                            <tr>
                                                <th class="" style="background-color: #CBD4D5;color: black;">In Place
                                                </th>
                                                <th class="" style="background-color: #CBD4D5;color: black;">Not
                                                    Applicable</th>
                                                <th class="" style="background-color: #CBD4D5;color: black;">Not Tested
                                                </th>
                                                <th class="" style="background-color: #CBD4D5;color: black;">Not in
                                                    Place</th>
                                                <th class="" style="background-color: #EBD6E4;color: black;">
                                                    Compensating Control
                                                </th>
                                                <th class="" style="background-color: #EBD6E4;color: black;">Customized
                                                    Approach
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style="border: 1px solid;padding:3px 5px;"
                                                v-for="(row, key) in JSON.parse(data?.form)?.tableBody">
                                                <td style="border: 1px solid;" class="text-dark">{{ row?.title }}</td>
                                                <td style="border: 1px solid;" class="text-dark"
                                                    v-for="(td, key) in row?.inputs">
                                                    <input type="hidden"
                                                        :name="td?.name"
                                                        :value="defaultValues.notChecked" />
                                                    <input type="checkbox" :name="td?.name"
                                                        :checked="(inputValues[td?.name] && inputValues[td?.name] === '☒')"
                                                        class="form-check-input border border-secondary"
                                                        :value="defaultValues.checked" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                 <!-- Show specific design table -->
                                <div v-if="JSON.parse(data?.form)?.isAssignmentKey">
                                    <!-- 4.2 Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === '13_4_2'">
                                        <div class="">
                                            <table class="table border">
                                                <tr>
                                                    <td class="p-2" colspan="2">
                                                        <p>Identify in which of the following account data flows the
                                                            assessed entity participates:</p>
                                                        <p><b>Note:</b>These data flows must be described in detail in
                                                            the sections of the table that follow.</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="flex p-2">
                                                        <div class="flex gap-3"
                                                            v-for="(item) in ['Authorization', 'Capture', 'Settlement', 'Chargeback/Dispute', 'Refunds', 'Other']">
                                                            <input type="hidden" name="whichFollowingAccount_4_2"
                                                                :value="defaultValues.notChecked" />
                                                            <input type="checkbox" :name="'whichFollowingAccount_4_2'"
                                                                class="form-check-input border border-secondary text-center w-4 h-4"
                                                                :checked="(inputValues['whichFollowingAccount_4_2'] && inputValues['whichFollowingAccount_4_2'] == '☒')"
                                                                :value="defaultValues.checked" />
                                                            <label for="">{{ item }}</label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p><b>Identify and describe all data flows.</b>Descriptions
                                                            should include how and where account data enters the
                                                            environment, is transmitted, is processed, is stored, and
                                                            how and why any personnel access the account data. Add rows
                                                            as necessary.</p>
                                                    </td>
                                                </tr>
                                            </table>
                                            <table class="table border border-slate-900">
                                                <tr>
                                                    <td class="p-2 font-semibold text-white"
                                                        style="text-align:center; background-color: teal; width:35%;">
                                                        Account data flows (For example, account data flow 1, account
                                                        data flow 2)
                                                    </td>

                                                    <td class="p-2 font-semibold text-white"
                                                        style="text-align:center; background-color: teal; width:65%;">
                                                        Description (Include the type of account data)
                                                    </td>
                                                </tr>
                                                <tr v-for="(item) in 2">
                                                    <td class="border border-slate-900 p-3">
                                                        <input type="text" class="form-input"
                                                            :value="inputValues[`accountDataFlows_4_2_${item}`] ?? defaultValues.placeholder"
                                                            :name="`accountDataFlows_4_2_${item}`" />
                                                    </td>
                                                    <td class="border border-slate-900 p-3">
                                                        <input type="text" class="form-input"
                                                            :value="inputValues[`descriptionInclude_4_2_${item}`] ?? defaultValues.placeholder"
                                                            :name="`descriptionInclude_4_2_${item}`" />
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>

                                    <!-- 4.3 Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === '13_4_3'">
                                    <table class="table mt-3">
                                        <thead>
                                            <tr class="text-center border border-slate-900">
                                                <th class="font-semibold"
                                                    style="background-color: teal;color:white; text-align: center;">Data
                                                    Store <sup>1</sup></th>
                                                <th class="font-semibold"
                                                    style="background-color: teal;color:white; text-align: center;">File
                                                    Name(s),Table Names(s)and/or Field Names</th>
                                                <th class="font-semibold"
                                                    style="background-color: teal;color:white; text-align: center;">
                                                    Account Data Elements Stored<sup>2</sup></th>
                                                <th class="font-semibold"
                                                    style="background-color: teal;color:white; text-align: center;">How
                                                    Data Is Secured<sup>3</sup></th>
                                                <th class="font-semibold"
                                                    style="background-color: teal;color:white; text-align: center;">How
                                                    Access to Data Stores Is Logged <sup>4</sup></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(row, key) in JSON.parse(data?.form)?.tableBody">
                                                <td class="border border-slate-900" v-for="(name) in row?.names">
                                                    <input type="text" class="form-input"
                                                        :value="inputValues[name] ?? defaultValues.placeholder"
                                                        :name="name" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <ol class="mt-3" style="list-style: square;">
                                        <li>Database name, file server name, and so on.</li>
                                        <li>For example, PAN, expiry, cardholder name, and so on.</li>
                                        <li>For example, what type of encryption and strength.</li>
                                        <li>
                                            Description of logging mechanism used for logging access to data —
                                            for example, describe the enterprise log management solution,
                                            application-level logging, operating system logging, etc. in place.
                                        </li>
                                    </ol>

                                    <div class="mt-3">
                                        <h3 class="text-lg font-semibold">4.3.1 Storage of SAD</h3>
                                        <table class="table table-bordered border-secondary">
                                            <tr>
                                                <td class="border border-slate-900 p-2" colspan="2">
                                                    <p>If SAD is stored complete the following:</p>
                                                    <li>Note: Anywhere SAD is stored should be documented in the table
                                                        in 4.3</li>
                                                </td>
                                            </tr>
                                            <tr class="border border-slate-900">
                                                <td class="border border-slate-900 p-2">Indicate whether SAD is stored
                                                    post authorization:</td>
                                                <td class="border border-slate-900 p-2">
                                                    <div class="flex gap-2">
                                                        <div class="flex gap-2">
                                                            <input type="hidden"
                                                                :name="`indicateWhetherSADAuthorization_4_3_1`"
                                                                :value="defaultValues.notChecked" />
                                                            <input type="checkbox"
                                                                :name="`indicateWhetherSADAuthorization_4_3_1`"
                                                                class="form-check-input border border-secondary text-center w-4 h-4"
                                                                :checked="(inputValues[name] && inputValues[name] == '☒')"
                                                                :value="defaultValues.checked" />

                                                            <label
                                                                for="indicateWhetherSADAuthorization_4_3_1_yes">Yes</label>
                                                        </div>

                                                        <div class="flex gap-2">

                                                            <input type="hidden"
                                                                :name="`indicateWhetherSADAuthorization_4_3_1`"
                                                                :value="defaultValues.notChecked" />
                                                            <input type="checkbox"
                                                                :name="`indicateWhetherSADAuthorization_4_3_1`"
                                                                class="form-check-input border border-secondary text-center w-4 h-4"
                                                                :checked="(inputValues[name] && inputValues[name] == '☒')"
                                                                :value="defaultValues.checked" />

                                                            <label
                                                                for="indicateWhetherSADAuthorization_4_3_1_no">No</label>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="border border-slate-900 p-2">Indicate whether SAD is stored
                                                    as part of Issuer functions:</td>
                                                <td class="border border-slate-900 p-2">
                                                    <div class="flex gap-2">
                                                        <div class="flex gap-2 items-center justify-center">
                                                            <input type="hidden"
                                                                :name="`indicateWhetherSADIssuerFunction_4_3_1`"
                                                                :value="defaultValues.notChecked" />
                                                            <input type="checkbox"
                                                                :name="`indicateWhetherSADIssuerFunction_4_3_1`"
                                                                class="form-check-input border border-secondary text-center w-4 h-4"
                                                                :checked="(inputValues[name] && inputValues[name] == '☒')"
                                                                :value="defaultValues.checked" />
                                                            <label
                                                                for="indicateWhetherSADIssuerFunction_4_3_1_yes">Yes</label>
                                                        </div>

                                                        <div class="flex gap-2 items-center justify-center">
                                                            <input type="hidden"
                                                                :name="`indicateWhetherSADIssuerFunction_4_3_1`"
                                                                :value="defaultValues.notChecked" />
                                                            <input type="checkbox"
                                                                :name="`indicateWhetherSADIssuerFunction_4_3_1`"
                                                                class="form-check-input border border-secondary text-center w-4 h-4"
                                                                :checked="(inputValues[name] && inputValues[name] == '☒')"
                                                                :value="defaultValues.checked" />


                                                            <label
                                                                for="indicateWhetherSADAuthorization_4_3_1_no">No</label>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    </div>

                                    <!-- 4.4 Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === '13_4_4'">
                                        <table class="table table-bordered border-secondary">
                                            <tr style="background-color: teal;color: white;">
                                                <th class="border border-slate-900 p-3 text-center" rowspan="2">Company Name</th>
                                                <th class="border border-slate-900 p-3 text-center" rowspan="2">
                                                    Identify what account data is shared, or if account data is not shared,
                                                    how the organization could
                                                    impact the security of account data<sup>1</sup>
                                                </th>
                                                <th class="border border-slate-900 p-3 text-center" rowspan="2">
                                                    Describe the purpose for utilizing the service provider<sup>2</sup>
                                                </th>
                                                <th class="border border-slate-900 p-3 text-center" colspan="2">
                                                    Has the third party been assessed separately against PCI DSS?
                                                </th>
                                                <th class="border border-slate-900 p-3 text-center" colspan="2">
                                                    If Yes,<br>
                                                    identify the date and PCI DSS version of the AOC
                                                </th>
                                                <th class="border border-slate-900 p-3 text-center" colspan="2">
                                                    If No, were the services provided by the third party included in this
                                                    assessment?
                                                </th>
                                            </tr>
                                            <tr style="background-color: #e1e1e1;">
                                                <!-- <td></td> -->
                                                <td class="border border-slate-900 p-2">Yes</td>
                                                <td class="border border-slate-900 p-2">No</td>
                                                <td class="border border-slate-900 p-2">Date</td>
                                                <td class="border border-slate-900 p-2">Version</td>
                                                <td class="border border-slate-900 p-2">Yes</td>
                                                <td class="border border-slate-900 p-2">No</td>
                                            </tr>
                                            <tr v-for="(row) in JSON.parse(data?.form)?.tableBody">
                                                <td class="border border-slate-900 p-1" v-for="(td, key) in row?.names">
                                                    <div v-if="key === 3 || key === 4 || key === 7 || key === 8">
                                                        <input type="hidden" :name="name"
                                                            :value="defaultValues.notChecked" />
                                                        <input type="checkbox" :name="name"
                                                            class="form-check-input border border-secondary text-center w-4 h-4"
                                                            :checked="(inputValues[name] && inputValues[name] == '☒') ?? key == 1"
                                                            :value="defaultValues.checked" />
                                                    </div>
                                                    <div v-else>
                                                        <input type="text" class="form-input"
                                                            :value="inputValues[td] ?? defaultValues.placeholder"
                                                            :name="td" />
                                                    </div>
                                                </td>
                                            </tr>

                                        </table>

                                        <ul class="mt-3">
                                            <li>1 For example, PAN, expiry date, providing support via remote access, and so on.</li>
                                            <li>2 For example, third-party storage, transaction processing, custom software development, and so on.</li>
                                        </ul>
                                    </div>

                                    <!-- 4.5 Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === '13_4_5'">
                                    <table class="mt-3">
                                        <tr class="text-center border border-slate-900" style="background-color: teal;color: white;">
                                            <th class="p-2">Network Name (In scope)</th>
                                            <th class="p-2">Type of Network</th>
                                            <th class="p-2">Function/ Purpose of Network</th>
                                        </tr>
                                        <tr v-for="(row) in JSON.parse(data?.form)?.tableBody">
                                            <td class="border border-slate-900 p-2" v-for="(td) in row?.names">
                                                <input type="text" class="form-input"
                                                    :value="inputValues[td] ?? defaultValues.placeholder"
                                                    :name="td" />
                                            </td>
                                        </tr>
                                    </table>
                                    <div class="mt-5">
                                        Describe all networks that do not store, process, and/or transmit Account Data but are still in scope—for example, connected to the CDE or provide management functions to the CDE, etc.
                                    </div>
                                    </div>

                                    <!-- 4.6 Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === '13_4_6'">
                                        <table class="mt-3">
                                            <tr class="text-center" style="background-color: teal;color: white;">
                                                <th class="border border-slate-900 text-center p-2">Facility Type
                                                    (Datacenters, corporate office, call center, mail processing facility, etc.)</th>
                                                <th class="border border-slate-900 text-center p-2">Total Number of Locations
                                                    (How many locations of this type are in scope)</th>
                                                <th class="border border-slate-900 text-center p-2">Location(s) of Facility
                                                    (for example, city, country)</th>
                                            </tr>
                                            <tr v-for="(row) in JSON.parse(data?.form)?.tableBody">
                                                <td class="border border-slate-900 p-2" v-for="(td) in row?.names">
                                                    <input type="text" class="form-input"
                                                        :value="inputValues[td] ?? defaultValues.placeholder"
                                                        :name="td" />
                                                </td>
                                            </tr>
                                        </table>
                                        <div class="mt-5">
                                            Describe all networks that do not store, process, and/or transmit Account Data but are still in scope—for example, connected to the CDE or provide management functions to the CDE, etc.
                                        </div>
                                    </div>

                                    <!-- 4.7 Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === '13_4_7'">
                                        <table class="mt-3">
                                            <tr class="text-center" style="background-color: teal;color: white;">
                                                <th class="border border-slate-900 text-center font-semibold p-3">Type of System Component <sup>1</sup></th>
                                                <th class="border border-slate-900 text-center font-semibold p-3">Total Number of System Components <sup>2</sup></th>
                                                <th class="border border-slate-900 text-center font-semibold p-3">Vendor</th>
                                                <th class="border border-slate-900 text-center font-semibold p-3">Product Name and Version</th>
                                                <th class="border border-slate-900 text-center font-semibold p-3">Role/Function Description</th>
                                            </tr>
                                            <tr v-for="(row) in JSON.parse(data?.form)?.tableBody">
                                                <td class="border border-slate-900 p-2" v-for="(td) in row?.names">
                                                    <input type="text" class="form-input"
                                                        :value="inputValues[td] ?? defaultValues.placeholder"
                                                        :name="td" />
                                                </td>
                                            </tr>
                                        </table>
                                    </div>

                                    <!-- 5.1 Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === '13_5_1'">
                                        <table class="table table-bordered border-secondary">
                                            <tr style="background-color: teal; color: white;">
                                                <th class="border border-slate-900 text-center p-2 text-white" rowspan="2">Date of the Scan(s)</th>
                                                <th class="border border-slate-900 text-center p-2 text-white" rowspan="2">Name of ASV that Performed the Scan</th>
                                                <th class="border border-slate-900 text-center p-2 text-white" colspan="2" >
                                                    Were any vulnerabilities found that resulted in a failed initial scan?
                                                </th>
                                                <th class="border border-slate-900 text-center p-2 text-white" rowspan="2">
                                                    For all scans resulting in a Fail, provide date(s) of re-scans showing that the vulnerabilities have been corrected
                                                </th>
                                            </tr>
                                            <tr style="background-color: #e1e1e1;">
                                                <td class="border border-slate-900 text-center p-2">Yes</td>
                                                <td class="border border-slate-900 text-center p-2">No</td>
                                            </tr>
                                            <tr v-for="(row , key) in JSON.parse(data?.form)?.tableBody">
                                               <td class="border border-slate-900 p-2">
                                                    <input type="text" class="form-input"
                                                                :value="inputValues[row?.names[0]] ?? defaultValues.placeholder"
                                                                :name="row?.names[0]" />
                                               </td>

                                               <td class="border border-slate-900 p-2">
                                                    <input type="text" class="form-input"
                                                                :value="inputValues[row?.names[1]] ?? defaultValues.placeholder"
                                                                :name="row?.names[1]" />
                                               </td>

                                               <td class="border border-slate-900 p-2">
                                                    <input type="hidden" :name="row?.names[2]"
                                                            :value="defaultValues.notChecked" />
                                                        <input type="checkbox" :name="row?.names[2]"
                                                            class="form-check-input border border-secondary text-center w-4 h-4"
                                                            :checked="(inputValues[row?.names[2]] && inputValues[row?.names[2]] == '☒')"
                                                            :value="defaultValues.checked" />
                                               </td>



                                               <td class="border border-slate-900 p-2">
                                                    <input type="hidden" :name="row?.names[3]"
                                                            :value="defaultValues.notChecked" />
                                                        <input type="checkbox" :name="row?.names[3]"
                                                            class="form-check-input border border-secondary text-center w-4 h-4"
                                                            :checked="(inputValues[row?.names[3]] && inputValues[row?.names[3]] == '☒')"
                                                            :value="defaultValues.checked" />
                                               </td>



                                               <td class="border border-slate-900 p-2">
                                                    <input type="text" class="form-input"
                                                                :value="inputValues[row?.names[4]] ?? defaultValues.placeholder"
                                                                :name="row?.names[4]" />
                                               </td>

                                            </tr>
                                        </table>

                                        <table class="table table-bordered border-secondary mt-5">
                                            <tr>
                                                <td class="border border-slate-900 p-2" style="width: 50%;">Indicate whether this is the assessed entity’s initial PCI DSS assessment against the ASV scan requirements.</td>
                                                <td class="border border-slate-900 p-2">
                                                    <div class="d-flex gap-2">
                                                        <div class="flex gap-3">
                                                            <input type="hidden"
                                                            :name="'assessedEntityInitialPciDssAssessment_5_1'"
                                                            :value="defaultValues.notChecked" />

                                                            <input type="checkbox"
                                                                :name="'assessedEntityInitialPciDssAssessment_5_1'"
                                                                class="form-check-input border border-secondary text-center w-4 h-4"
                                                                :checked="(inputValues['assessedEntityInitialPciDssAssessment_5_1'] && inputValues['assessedEntityInitialPciDssAssessment_5_1'] == '☒')"
                                                                :value="defaultValues.checked"
                                                                />
                                                            <label for="assessedEntityInitialPciDssAssessment_5_1_yes">Yes</label>
                                                        </div>

                                                        <div class="flex gap-3">
                                                            <input type="hidden" :name="'assessedEntityInitialPciDssAssessment_5_1'"
                                                            :value="defaultValues.notChecked" />

                                                            <input type="checkbox"
                                                                :name="'assessedEntityInitialPciDssAssessment_5_1'"
                                                                class="form-check-input border border-secondary text-center w-4 h-4"
                                                                :checked="(inputValues['assessedEntityInitialPciDssAssessment_5_1'] && inputValues['assessedEntityInitialPciDssAssessment_5_1'] == '☒')"
                                                                :value="defaultValues.checked" />
                                                            <label for="assessedEntityInitialPciDssAssessment_5_1_no">No</label>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="border border-slate-900 p-2">If yes, Identify the name of the document the assessor verified to include the entity’s documented policies and procedures requiring scanning at least once every three months going forward.</td>
                                                <td class="border border-slate-900 p-2">
                                                    <input type="text" class="form-input"
                                                                :value="inputValues['proceduresRequiringScanning_5_1'] ?? defaultValues.placeholder"
                                                                :name="'proceduresRequiringScanning_5_1'" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="border border-slate-900 p-2">Assessor comments, if applicable:</td>
                                                <td class="border border-slate-900 p-2">
                                                    <input type="text" class="form-input"
                                                                :value="inputValues['assessorCommentsApplicable_5_1'] ?? defaultValues.placeholder"
                                                                :name="'assessorCommentsApplicable_5_1'" />
                                                </td>
                                            </tr>
                                        </table>

                                    </div>

                                    <!-- 5.2 Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === '13_5_2'">
                                        <table class="table">
                                            <tr>
                                                <td  class="border border-slate-900 p-2" style="width: 50%;">Indicate whether the ASV and the assessed entity completed the Attestations of Scan Compliance, confirming that all externally accessible (Internet-facing) IP addresses in existence at the entity were appropriately scoped for the ASV scans.</td>
                                                <td class="border border-slate-900 p-2" >
                                                    <div class="d-flex gap-2">
                                                        <div class="flex gap-3">
                                                            <input type="hidden"
                                                            :name="'attestationsScanComplianceConfirming_5_2'"
                                                            :value="defaultValues.notChecked" />

                                                            <input type="checkbox"
                                                                :name="'attestationsScanComplianceConfirming_5_2'"
                                                                class="form-check-input border border-secondary text-center w-4 h-4"
                                                                :checked="(inputValues['attestationsScanComplianceConfirming_5_2'] && inputValues['attestationsScanComplianceConfirming_5_2'] == '☒')"
                                                                :value="defaultValues.checked" />
                                                            <label for="attestationsScanComplianceConfirming_5_2_yes">Yes</label>
                                                        </div>

                                                        <div class="flex gap-3">
                                                            <input type="hidden"
                                                            :name="'attestationsScanComplianceConfirming_5_2'"
                                                            :value="defaultValues.notChecked" />

                                                            <input type="checkbox"
                                                                :name="'attestationsScanComplianceConfirming_5_2'"
                                                                class="form-check-input border border-secondary text-center w-4 h-4"
                                                                :checked="(inputValues['attestationsScanComplianceConfirming_5_2'] && inputValues['attestationsScanComplianceConfirming_5_2'] == '☒')"
                                                                :value="defaultValues.checked" />
                                                            <label for="attestationsScanComplianceConfirming_5_2_no">No</label>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>

                                    </div>

                                    <!-- 5.3 Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === '13_5_3'">
                                        <table class="table table-bordered border-secondary">
                                            <tr style="background-color: teal;color: white;">
                                                <th class="border border-slate-900 p-2" rowspan="2">Date of the Scan(s)</th>
                                                <th class="border border-slate-900 p-2" colspan="2" >
                                                    Was the scan performed via authenticated scanning?
                                                </th>
                                                <th class="border border-slate-900 p-2" colspan="2">
                                                    Were any high-risk or critical vulnerabilities per the entity's vulnerability
                                                    risk rankings at Requirement 6.3.1 found?
                                                </th>
                                                <th class="border border-slate-900 p-2" rowspan="2">
                                                    For all scans where high-risk or critical vulnerabilities were found, provide date(s) of re-scans
                                                    showing that the vulnerabilities have been corrected.
                                                </th>
                                            </tr>
                                            <tr style="background-color: #dfdfdf">
                                                <td class="border border-slate-900 p-2">Yes</td>
                                                <td class="border border-slate-900 p-2">No</td>
                                                <td class="border border-slate-900 p-2">Yes</td>
                                                <td class="border border-slate-900 p-2">No</td>
                                            </tr>
                                            <tr v-for="(row , key) in JSON.parse(data?.form)?.tableBody">
                                                <td class="border border-slate-900 p-2  " v-for="(td,key) in row?.names ">
                                                    <div v-if="key === 1 || key === 2 || key === 3 || key === 4">
                                                        <input type="hidden" :name="td"
                                                            :value="defaultValues.notChecked" />

                                                            <input type="checkbox"
                                                                :name="row?.names[2]"
                                                                class="form-check-input border border-secondary text-center w-4 h-4"
                                                                :checked="(inputValues[td] && inputValues[td] == '☒')"
                                                                :value="defaultValues.checked" />
                                                    </div>
                                                    <div v-else>
                                                        <input type="text"
                                                                class="form-input"
                                                                :value="inputValues[td] ?? defaultValues.placeholder"
                                                                :name="td" />
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>

                                        <table class="table mt-5">
                                            <tr>
                                                <td class= "border border-slate-900 p-2"  style="width: 50%;">Indicate whether the ASV and the assessed entity completed the Attestations of Scan Compliance, confirming that all externally accessible (Internet-facing) IP addresses in existence at the entity were appropriately scoped for the ASV scans.</td>
                                                <td class= "border border-slate-900 p-2" >
                                                    <div class="d-flex gap-2">
                                                        <div class="flex gap-2">
                                                            <input type="hidden" :name="'attestationsScanComplianceConfirming_5_3'"
                                                            :value="defaultValues.notChecked" />

                                                            <input type="checkbox" :name="row?.names[2]"
                                                                class="form-check-input border border-secondary text-center w-4 h-4"
                                                                :checked="(inputValues['attestationsScanComplianceConfirming_5_3'] && inputValues['attestationsScanComplianceConfirming_5_3'] == '☒')"
                                                                :value="defaultValues.checked" />

                                                            <label for="attestationsScanComplianceConfirming_5_3_yes">Yes</label>
                                                        </div>

                                                        <div class="flex gap-2">
                                                            <input type="hidden" :name="'attestationsScanComplianceConfirming_5_3'"
                                                            :value="defaultValues.notChecked" />

                                                            <input type="checkbox" :name="row?.names[2]"
                                                                class="form-check-input border border-secondary text-center w-4 h-4"
                                                                :checked="(inputValues['attestationsScanComplianceConfirming_5_3'] && inputValues['attestationsScanComplianceConfirming_5_3'] == '☒')"
                                                                :value="defaultValues.checked" />
                                                            <label for="attestationsScanComplianceConfirming_5_3_no">No</label>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class= "border border-slate-900 p-2" >If yes, Identify the name of the document the assessor verified to include the entity’s documented policies and procedures requiring scanning at least once every three months going forward.</td>
                                                <td class= "border border-slate-900 p-2" >
                                                    <input type="text" class="form-input"
                                                                :value="inputValues['documentedPoliciesProcedures_5_3'] ?? defaultValues.placeholder"
                                                                :name="'documentedPoliciesProcedures_5_3'" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class= "border border-slate-900 p-2" >Assessor comments, if applicable:</td>
                                                <td class= "border border-slate-900 p-2" >
                                                    <input type="text" class="form-input"
                                                                :value="inputValues['assessorCommentsApplicable_5_3'] ?? defaultValues.placeholder"
                                                                :name="'assessorCommentsApplicable_5_3'" />
                                                </td>
                                            </tr>
                                        </table>
                                    </div>

                                    <!-- 6.3 Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === '14_1_3'">
                                        <table class="table mt-5">
                                            <tr style="background-color: teal;color: white;">
                                                <th class="border border-slate-900 p-3 font-semibold">Tested Sample</th>
                                                <th class="border border-slate-900 p-3 font-semibold">Sample Type Description</th>
                                                <th class="border border-slate-900 p-3 font-semibold">All Items in Sample Set?</th>
                                                <th class="border border-slate-900 p-3 font-semibold">Selection Method</th>
                                                <th class="border border-slate-900 p-3 font-semibold">Total Sampled</th>
                                                <th class="border border-slate-900 p-3 font-semibold">Total Population</th>
                                            </tr>
                                            <tr v-for="(row) in JSON.parse(data?.form)?.tableBody">
                                                <td class="border border-slate-900 p-3" v-for="(td) in row?.names">
                                                    <input type="text" class="form-input"
                                                        :value="inputValues[td] ?? defaultValues.placeholder"
                                                        :name="td" />
                                                </td>
                                            </tr>
                                        </table>
                                    </div>


                                    <!-- 6.4 Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === '14_1_4'">
                                        <table class="table mt-5">
                                            <tr style="background-color: teal;color: white;">
                                                <th class="border border-slate-900 p-3 font-semibold">Reference Number</th>
                                                <th class="border border-slate-900 p-3 font-semibold">Document Name (including version, if applicable)</th>
                                                <th class="border border-slate-900 p-3 font-semibold">Document Purpose</th>
                                                <th class="border border-slate-900 p-3 font-semibold">Document Revision Date (if applicable)</th>
                                            </tr>
                                            <tr v-for="(row) in JSON.parse(data?.form)?.tableBody">
                                                <td class="border border-slate-900 p-3" v-for="(td) in row?.names">
                                                    <input type="text" class="form-input"
                                                        :value="inputValues[td] ?? defaultValues.placeholder"
                                                        :name="td" />
                                                </td>
                                            </tr>
                                        </table>
                                    </div>


                                    <!-- 6.5 Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === '14_1_5'">
                                        <table class="table mt-5">
                                            <tr style="background-color: teal;color: white;">
                                                <th class="border border-slate-900 p-3 font-semibold">Reference Number</th>
                                                <th class="border border-slate-900 p-3 font-semibold">Title of Workpaper with Interview Notes</th>
                                                <th class="border border-slate-900 p-3 font-semibold">Topics Covered</th>
                                                <th class="border border-slate-900 p-3 font-semibold">Role(s) of Interviewee(s)</th>
                                            </tr>
                                            <tr v-for="(row) in JSON.parse(data?.form)?.tableBody">
                                                <td class="border border-slate-900 p-3" v-for="(td) in row?.names">
                                                    <input type="text" class="form-input"
                                                        :value="inputValues[td] ?? defaultValues.placeholder"
                                                        :name="td" />
                                                </td>
                                            </tr>
                                        </table>
                                    </div>


                                    <!-- 6.6 Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === '14_1_6'">
                                        <table class="table mt-5">
                                            <tr style="background-color: teal;color: white;">
                                                <th class="border border-slate-900 p-3 font-semibold">Reference Number</th>
                                                <th class="border border-slate-900 p-3 font-semibold">Title of Workpaper or Evidence</th>
                                                <th class="border border-slate-900 p-3 font-semibold">Topics Covered or Evidence Collected</th>
                                                <th class="border border-slate-900 p-3 font-semibold">Sample Set Reference Number from Table 6.3 (if applicable)</th>
                                            </tr>
                                            <tr v-for="(row) in JSON.parse(data?.form)?.tableBody">
                                                <td class="border border-slate-900 p-3" v-for="(td) in row?.names">
                                                    <input type="text" class="form-input"
                                                        :value="inputValues[td] ?? defaultValues.placeholder"
                                                        :name="td" />
                                                </td>
                                            </tr>
                                        </table>
                                    </div>

                                    <!-- A3 C Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === 'A3_1_3'">
                                        <table class="table mt-5">
                                            <tr style="background-color: teal; color: white;">
                                                <th class="border border-slate-900 p-3 font-semibold">Requirement Number and Definition</th>
                                                <th class="border border-slate-900 p-3 font-semibold">Information Required</th>
                                                <th class="border border-slate-900 p-3 font-semibold">Explanation</th>
                                            </tr>
                                            <tr v-for="(row, rowKey) in JSON.parse(data?.form)?.tableBody" :key="rowKey">
                                                <template v-for="(td, tdKey) in row" :key="tdKey">
                                                    <td v-if="tdKey === 'name'" class="border border-slate-900 p-2">
                                                        <input type="text" class="form-input"
                                                            :value="inputValues[td] ?? defaultValues.placeholder"
                                                            :name="td" />
                                                    </td>
                                                    <td v-else-if="tdKey === 'title-1' && rowKey === 2" class="border border-slate-900 p-2" rowspan="2">
                                                        {{ td }}
                                                    </td>
                                                    <td v-else-if="tdKey !== 'name'" class="border border-slate-900 p-2">
                                                        {{ td }}
                                                    </td>
                                                </template>
                                            </tr>
                                        </table>
                                    </div>


                                    <!-- A3 E Requirement Table -->
                                    <div v-if="JSON.parse(data?.form)?.isAssignmentKey === 'A3_1_5'">
                                        <table class="table mt-5">
                                            <tr style="background-color: teal; color: white;">
                                                <th class="border border-slate-900 p-3 font-semibold" colspan="2">Requirement Number and Definition</th>
                                            </tr>
                                            <tr v-for="(row, rowKey) in JSON.parse(data?.form)?.tableBody" :key="rowKey">
                                                <td class="border border-slate-900 p-3" v-for="(td, tdKey) in row" :key="tdKey">
                                                    <template v-if="tdKey === 'title'">
                                                        {{ td }}
                                                    </template>
                                                    <template v-else-if="tdKey === 'name'">
                                                        <input type="text" class="form-input"
                                                            :value="inputValues[td] ?? defaultValues.placeholder"
                                                            :name="td" />
                                                    </template>
                                                </td>
                                            </tr>
                                        </table>
                                        <table class="table table-bordered border-dark mt-5">
                                            <tr>
                                                <td class="border border-slate-900 p-3" colspan="3">Describe the testing procedures derived and performed by the assessor to validate that the implemented controls meet the Customized Approach Objective; for example, whether the customized control(s) is sufficiently robust to provide at least an equivalent level of protection as provided by the defined approach.
                                                    Note 1: Technical reviews (for example, reviewing configuration settings, operating effectiveness, etc.) should be performed where possible and appropriate.
                                                    Note 2: Add additional rows for each assessor-derived testing procedure, as needed. Ensure that all rows to the right of the “Assessor-derived testing procedure” are copied for each assessor-derived testing procedure that is added.</td>
                                            </tr>
                                            <tr>
                                                <td class="border border-slate-900 p-3" style="width: 23%;" rowspan="3">Enter assessor-derived testing procedure here:</td>
                                                <td class="border border-slate-900 p-3" style="width: 23%;">Identify what was tested (for example, individuals interviewed, system components reviewed, processes observed, etc.)
                                                    Note: all items tested must be uniquely identified.</td>
                                                <td class="border border-slate-900 p-3" style="width: 54%">
                                                    <input type="text" class="form-input"
                                                        :value="inputValues['individualsInterviewedE'] ?? defaultValues.placeholder"
                                                        :name="'individualsInterviewedE'" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="border border-slate-900 p-3">Identify all evidence examined for this testing procedure.</td>
                                                <td class="border border-slate-900 p-3">
                                                    <input type="text" class="form-input"
                                                        :value="inputValues['testingProcedureE'] ?? defaultValues.placeholder"
                                                        :name="'testingProcedureE'" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="border border-slate-900 p-3">Describe the results of the testing performed by the assessor for this testing procedure and how these results verify the implemented controls meet the Customized Approach Objective.</td>
                                                <td class="border border-slate-900 p-3">
                                                    <input type="text" class="form-input"
                                                        :value="inputValues['describeResultsTestingPerformedE'] ?? defaultValues.placeholder"
                                                        :name="'describeResultsTestingPerformedE'" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="border border-slate-900 p-3" colspan="3">Document the testing procedures derived and performed by the assessor to validate the controls are maintained to ensure ongoing effectiveness; for example, how the entity monitors for control effectiveness and how control failures are detected, responded to, and the actions taken.
                                                    Note 1: Technical reviews (for example, reviewing configuration settings, operating effectiveness, etc.) should be performed where possible and appropriate.
                                                    Note 2: Add additional rows for each assessor-derived testing procedure, as needed. Ensure that all rows to the right of the “Assessor-derived testing procedure” are copied for each assessor-derived testing procedure that is added.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="border border-slate-900 p-3" rowspan="3">Enter assessor-derived testing procedure here:</td>
                                                <td class="border border-slate-900 p-3">Identify what was tested (for example, individuals interviewed, system components reviewed, processes observed, etc.)
                                                    Note: all items tested must be uniquely identified.</td>
                                                <td class="border border-slate-900 p-3">
                                                    <input type="text" class="form-input"
                                                        :value="inputValues['individualsInterviewedSystemComponentsReviewedE'] ?? defaultValues.placeholder"
                                                        :name="'individualsInterviewedSystemComponentsReviewedE'" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="border border-slate-900 p-3">Identify all evidence examined for this testing procedure.</td>
                                                <td class="border border-slate-900 p-3">
                                                    <input type="text" class="form-input"
                                                        :value="inputValues['evidenceExaminedTestingProcedureE'] ?? defaultValues.placeholder"
                                                        :name="'evidenceExaminedTestingProcedureE'" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="border border-slate-900 p-3">Describe the results of the testing performed by the assessor for this testing procedure and how these results verify the implemented controls are maintained to ensure ongoing effectiveness.</td>
                                                <td class="border border-slate-900 p-3">
                                                    <input type="text" class="form-input"
                                                        :value="inputValues['implementedControlsMaintainedE'] ?? defaultValues.placeholder"
                                                        :name="'implementedControlsMaintainedE'" />

                                                </td>
                                            </tr>
                                        </table>
                                    </div>


                                </div>
                                <!-- Show Title And Input Filed -->
                                <div v-else>
                                    <table class="border border-slate-900">
                                        <tr class="border border-slate-900"
                                            v-for="(row) in JSON.parse(data?.form)?.tableBody">
                                            <td class="border border-slate-900 w-[45%] p-2" v-if="row?.title"
                                                :colspan="row?.colspan"
                                                :class="row?.bg && `text-white text-lg font-semibold`"
                                                :style="`background-color:${row?.bg}`">
                                                {{ row?.title }}
                                            </td>

                                            <td class="border border-slate-900 w-[55%] p-2" v-if="row?.content"
                                                v-html="row?.content" />

                                            <td class="border border-slate-900 w-[55%] p-2" v-if="row?.name">
                                                <input class="form-input" type="text"
                                                    :value="inputValues[row?.name] ?? defaultValues.placeholder"
                                                    :name="row?.name">
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <!-- Show PciDss -->
                        <div v-else>
                            <div class="p-2 text-white" style="background-color: teal">{{ defaultValues.descriptionTitle
                                }}</div>
                            <div class="font-semibold py-4" v-html="data?.description?.title" />
                            <div>
                                <div class="p-2 text-white" style="background-color: teal">{{ defaultValues.pciDssTitle
                                    }}</div>
                                <div class="py-4 font-semibold" v-html="data?.title" />
                                <div>
                                    <table class="table table-bordered border-secondary text-dark">
                                        <thead>
                                            <tr>
                                                <th class="border border-slate-900" colspan="4"
                                                    style="background-color: teal; color: white ; text-align: center;">
                                                    Assessment Findings (select one)
                                                </th>
                                                <th class="border border-slate-900" colspan="4"
                                                    style="background-color: #b57faf; color: white;text-align: center;">
                                                    Select If Below Method(s) Was Used
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="text-center bg-gray-100 border border-slate-900">In Place
                                                </td>
                                                <td class="text-center bg-gray-100 border border-slate-900">Not
                                                    Applicable</td>
                                                <td class="text-center bg-gray-100 border border-slate-900">Not Tested
                                                </td>
                                                <td class="text-center bg-gray-100 border border-slate-900">Not in Place
                                                </td>
                                                <td class="text-center bg-pink-100 border border-slate-900">Compensating
                                                    Control*</td>
                                                <td class="text-center bg-pink-100 border border-slate-900">Customized
                                                    Approach*</td>
                                            </tr>
                                            <tr>
                                                <td v-for="(name, key) in JSON.parse(data?.form).names" :key="key"
                                                    class="text-center border border-slate-900 p-3">
                                                    <input type="hidden" :name="name"
                                                        :value="defaultValues.notChecked" />
                                                    <input type="checkbox" :name="name"
                                                        class="form-check-input border border-secondary text-center w-4 h-4"
                                                        :checked="(inputValues[name] && inputValues[name] == '☒') ?? key == 1"
                                                        :value="defaultValues.checked" />
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr class="bg-teal text-white">
                                                <td class="border border-slate-900 p-3" colspan="3" style="width: 50%">
                                                    <div class="text-dark" v-html="JSON.parse(data?.form)?.note?.title">
                                                    </div>
                                                </td>
                                                <td class="border border-slate-900 p-3" colspan="3">
                                                    <input type="text" class="form-input"
                                                        :value="inputValues[JSON.parse(data?.form)?.note?.name] ?? defaultValues.placeholder"
                                                        :name="JSON.parse(data?.form)?.note?.name" />
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    <table class="table table-bordered border-dark"
                                        v-if="JSON.parse(data?.form).tableBody">
                                        <thead>
                                            <tr>
                                                <th class="border border-slate-900 text-white border-t-0"
                                                    style="width: 25%; background-color: teal;text-align: center">
                                                    Testing Procedures</th>
                                                <th class="border border-slate-900 text-white border-t-0"
                                                    style="width: 25%; background-color: teal;text-align: center">
                                                    Reporting Instructions</th>
                                                <th class="border border-slate-900 text-white border-t-0"
                                                    style="width: 50%; background-color: teal;text-align: center">
                                                    Reporting Details: Assessor’s Response</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(tr, trIndex) in JSON.parse(data?.form).tableBody"
                                                :key="trIndex">
                                                <td class="border border-slate-900" v-for="(td, tdIndex) in tr.td"
                                                    :key="tdIndex" :rowspan="tr?.rowspan && tdIndex == 0 ? tr?.rowspan : null
                                                        ">
                                                    <input v-if="tdIndex === 'name'" type="text" class="form-input"
                                                        :name="td" :value="inputValues[td] ?? defaultValues.placeholder"
                                                        :placeholder="defaultValues.placeholder" />
                                                    <div v-else v-html="td"></div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-info mt-4" type="submit">Submit Document</button>
                </form>
            </div>
        </div>
    </div>
    <div :class="[
        isOpen ? 'translate-x-0' : 'translate-x-full',
        'fixed top-0 right-0 h-full w-[550px] bg-white shadow-lg z-50 transition-transform ease-in-out duration-300'
    ]">
        <div class="p-4 flex justify-between items-center bg-gray-50">
            <h2 class="text-2xl font-bold">Reference Panel</h2>
            <button @click="isOpen = false" class="btn btn-sm btn-danger">
                ✕
            </button>
        </div>
        <div class="px-4 py-2">
            <TabGroup>
                <TabList class="flex space-x-1 bg-gray-200 rounded-sm">
                    <Tab v-for="(tab, index) in tabs" :key="index" class="w-full py-1.5 font-medium rounded-sm"
                        :class="{ 'btn btn-info shadow-none': selectedTab === tab }" @click="changeTab(tab)">
                        <span class="capitalize font-semibold">{{ tab }}</span>
                    </Tab>
                </TabList>

                <TabPanels>
                    <TabPanel v-for="(tab, key) in tabs">
                        <Evidence :tab="tab" :evidences="evidences" :fetchEvidence="fetchEvidence" />
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    </div>
</template>
