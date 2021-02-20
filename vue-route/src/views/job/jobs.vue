<template>
    <div v-for="job in jobs" :key="job.id">
    <router-link :to="{name: 'jobDetails',params:{id:job.id}}">
        <p>{{job.name}}</p>
    </router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            jobs:[
               {
                   id:1,
                   name:'vuejs',
               },
               {
                   id:2,
                   name:'reactjs'
               }
            ]
        }
    }

}
</script>

<style>

</style>