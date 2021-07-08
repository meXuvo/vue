<template>
    <Navigation />
    <ShowModal></ShowModal>
    <div class="flex mt-5 space-x-3">
      <Button label="check" class="bg-gray-600 focus:ring-gray-400"></Button>
      <Button label="delete" class="bg-red-600 focus:ring-red-400"></Button>
      <Button label="update" class="bg-green-600 focus:ring-green-400"></Button>
      <Button label="use" class="bg-indigo-600 focus:ring-indigo-400"></Button>
      <Button label="edit" class="bg-blue-600 focus:ring-blue-400"></Button>
    </div>
    <div class="mt-5 mb-5" v-for="(post, id) in posts" :key="id">
      <div class="flex border-2 border-red-500 justify-between items-center pl-10">
        <p>{{ post.post }}</p>
        <LikeCount :like-count="post.like"></LikeCount>
      </div>
    </div>
    <div class="px-5 py-5">
      <AboutTable></AboutTable>
    </div>
  <div class="mt-5">
    <LicenseTable></LicenseTable>
  </div>
  <div>
    <SelectImage></SelectImage>
  </div>
  <div class="mb-10">
    <test-component v-if="displayComponent" />
  </div>
</template>
<script>
import LicenseTable from './components/table/LicenseTable.vue'
import Button from "./components/Button.vue";
import LikeCount from "./components/Like-count.vue";
import Navigation from "./components/navigation/Navigation.vue";
import ShowModal from "./components/ShowModal.vue";
import AboutTable from './components/table/AboutTable.vue';
import SelectImage from './components/SelectImage.vue';
import TestComponent from './components/TestComponent.vue';

  
export default {
  name: "App",
  components: {
    LicenseTable,
    AboutTable,
    LikeCount,
    Button,
    ShowModal,
    Navigation,
    SelectImage,
    TestComponent,
  },
  data() {
    return {
      displayComponent:false,
      posts: [
        {
          id: 1,
          post: "hello maria",
          like: 4,
        },
        {
          id: 2,
          post: "hello suvo",
          like: 5,
        },
        {
          id: 3,
          post: "hello moin",
          like: 2,
        },
      ],
    };
  },
  mounted(){
    this.displayComponent = true;
    window.setTimeout(()=>{
      this.displayComponent = false;
    },5000)
  }
};
</script>

<style></style>
