<template>
  <TableLayouts :headings="['name','email']">
    <tr v-for="(license,index) in licenses" :key="index"
        class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
      >
        <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static"
        >
        {{license.add}}
          
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static"
        >
        {{license.new}}
          
        </td>
      </tr>
    
  </TableLayouts>
</template>

<script>
import TableLayouts from './TableLayouts.vue'
export default {
    name: "LicenseTable",
  components: { TableLayouts },
  data(){
      return{
          licenses:[
              {
                  add:'new add',
                  new:'movie',
              },
              {
                  add:'new add',
                  new:'movie',
              }
          ]
      }
  }

}
</script>

<style>

</style>