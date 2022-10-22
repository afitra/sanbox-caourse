<template>
      <div>
         <!-- <Navbar/> -->
         <Header/>
         <Banner/>
         <CountDown/>
         <Item :products='products' />
         <!-- <Category/> -->
         <Promo/>
         <!-- <Feature/> -->
         <Item :products='products' />
        
         <!-- <NewItem/> -->
         <!-- <Brand/> -->
         <!-- <Testimonial/> -->
         <!-- <Blog/> -->
         <NewsPart/>
         <IntroPart/>
         <Footer/>
      </div>
</template>

<script>
import Category from "../components/Category.vue";
import Banner from "../components/Banner.vue";
import Feature from "../components/Feature.vue";
import Promo from "../components/Promo.vue";
import Brand from "../components/Brand.vue";
import Testimonial from "../components/Testimonial.vue";
import NewsPart from "../components/NewsPart.vue";
import IntroPart from "../components/IntroPart.vue";
import Footer from "../components/Footer.vue";
import CountDown from "../components/CountDown.vue";
import NewItem from "../components/NewItem.vue";
export default {
    name: "IndexPage",
    components: { Category, Banner, Feature, Promo, Brand, Testimonial, NewsPart, IntroPart, Footer, CountDown, NewItem },
    async asyncData({ $axios }) {
 
      
    const {products} = await $axios.$get('/user/product');
      // this.products= products
  
    return { products }
  },
 
  data() {
    return {
      // products:{},
    };
  },
}
</script>

<style scoped>
        @import '~/assets/css/index.css';
</style>