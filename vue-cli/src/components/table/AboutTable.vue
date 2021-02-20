<template>
<TableLayouts :headings="['name','email','phone','address','actions']">
    <tr v-for="(user,index) in users" :key="index"
        class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
      >
        <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static"
        >
        {{user.name}}
          
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static"
        >
        {{user.email}}
          
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static"
        >
        {{user.phone}}
        
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static"
        >
        {{user.address}}
        
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static"
        >
        {{user.action}}
        
        </td>
      </tr>


</TableLayouts>
  
</template>

<script>
import TableLayouts from './TableLayouts.vue';
export default {
  components: { TableLayouts },
  name: "AboutTable",
  data(){
    return{
      users:[
        {
        id:1,
        name:'suvo',
        phone:'0998',
        address:'banaripara',
        action:'read',
        email:'rafiqulislamsuvobd@gmail.com'
        },
        {
        id:2,
        name:'maria',
        phone:'0998',
        address:'banaripara',
        action:'write',
        email:'toriqulislammoinbd@gmail.com2'
        }
      ]
    }
  }
};
</script>

<style></style>
