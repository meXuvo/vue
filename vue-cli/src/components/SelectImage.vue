<template>
    <div>
    <div>
        <img :src="img" style="width:200px;height:200px"/>
    </div>
    <div>
        <div v-for="(colorImage,index) in colorImages" :key="colorImage.colorId" @mouseover="updateImage(index)" class="w-5 h-5 block" :style="{backgroundColor:colorImage.color}"></div>
    </div>
    </div>
</template>

<script>
export default {
  data(){
      return {
          selectedImage:0,
          colorImages:[
              {
                colorId:1,
                imgSrc:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
                color:'red'
              },
              {
                colorId:2,
                imgSrc:'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
                color:'blue'
              }
          ]
      }
  },
  methods:{
      updateImage(index){
          this.selectedImage = index;
      }
  },
  computed:{
      img(){
          return this.colorImages[this.selectedImage].imgSrc;
      },
  }
};
</script>

<style></style>