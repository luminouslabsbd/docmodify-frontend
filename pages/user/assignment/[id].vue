<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import { toast } from "vue3-toastify";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import Evidence from "~/components/evidence/Evidence.vue";
import { tabs } from "~/utils/helper";
import { useTokenStore } from "~/stores/useTokenStore";

useHead({ title: 'Assessment' });
const config = useRuntimeConfig();
const {authUser} = useTokenStore()

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
const error = ref(null);
//const pciDss = ref({});

//const pciDssEs = ref([]);

const inputValues = ref({});
const selectedIds = reactive({
    requirement_id: null,
    description_id: null,
    pci_dss_id: null,
    project_id: route.params?.id,
})
const isOpen = ref(false);
const evidences = ref([]);






//const requirement = ref({});

const { data: menus,refresh:menuRefresh} = useAsyncData(
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


    const requirementId = ref(1)
    const setRequirementId = (id) =>{
        requirementId.value = id;
    }


    const { data , refresh} = await useApiFetch('/user/get-form',{
        method:'POST',
        immediate:true,
        watch:[requirementId],
        body:{
            requirementId,
        }
    }, {
        watch:[requirementId]
    });

    const pciDssForm = JSON.parse(data?.value?.form)
    const pciDss = data?.value
    const descriptionForm = JSON.parse(data?.value?.description?.form)
    const description = data?.value?.description
    const requirement = description?.requirement

    //requirement.value = data.value?.form;


// const fetchPciDssForm = async (requirementId,descriptionId,pciDssId) => {
//     try {
//         const {data, error, pending, status} = await useApiFetch(`/user/get-pci-dss-form`, {
//             method: 'POST',
//             body: JSON.stringify({
//                 userId: authUser?.id,
//                 projectId: route?.params?.id,
//                 requirementId,
//                 descriptionId,
//                 pciDssId,
//             }),
//         });

//         pciDssEs.value = data?.value?.formData;
//         inputValues.value = JSON.parse(data?.value?.values?.values)
//         if (selectedIds) {
//             selectedIds.requirement_id = requirementId;
//             selectedIds.description_id = descriptionId;
//             selectedIds.pci_dss_id = pciDssId;
//             selectedIds.project_id = route.params.id || 1;
//         }

//     } catch (err) {
//         console.log("🚀 ~ fetchPciDssForm ~ err:", err)
//         error.value = err.message;
//     }
// }

const submitForm = async () => {
    const formData = new FormData(event.target);
    const pciDss = {};
    formData.forEach((value, key) => {
        pciDss[key] = value;
    });

    console.log("🚀 ~ submitForm ~ pciDss:", pciDss)
    try {
        const {data} = await useApiFetch('/user/submit-pci-data', {
            method: 'POST',
            body: JSON.stringify({
                pciDss,
                selectedIds
            }),
        });

        console.log("🚀 ~ submitForm ~ data:", data)
        toast.success("Docx data create or update success!")
    } catch (error) {
        console.error("Error submitting form:", error);
    }
};

const changeTab = async (tab) =>{
    selectedTab.value = tab;
    await fetchEvidence();
}

const fetchEvidence = async () => {
    const { data, error, status } = await useApiFetch(`/user/evidence/${selectedTab.value}`,{
        method:'GET'
    });
    if (status.value === 'success') {
        evidences.value = data.value?.data;
        isOpen.value = true
    }

    if(status.value === 'error'){
        console.log('Error ',error)
    }
}

</script>
<template>
    <div class="panel">
        <div class="mb-5 flex items-center justify-between sticky top-[58px] bg-white dark:bg-black-dark-light dark:text-dark-light backdrop:blur-md px-3 py-3 border-b border-gray-100 dark:border-slate-800">
            <h5 class="text-lg font-semibold dark:text-white-light">Assignment - PCI DSS v4.0.1 Report on Compliance</h5>
            <button @click="fetchEvidence()" type="button" class="btn btn-info btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <span class="ml-2">Reference</span>
            </button>
        </div>
        <div class="flex justify-between">
            <div class="w-3/12 p-4">
                <ul class="max-h-screen h-full overflow-y-scroll menu-scroll">
                    <li v-for="(requirement, key) in menus">
                        <p class="font-bold bg-gray-300 dark:bg-slate-800 px-3 py-2 mb-1 rounded-sm cursor-pointer"
                            :class="requirement?.id === data?.requirement_id && 'bg-info text-white'"
                            >{{ requirement?.title }} </p>
                        <li class="ml-3" v-for="(description, key) in requirement?.descriptions ">
                            <p class="px-2 py-1 mb-1 bg-gray-200 dark:bg-slate-800/75 rounded-sm cursor-pointer" :class="description?.id === data?.description_id && 'bg-info text-white'" v-html="description?.title"></p>
                            <li class="ml-6" v-for="(pciDss, key) in description?.pci_dss"
                                @click="setRequirementId(pciDss?.id)"
                            >
                                <p class="px-2 py-1 bg-gray-100 dark:bg-slate-700 mb-2 rounded-sm cursor-pointer hover:bg-info hover:text-white active:text-white" :class="pciDss?.id === data?.id && 'bg-info text-white'" >{{ pciDss?.key }}</p>
                            </li>
                        </li>
                    </li>
                </ul>
            </div>

            <div class="w-9/12 p-4">
                <form @submit.prevent="submitForm">
                    <h2 class="text-2xl font-bold">{{ data?.description?.requirement?.title }}</h2>
                    <div class="">
                        <div v-if="JSON.parse(data?.description?.form)?.assignment">
                            <h3 class="text-xl font-bold">{{ data?.description?.title  }}</h3>
                            <div class="">
                                <h4 class="text-lg font-semibold text-red-600 my-3">{{ data?.title }}</h4>
                                <div v-if="JSON.parse(data?.form)?.subTitle"
                                    v-html="JSON.parse(data?.form)?.subTitle"
                                />

                                <!-- 1.8 Requirement Table -->
                                <div v-if="JSON.parse(data?.form)?.isRequirement">
                                    <table class="table border border-slate-900" >
                                        <thead>
                                            <tr>
                                                <th rowspan="2" class="align-middle" style="background: teal;color: white;">
                                                    PCI DSS Requirement
                                                </th>
                                                <th colspan="4" class="align-middle" style="background: teal;color: white;">
                                                    Assessment Finding
                                                    Select all options that apply.</th>
                                                <th colspan="2" class="align-middle" style="background: #B57FAF;color: white;">
                                                    Select If Below Method(s) Was Used</th>
                                            </tr>
                                            <tr>
                                                <th class="" style="background-color: #CBD4D5;color: black;">In Place</th>
                                                <th class="" style="background-color: #CBD4D5;color: black;">Not Applicable</th>
                                                <th class="" style="background-color: #CBD4D5;color: black;">Not Tested</th>
                                                <th class="" style="background-color: #CBD4D5;color: black;">Not in Place</th>
                                                <th class="" style="background-color: #EBD6E4;color: black;">Compensating Control
                                                </th>
                                                <th class="" style="background-color: #EBD6E4;color: black;">Customized Approach
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style="border: 1px solid;padding:3px 5px;" v-for="(row, key) in JSON.parse(data?.form)?.tableBody">
                                                <td style="border: 1px solid;" class="text-dark">{{ row?.title }}</td>
                                                <td style="border: 1px solid;" class="text-dark" v-for="(td, key) in row?.inputs">
                                                    <input type="hidden" :name="td" :value="defaultValues.notChecked" />
                                                    <input type="checkbox"
                                                        :name="td"
                                                        :checked="(inputValues[td] && inputValues[td] === '☒')"
                                                        class="form-check-input border border-secondary"
                                                        :value="defaultValues.checked" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <!-- Show Title And Input Filed -->
                                <div v-else>
                                    <table class="border border-slate-900">
                                        <tr class="border border-slate-900" v-for="(row) in JSON.parse(data?.form)?.tableBody">
                                            <td
                                                class="border border-slate-900 w-[45%] p-2"
                                                v-if="row?.title"
                                                :colspan="row?.colspan"
                                                :class="row?.bg && `text-white text-lg font-semibold`"
                                                :style="`background-color:${row?.bg}`"
                                            >
                                                {{ row?.title }}
                                            </td>

                                            <td class="border border-slate-900 w-[55%] p-2"
                                                v-if="row?.content"
                                                v-html="row?.content"
                                            />

                                            <td class="border border-slate-900 w-[55%] p-2" v-if="row?.name">
                                                <input
                                                    class="form-input" type="text"
                                                    :value="inputValues[row?.name] ?? defaultValues.placeholder"
                                                    :name="row?.name"
                                                >
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <div class="p-2 text-white" style="background-color: teal">{{ defaultValues.descriptionTitle }}</div>
                            <div class="font-semibold py-4" v-html="data?.description?.title" />
                            <div>
                                <div class="p-2 text-white" style="background-color: teal">{{ defaultValues.pciDssTitle }}</div>
                                <div class="py-4 font-semibold" v-html="data?.title" />
                                <div>
                                    <table class="table table-bordered border-secondary text-dark">
                                        <thead>
                                            <tr>
                                                <th  class="border border-slate-900" colspan="4"
                                                    style="background-color: teal; color: white ; text-align: center;"
                                                >
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
                                                <td class="text-center bg-gray-100 border border-slate-900">In Place</td>
                                                <td class="text-center bg-gray-100 border border-slate-900">Not Applicable</td>
                                                <td class="text-center bg-gray-100 border border-slate-900">Not Tested</td>
                                                <td class="text-center bg-gray-100 border border-slate-900">Not in Place</td>
                                                <td class="text-center bg-pink-100 border border-slate-900">Compensating Control*</td>
                                                <td class="text-center bg-pink-100 border border-slate-900">Customized Approach*</td>
                                            </tr>
                                            <tr>
                                                <td v-for="(name, key) in JSON.parse(data?.form).names" :key="key" class="text-center border border-slate-900 p-3">
                                                    <input type="hidden" :name="name" :value="defaultValues.notChecked" />
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
                                                    <div class="text-dark" v-html="JSON.parse(data?.form)?.note?.title"></div>
                                                </td>
                                                <td class="border border-slate-900 p-3" colspan="3">
                                                    <input type="text" class="form-input"
                                                        :value="inputValues[JSON.parse(data?.form)?.note?.name] ?? defaultValues.placeholder"
                                                        :name="JSON.parse(data?.form)?.note?.name" />
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    <table class="table table-bordered border-dark" v-if="JSON.parse(data?.form).tableBody">
                                        <thead>
                                            <tr>
                                                <th class="border border-slate-900 text-white border-t-0" style="width: 25%; background-color: teal;text-align: center">Testing Procedures</th>
                                                <th class="border border-slate-900 text-white border-t-0" style="width: 25%; background-color: teal;text-align: center">Reporting Instructions</th>
                                                <th class="border border-slate-900 text-white border-t-0" style="width: 50%; background-color: teal;text-align: center">Reporting Details: Assessor’s Response</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(tr, trIndex) in JSON.parse(data?.form).tableBody" :key="trIndex">
                                                <td class="border border-slate-900" v-for="(td, tdIndex) in tr.td" :key="tdIndex" :rowspan="tr?.rowspan && tdIndex == 0 ? tr?.rowspan : null
                                                    ">
                                                    <input v-if="tdIndex === 'name'" type="text"
                                                        class="form-input" :name="td"
                                                        :value="inputValues[td] ?? defaultValues.placeholder"
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
            <div class="w-9/12 p-4" v-show="false">
                {{ selectedIds }}
                <form @submit.prevent="submitForm">
                    <div v-for="(form,key) in pciDssEs">
                        <div class="shadow-sm p-2" v-if="JSON.parse(form?.form)?.assignment">
                            <h3 class="text-xl font-semibold">{{ JSON.parse(form?.form)?.title }}</h3>
                            <div class="text-semibold m-2 leading-5" v-if="JSON.parse(form?.form)?.subTitle" v-html="JSON.parse(form?.form)?.subTitle"></div>

                            <table v-if="JSON.parse(form?.form)?.isRequirement" class="" >
                                <thead>
                                    <tr>
                                        <th rowspan="2" class="align-middle" style="background: teal;color: white;">
                                            PCI DSS Requirement
                                        </th>
                                        <th colspan="4" class="align-middle" style="background: teal;color: white;">
                                            Assessment Finding
                                            Select all options that apply.</th>
                                        <th colspan="2" class="align-middle" style="background: #B57FAF;color: white;">
                                            Select If Below Method(s) Was Used</th>
                                    </tr>
                                    <tr>
                                        <th class="" style="background-color: #CBD4D5;color: black;">In Place</th>
                                        <th class="" style="background-color: #CBD4D5;color: black;">Not Applicable</th>
                                        <th class="" style="background-color: #CBD4D5;color: black;">Not Tested</th>
                                        <th class="" style="background-color: #CBD4D5;color: black;">Not in Place</th>
                                        <th class="" style="background-color: #EBD6E4;color: black;">Compensating Control
                                        </th>
                                        <th class="" style="background-color: #EBD6E4;color: black;">Customized Approach
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="border: 1px solid;padding:3px 5px;" v-for="(row, key) in JSON.parse(form?.form)?.tableBody">
                                        <td style="border: 1px solid;" class="text-dark">{{ row?.title }}</td>
                                        <td style="border: 1px solid;" class="text-dark" v-for="(td, key) in row?.inputs">
                                            <input type="hidden" :name="td" :value="defaultValues.notChecked" />
                                            <input type="checkbox"
                                                :name="td"
                                                :checked="(inputValues[td] && inputValues[td] === '☒')"
                                                class="form-check-input border border-secondary"
                                                :value="defaultValues.checked" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table v-else class="border border-gray-100 dark:border-gray-700">
                                <tr class="border-gray-100 dark:border-gray-700 my-2" v-if="JSON.parse(form?.form)?.tableBody" v-for="(row, key) in JSON.parse(form?.form)?.tableBody">
                                    <!-- .......................First Col.................... -->
                                    <td class="border-gray-100 dark:border-gray-700 px-5 py-3" v-if="row?.title" :colspan="row?.colspan" :style="{
                                        backgroundColor: row?.bg || undefined,
                                        color: row?.bg ? 'white' : undefined,
                                        fontWeight: row?.bg ? 'bold' : undefined,
                                        fontSize: row?.bg ? '20px' : undefined,
                                        width: row?.isLeft ? '15%' : '40%',
                                        textAlign: row?.isLeft && 'center',
                                    }">
                                        <template v-if="row?.isLeft">
                                            <input type="hidden" :name="name" :value="defaultValues.notChecked" />
                                            <input type="checkbox" :name="name"
                                                class="form-check-input border border-secondary"
                                                :checked="(inputValues[name] && inputValues[name] === '☒') || key === 1"
                                                :value="defaultValues.checked" />
                                        </template>

                                        <template v-else>
                                            <div v-html="row?.title" />
                                        </template>
                                    </td>

                                    <!-- .......................Second Col.................... -->
                                    <td v-if="row?.name" :style="{
                                        padding: '3px 5px',
                                        width: row?.isLeft ? '85%' : '60%',
                                    }">
                                        <template v-if="row?.isLeft">
                                            <div v-html="row?.title" />
                                        </template>
                                        <template v-else>
                                            <input type="text"
                                                class="form-input" :name="row?.name"
                                                :value="inputValues[row?.name] ?? defaultValues.placeholder"
                                                :placeholder="defaultValues.placeholder">
                                        </template>
                                    </td>
                                    <td v-if="row?.content">
                                        <div v-html="row?.content"></div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div v-else>
                            <div class="p-2 text-white" style="background-color: teal">
                                {{ defaultValues.pciDssTitle }}
                            </div>
                            <div v-html="JSON.parse(form?.form).title"></div>
                            <div v-if="JSON.parse(form?.form).names">
                                <table class="table table-bordered border-secondary text-dark">
                                    <thead>
                                        <tr>
                                            <th colspan="4" class="text-center"
                                                style="background-color: teal; color: white">
                                                Assessment Findings (select one)
                                            </th>
                                            <th colspan="4" class="text-center"
                                                style="background-color: #b57faf; color: white">
                                                Select If Below Method(s) Was Used
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-center">In Place</td>
                                            <td class="text-center">Not Applicable</td>
                                            <td class="text-center">Not Tested</td>
                                            <td class="text-center">Not in Place</td>
                                            <td class="text-center">Compensating Control*</td>
                                            <td class="text-center">Customized Approach*</td>
                                        </tr>
                                        <tr>
                                            <td v-for="(name, key) in JSON.parse(form?.form).names" :key="key" class="text-center">
                                                <input type="hidden" :name="name" :value="defaultValues.notChecked" />
                                                <input type="checkbox" :name="name"
                                                    class="form-check-input border border-secondary"
                                                    :checked="(inputValues[name] && inputValues[name] == '☒') ?? key == 1"
                                                    :value="defaultValues.checked" />
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr class="bg-teal text-white">
                                            <td colspan="3" style="width: 50%">
                                                <div class="text-dark" v-html="JSON.parse(form?.form)?.note?.title"></div>
                                            </td>
                                            <td colspan="3">
                                                <input type="text" class="form-control form-control-sm border-secondary"
                                                    :value="inputValues[JSON.parse(form?.form)?.note?.name] ?? defaultValues.placeholder"
                                                    :name="JSON.parse(form?.form)?.note?.name" />
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div v-if="JSON.parse(form?.form).tableBody">
                                <table class="table table-bordered border-dark">
                                    <thead>
                                        <tr style="background-color: teal; color: white">
                                            <th style="width: 25%">Testing Procedures</th>
                                            <th style="width: 25%">Reporting Instructions</th>
                                            <th style="width: 50%">
                                                Reporting Details: Assessor’s Response
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(tr, trIndex) in JSON.parse(form?.form).tableBody" :key="trIndex">
                                            <td v-for="(td, tdIndex) in tr.td" :key="tdIndex" :rowspan="tr?.rowspan && tdIndex == 0 ? tr?.rowspan : null
                                                ">
                                                <input v-if="tdIndex === 'name'" type="text"
                                                    class="form-input" :name="td"
                                                    :value="inputValues[td] ?? defaultValues.placeholder"
                                                    :placeholder="defaultValues.placeholder" />
                                                <div v-else v-html="td"></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary mt-3">Submit</button>
                </form>
                <!--<div v-for="(requirement, key) in defaultRequirements">
                    <h2 class="text-2xl font-bold">{{ requirement?.title }}</h2>
                    <div class="">
                        <div class="" style="background-color: teal; padding: 2px">
                        {{ defaultValues.descriptionTitle }}
                        </div>
                        <div class="" v-for="(description, key) in requirement.descriptions">
                            <h4 v-html="description.title"></h4>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
    <div
      :class="[
        isOpen ? 'translate-x-0' : 'translate-x-full',
        'fixed top-0 right-0 h-full w-[550px] bg-white shadow-lg z-50 transition-transform ease-in-out duration-300'
      ]"
    >
      <div class="p-4 flex justify-between items-center bg-gray-50">
        <h2 class="text-2xl font-bold">Reference Panel</h2>
        <button
          @click="isOpen = false"
          class="btn btn-sm btn-danger"
        >
          ✕
        </button>
      </div>
      <div class="px-4 py-2">
        <TabGroup>
            <TabList class="flex space-x-1 bg-gray-200 rounded-sm">
                <Tab
                    v-for="(tab, index) in tabs"
                    :key="index"
                    class="w-full py-1.5 font-medium rounded-sm"
                    :class="{ 'btn btn-info shadow-none': selectedTab === tab }"
                    @click="changeTab(tab)"
                >
                    <span class="capitalize font-semibold" >{{ tab }}</span>
                </Tab>
            </TabList>

            <TabPanels>
                <TabPanel v-for="(tab,key) in tabs">
                    <Evidence :tab="tab" :evidences="evidences" :fetchEvidence="fetchEvidence" />
                </TabPanel>
            </TabPanels>
        </TabGroup>
      </div>
    </div>
</template>


