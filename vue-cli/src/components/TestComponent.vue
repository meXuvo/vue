<template>
  <div>{{status}}</div>
</template>

<script>
export default {
    data(){
        return{
            status:'',
        }
    },
    watch:{
        status:{
            handler(newVal){
                console.log('Status update: ' + newVal);
            },
            immediate:true,
        }
    },
    beforeCreate(){
        this.status = 'initializing';
    },
    mounted (){
        this.status = 'online';
    },
    beforeDestory(){
        this.status= 'offline';
    }

}
</script>

<style>

</style>