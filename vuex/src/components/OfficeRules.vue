<template>
  <div>
    <ul>
        <li v-for="(rule,id) in rules" :key="id">{{ rule.allrules}}</li>
    </ul>
  </div>
</template>

<script>
export default {
    props:[
        'rules'
    ]

}
</script>

<style>

</style>