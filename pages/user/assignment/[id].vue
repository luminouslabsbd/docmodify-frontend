<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import { toast } from "vue3-toastify";

const defaultValues = ref({
    descriptionTitle: "Requirement Description",
    pciDssTitle: "PCI DSS Requirement",
    placeholder: "Not Applicable",
    inputDefaultValue: "Not Applicable",
    checkboxDefaultValue: "☐",
    checked: '☒',
    notChecked: '☐',
});



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

onMounted(async () => {
    await fetchMenu();
    await fetchPciDssForm(1);
})

</script>
<template>
    <div class="panel">
        <div class="mb-5 flex items-center justify-between">
            <h5 class="text-lg font-semibold dark:text-white-light">Reference</h5>
            <button @click="isOpen = true" type="button" class="btn btn-info btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ltr:mr-1.5 rtl:ml-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg> Create
            </button>
        </div>
        <div class="flex justify-between">
            <div class="w-3/12">
                <ul style="height: 100vh;overflow-y: scroll;">
                    <li v-for="(requirement, key) in menus">
                        <a>{{ requirement?.title }}</a>
                    <li v-for="(description, key) in requirement?.descriptions ">
                        <a v-html="description?.title"></a>
                    <li v-for="(pciDss, key) in description?.pci_dss" class="" style="list-style-type: none;">
                        <p @click="fetchPciDssForm(pciDss?.id)" style="cursor: pointer;">{{ pciDss?.key }}</p>
                    </li>
                    </li>
                    </li>
                </ul>
            </div>
            <div class="w-9/12">
                <form @submit.prevent="submitForm" style="height: 100vh; overflow-y: scroll;">
                    <div class="" v-if="pciDss?.assignment">
                        <h3>{{ pciDss?.title }}</h3>
                        <div v-if="pciDss?.subTitle" v-html="pciDss?.subTitle"></div>

                        <table v-if="pciDss?.isRequirement"
                            class="table table-bordered border-secondary text-center text-white"
                            style="border: 1px solid">
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

                        <table v-else class="table table-bordered border border-dark">
                            <tr v-if="pciDss?.tableBody" v-for="(row, key) in pciDss?.tableBody">
                                <!-- .......................First Col.................... -->
                                <td v-if="row?.title" :colspan="row?.colspan" :style="{
                                    backgroundColor: row?.bg || undefined,
                                    color: row?.bg ? 'white' : undefined,
                                    fontWeight: row?.bg ? 'bold' : undefined,
                                    fontSize: row?.bg ? '20px' : undefined,
                                    padding: '3px 5px',
                                    width: row?.isLeft ? '15%' : '40%',
                                    border: '1px solid',
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
                                        <input type="text" style="border:1px solid #ebebeb;"
                                            class="form-control form-control-sm" :name="row?.name"
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
        <h2 class="text-2xl font-semibold">Create Organizer</h2>
        <button
          @click="isOpen = false"
          class="btn btn-sm btn-info"
        >
          ✕
        </button>
      </div>
    </div>
</template>
