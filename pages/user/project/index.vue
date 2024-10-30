<script setup>
    import { ref , onMounted } from 'vue';
    const projects = ref([]);

    const getProjects = async ()=>{
        const response = await fetch('http://localhost:8000/api/user-projects')
        const data = await response.json();
        projects.value = data;
        console.log("🚀 ~ getProjects ~ projects:", projects?.value)
    }

onMounted(async()=>{
    await getProjects();
})
</script>
<template>
    <div class="panel">
       <div class="mb-5 flex items-center justify-between">
           <h5 class="text-lg font-semibold dark:text-white-light">Assignments</h5>
           <!-- <button @click="isOpen = true" type="button" class="btn btn-info btn-sm">
               <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ltr:mr-1.5 rtl:ml-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                   <circle cx="12" cy="12" r="3"></circle>
                   <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
               </svg> Create
           </button> -->
       </div>
       <div class="mb-5">
           <div class="table-responsive">
               <table>
                   <thead>
                       <tr>
                           <th>#SL</th>
                           <th>Name</th>
                           <th>Description</th>
                           <th class="text-center">Action</th>
                       </tr>
                   </thead>
                   <tbody>
                        <tr v-for="(project,key) in projects">
                            <td>1</td>
                            <td>{{ project?.name }}</td>
                            <td>{{  project?.description }}</td>
                            <td>
                                <div class="flex gap-3">
                                    <NuxtLink :to="`/user/assignment/${project?.id}`" class="btn btn-info btn-sm"> Modify</NuxtLink>
                                    <button class="btn btn-info btn-sm">Download</button>
                                </div>
                            </td>
                        </tr>
                   </tbody>
               </table>
           </div>
       </div>
   </div>
</template>
