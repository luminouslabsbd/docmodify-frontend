<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import { toast } from "vue3-toastify";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import Evidence from "~/components/evidence/Evidence.vue";
import { tabs } from "~/utils/helper";

const config = useRuntimeConfig();
const selectedTab = ref(tabs.DOCUMENT);


const defaultValues = ref({
    descriptionTitle: "Requirement Description",
    pciDssTitle: "PCI DSS Requirement",
    placeholder: "Not Applicable",
    inputDefaultValue: "Not Applicable",
    checkboxDefaultValue: "☐",
    checked: '☒',
    notChecked: '☐',
});

useHead({ title: 'Assessment' });
const route = useRoute();
const menus = ref([]);
const error = ref(null);
const pciDss = ref({});
const inputValues = ref({});
const selectedIds = reactive({
    requirement_id: null,
    description_id: null,
    pci_dss_id: null,
    project_id: route.params?.id,
})
const isOpen = ref(false);
const evidences = ref([]);

const submitForm = async () => {
    const formData = new FormData(event.target);
    const pciDss = {};
    formData.forEach((value, key) => {
        pciDss[key] = value;
    });

    try {
        const response = await fetch('http://localhost:8000/api/submit-pci-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                pciDss,
                selectedIds
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to submit form');
        }

        const responseData = await response.json();
        toast.success("Docx data create or update success!")
    } catch (error) {
        console.error("Error submitting form:", error);
    }
};

const fetchMenu = async () => {
    try {
        const response = await fetch('http://localhost:8000/api/get-menus');
        if (!response.ok) throw new Error('Failed to fetch menus');
        menus.value = await response.json();
    } catch (err) {
        error.value = err.message;
    }
}

const changeTab = async (tab) =>{
    selectedTab.value = tab;
    await fetchEvidence();
}

const fetchPciDssForm = async (id) => {
    try {
        const response = await fetch(`http://localhost:8000/api/get-pci-dss-form`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: 3,
                projectId: route?.params?.id,
                pciDssId: id,
            }),
        });
        if (!response.ok) throw new Error('Failed to fetch menus');
        const data = await response.json();

        if (selectedIds) {
            selectedIds.requirement_id = data?.formData?.requirement_id || null;
            selectedIds.description_id = data?.formData?.description_id || null;
            selectedIds.pci_dss_id = data?.formData?.pci_dss_id || null;
            selectedIds.project_id = route.params.id || 1;
        }

        pciDss.value = JSON.parse(data?.formData?.form || '{}');
        inputValues.value = JSON.parse(data?.values?.values || '{}')


        console.log("🚀 ~ fetchPciDssForm ~ pciDss:", pciDss)
    } catch (err) {
        console.log("🚀 ~ fetchPciDssForm ~ err:", err)
        error.value = err.message;
    }
}

const fetchEvidence = async () => {
    const { data, error, status } = await useFetch(`${config.public.apiUrl}/user/evidence/${selectedTab.value}`);
    if (status.value === 'success') {
        evidences.value = data.value?.data;
        isOpen.value = true
    }

    if(status.value === 'error'){
        console.log('Error ',error)
    }
}

onMounted(async () => {
    await fetchMenu();
    await fetchPciDssForm(1);
})

</script>
<template>
    <div class="panel">
        <div class="mb-5 flex items-center justify-between sticky top-[62px] bg-white dark:bg-black-dark-light dark:text-dark-light backdrop:blur-md px-3 py-3 border-b border-gray-100 dark:border-slate-800">
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
                <ul class="max-h-screen h-full overflow-y-scroll  [&::-webkit-scrollbar]:w-2
                            [&::-webkit-scrollbar-track]:rounded-full
                            [&::-webkit-scrollbar-track]:bg-gray-100
                            [&::-webkit-scrollbar-thumb]:rounded-full
                            [&::-webkit-scrollbar-thumb]:bg-info
                            dark:[&::-webkit-scrollbar-track]:bg-info
                            dark:[&::-webkit-scrollbar-thumb]:bg-info">
                    <li v-for="(requirement, key) in menus">
                        <p class="font-bold bg-gray-300 dark:bg-slate-800 px-3 py-2 mb-1 rounded-sm cursor-pointer">{{ requirement?.title }}</p>
                        <li class="ml-3" v-for="(description, key) in requirement?.descriptions ">
                            <p class="px-2 py-1 mb-1 bg-gray-200 dark:bg-slate-800/75 rounded-sm cursor-pointer" v-html="description?.title"></p>
                            <li class="ml-6" v-for="(pciDss, key) in description?.pci_dss">
                                <p class="px-2 py-1 bg-gray-100 dark:bg-slate-700 mb-2 rounded-sm cursor-pointer hover:bg-info hover:text-white active:bg-info active:text-white" @click="fetchPciDssForm(pciDss?.id)" >{{ pciDss?.key }}</p>
                            </li>
                        </li>
                    </li>
                </ul>
            </div>
            <div class="w-9/12 p-4">
                <form @submit.prevent="submitForm">
                    <div class="shadow-sm p-2" v-if="pciDss?.assignment">
                        <h3 class="text-xl font-semibold">{{ pciDss?.title }}</h3>
                        <div class="text-semibold m-2 leading-5" v-if="pciDss?.subTitle" v-html="pciDss?.subTitle"></div>

                        <table v-if="pciDss?.isRequirement" class="" >
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
                                <tr style="border: 1px solid;padding:3px 5px;" v-for="(row, key) in pciDss?.tableBody">
                                    <td style="border: 1px solid;" class="text-dark">{{ row?.title }}</td>
                                    <td style="border: 1px solid;" class="text-dark" v-for="(td, key) in row?.inputs">
                                        <input type="hidden" :name="name" :value="defaultValues.notChecked" />
                                        <input type="checkbox" :name="name"
                                            class="form-check-input border border-secondary"
                                            :value="defaultValues.checked" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table v-else class="border border-gray-100 dark:border-gray-700">
                            <tr class="border-gray-100 dark:border-gray-700 my-2" v-if="pciDss?.tableBody" v-for="(row, key) in pciDss?.tableBody">
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
                        <div v-html="pciDss.title"></div>
                        <div v-if="pciDss.names">
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
                                        <td v-for="(name, key) in pciDss.names" :key="key" class="text-center">
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
                                            <div class="text-dark" v-html="pciDss?.note?.title"></div>
                                        </td>
                                        <td colspan="3">
                                            <input type="text" class="form-control form-control-sm border-secondary"
                                                :value="inputValues[pciDss?.note?.name] ?? defaultValues.placeholder"
                                                :name="pciDss?.note?.name" />
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div v-if="pciDss.tableBody">
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
                                    <tr v-for="(tr, trIndex) in pciDss.tableBody" :key="trIndex">
                                        <td v-for="(td, tdIndex) in tr.td" :key="tdIndex" :rowspan="tr?.rowspan && tdIndex == 0 ? tr?.rowspan : null
                                            ">
                                            <input v-if="tdIndex === 'name'" type="text"
                                                class="form-control form-control-sm border-secondary" :name="td"
                                                :value="inputValues[td] ?? defaultValues.placeholder"
                                                :placeholder="defaultValues.placeholder" />
                                            <div v-else v-html="td"></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary mt-3">Submit</button>
                </form>
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
