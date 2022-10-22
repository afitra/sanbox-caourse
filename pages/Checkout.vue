<template>
    <div>
       <!-- <Navbar/> -->
       <Header/>
       <Banner-shop5/>
 
       <Order @remove-product="removeProduct"  :carts='carts'/>
       
       <NewsPart/>
       <IntroPart/>
       <Footer/>
    </div>
</template>

<script>
 
export default {
 
    async asyncData({ $axios }) {
    const {carts} = await $axios.$get('/user/cart');
       
    return { carts }
  },
 
  data() {
    return {
      // products:{},
    };
  },
  methods:{
    async removeProduct(index){
   
        let id = this.carts[index].product_id
        if(this.carts[index].quantity ==1){
            this.carts.splice(index, 1)
        }else{
            this.carts[index].quantity -=1
        }

        const product = await this.$axios.$post(`/user/cart/min/product/${id}`)
    }
  }
}
</script>