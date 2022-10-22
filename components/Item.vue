<template>
        <section class="section recent-part" id="shop">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-heading">
                            <h2>recently sold items</h2>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    <div class="col" v-for="item in products" :key="item.id" >
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">{{item.discountPercentage}}%</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i>
                                </button>
                                <nuxt-link class="product-image" to="product-video.html">
                                    <img :src="item.thumbnail" alt="product">
                                </nuxt-link>
                                <div class="product-widget">
                                    <nuxt-link title="Product Compare" to="#" class="fas fa-random"></nuxt-link>
                                    <nuxt-link title="Product Video" to="#" class="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></nuxt-link>
                                    <nuxt-link title="Product View" to="#" class="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></nuxt-link>
                                </div>
                            </div>
                            <div class="product-content">
                                <div class="product-rating">
                                    <i class="active icofont-star" v-for="star, index in Math.floor(item.rating)" :key="index" ></i>
                                    
                                    <i class="icofont-star" v-if="item.rating!==5"></i>
                                    <nuxt-link to="product-video.html">{{Math.floor(item.rating)}}</nuxt-link>
                                </div>
                                <h6 class="product-name">
                                    <nuxt-link to="product-video.html">{{item.title}}</nuxt-link>
                                </h6>
                                <h6 class="product-price">
                                    <del>{{(item.price+100)}}$</del>
                                    <span>{{Math.floor(item.price+100 - (item.price+100)*item.discount/100) +'$'}}<small>/piece</small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart" @click.prevent=addProductoCart(item.id)>
                                    <i class="fas fa-shopping-basket"></i>
                                    <span>add</span>
                                </button>
                                <div class="product-action">
                                    <button class="action-minus" title="Quantity Minus"><i class="icofont-minus"></i></button>
                                    <input class="action-input" title="Quantity Number" type="text" name="quantity" value="1">
                                    <button class="action-plus" title="Quantity Plus"><i class="icofont-plus"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-btn-25">
                            <nuxt-link to="#" class="btn btn-outline">
                                <i class="fas fa-eye"></i>
                                <span>show more</span>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>


<script>
export default {
    props: {
        products: {
          type: Array,
          required: true
        }
    },
    
    
    methods: {
        async addProductoCart(id){
            const product= await this.$axios.$post(`/user/cart/add/product/${id}`)
            
        }
        
  }

}
</script>