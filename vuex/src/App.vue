<template>
    <div id="app">
        <compBookListOne ></compBookListOne>
        <compBookListTwo></compBookListTwo>
        <Hello :employ="employs"></Hello>
        <OfficeRules :rule="rules"></OfficeRules>
        <div>
            <button @click="decrement()">decrement</button>
        </div>
    </div>
</template>

<script>
import compBookListOne from "./components/BookListOne"
import compBookListTwo from "./components/BookListTwo"
import Hello from "./components/Hello"
import OfficeRules from './components/OfficeRules'

export default {
    data(){
        return{
            employs:[
                { emname:"suvo"},
                { emname:"moin"},
                { emname:"maria"},
            ],
            rules :[
                {oneRule:'namej porte hobe'},
                {twoRule:'kaj korte hobe'}
            ]
        }
    },
    components:{
      compBookListOne,
      compBookListTwo,
      Hello,
      OfficeRules
      
    },
    methods:{
        decrement(){
            this.$store.dispatch('dicrementPrice');
        }
    },
}
</script>
