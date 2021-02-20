<template>

    <div>
        <ul >
            <li v-for="(person,id) in employ" :key="id">{{person.emname}}</li>
        </ul>
    </div>



  
</template>

<script>
export default {
    props:['employ']

}
</script>

<style>

</style>