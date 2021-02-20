<template>
  <!-- component -->
  <table class="border-collapse w-full">
    <thead>
       <tr>
        <th v-for="(heading,index) in headings" :key="index"
          class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
        >
        {{heading}}
        </th>
      </tr>
    </thead>
    <tbody>
      <slot></slot>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "TableLayouts",
  props:{
    headings:{
      type:Array,
      required:true
    }
  }
  
};
</script>

<style></style>
