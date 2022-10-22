<template>
       <section class="inner-section checkout-part">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="alert-info">
                            <p>Returning customer? <a href="#">Click here to login</a></p>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="account-card">
                            <div class="account-title">
                                <h4>Your order</h4>
                            </div>
                            <div class="account-content">
                                <div class="table-scroll">
                                    <table class="table-list">
                                        <thead>
                                            <tr>
                                                <th scope="col">Serial</th>
                                                <th scope="col">Product</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">brand</th>
                                                <th scope="col">quantity</th>
                                                <th scope="col">action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for ="item, index in carts" :key="item.id">
                                      
                                                <td class="table-serial"><h6>{{item.id}}</h6></td>
                                                <td class="table-image"><img :src="item.product.thumbnail" alt="product"></td>
                                                <td class="table-name"><h6>product name</h6></td>
                                                <td class="table-price"><h6>${{item.product.price}}<small>/kilo</small></h6></td>
                                                <td class="table-brand"><h6>{{item.product.id}}</h6></td>
                                                <td class="table-quantity"><h6>{{item.quantity}}</h6></td>
                                                <td class="table-action">
                                                    <a class="view" href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#product-view"><i class="fas fa-eye"></i></a>
                                                    <a class="trash" href="#" title="Remove Wishlist" v-on:click.prevent="$emit('remove-product', index)"  ><i class="icofont-trash"></i></a>
                                                </td>
                                            </tr>
                                           
                                        </tbody>
                                    </table>
                                </div>
                                <!-- <div class="chekout-coupon">
                                    <button class="coupon-btn">Do you have a coupon code?</button>
                                    <form class="coupon-form">
                                        <input type="text" placeholder="Enter your coupon code">
                                        <button type="submit"><span>apply</span></button>
                                    </form>
                                </div> -->
                                <div class="checkout-charge pt-4">
                                    <ul>
                                        
                                        <li>
                                            <!-- <span>Total </span>  -->
                                            <span style="font-size:30px">Total   {{getPrice}}$</span>
                                            
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- table end -->
                    <div class="col-lg-12">
                        <div class="account-card">
                            <div class="account-title">
                                <h4>Delivery Schedule</h4>
                            </div>
                            <div class="account-content">
                                <div class="row">
                                    <div class="col-md-6 col-lg-4 alert fade show">
                                        <div class="profile-card schedule active">
                                            <h6>express</h6>
                                            <p>90 min express delivery</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4 alert fade show">
                                        <div class="profile-card schedule">
                                            <h6>8am-10pm</h6>
                                            <p>8.00 AM - 10.00 PM</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4 alert fade show">
                                        <div class="profile-card schedule">
                                            <h6>Next day</h6>
                                            <p>Next day or Tomorrow</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="account-card">
                            <!-- <div class="account-title">
                                <h4>contact number</h4>
                                <button data-bs-toggle="modal" data-bs-target="#contact-add">add contact</button>
                            </div> -->
                            <div class="account-content">
                                <div class="row">
                                    <div class="col-md-6 col-lg-4 alert fade show">
                                        <div class="profile-card contact active">
                                            <h6>primary</h6>
                                            <p>+8801838288389</p>
                                            <ul>
                                                <li><button class="edit icofont-edit" title="Edit This" data-bs-toggle="modal" data-bs-target="#contact-edit"></button></li>
                                                <li><button class="trash icofont-ui-delete" title="Remove This" data-bs-dismiss="alert"></button></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4 alert fade show">
                                        <div class="profile-card contact">
                                            <h6>secondary</h6>
                                            <p>+8801941101915</p>
                                            <ul>
                                                <li><button class="edit icofont-edit" title="Edit This" data-bs-toggle="modal" data-bs-target="#contact-edit"></button></li>
                                                <li><button class="trash icofont-ui-delete" title="Remove This" data-bs-dismiss="alert"></button></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4 alert fade show">
                                        <div class="profile-card contact">
                                            <h6>secondary</h6>
                                            <p>+8801747875727</p>
                                            <ul>
                                                <li><button class="edit icofont-edit" title="Edit This" data-bs-toggle="modal" data-bs-target="#contact-edit"></button></li>
                                                <li><button class="trash icofont-ui-delete" title="Remove This" data-bs-dismiss="alert"></button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="account-card">
                            <!-- <div class="account-title">
                                <h4>delivery address</h4>
                                <button data-bs-toggle="modal" data-bs-target="#address-add">add address</button>
                            </div> -->
                            <div class="account-content">
                                <div class="row">
                                    <div class="col-md-6 col-lg-4 alert fade show">
                                        <div class="profile-card address active">
                                            <h6>Home</h6>
                                            <p>jalkuri, fatullah, narayanganj-1420. word no-09, road no-17/A</p>
                                            <ul class="user-action">
                                                <li><button class="edit icofont-edit" title="Edit This" data-bs-toggle="modal" data-bs-target="#address-edit"></button></li>
                                                <li><button class="trash icofont-ui-delete" title="Remove This" data-bs-dismiss="alert"></button></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4 alert fade show">
                                        <div class="profile-card address">
                                            <h6>Office</h6>
                                            <p>east tejturi bazar, dhaka-1200. word no-04, road no-13/c, house no-4/b</p>
                                            <ul class="user-action">
                                                <li><button class="edit icofont-edit" title="Edit This" data-bs-toggle="modal" data-bs-target="#address-edit"></button></li>
                                                <li><button class="trash icofont-ui-delete" title="Remove This" data-bs-dismiss="alert"></button></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4 alert fade show">
                                        <div class="profile-card address">
                                            <h6>Bussiness</h6>
                                            <p>kawran bazar, dhaka-1100. word no-02, road no-13/d, house no-7/m</p>
                                            <ul class="user-action">
                                                <li><button class="edit icofont-edit" title="Edit This" data-bs-toggle="modal" data-bs-target="#address-edit"></button></li>
                                                <li><button class="trash icofont-ui-delete" title="Remove This" data-bs-dismiss="alert"></button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="account-card mb-0">
                            <!-- <div class="account-title">
                                <h4>payment option</h4>
                                <button data-bs-toggle="modal" data-bs-target="#payment-add">add card</button>
                            </div> -->
                            <!-- <div class="account-content">
                                <div class="row">
                                    <div class="col-md-6 col-lg-4 alert fade show">
                                        <div class="payment-card payment active">
                                            <img src="images/payment/png/01.png" alt="payment">
                                            <h4>card number</h4>
                                            <p>
                                                <span>****</span>
                                                <span>****</span>
                                                <span>****</span>
                                                <sup>1876</sup>
                                            </p>
                                            <h5>miron mahmud</h5>
                                            <button class="trash icofont-ui-delete" title="Remove This" data-bs-dismiss="alert"></button>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4 alert fade show">
                                        <div class="payment-card payment">
                                            <img src="images/payment/png/02.png" alt="payment">
                                            <h4>card number</h4>
                                            <p>
                                                <span>****</span>
                                                <span>****</span>
                                                <span>****</span>
                                                <sup>1876</sup>
                                            </p>
                                            <h5>miron mahmud</h5>
                                            <button class="trash icofont-ui-delete" title="Remove This" data-bs-dismiss="alert"></button>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4 alert fade show">
                                        <div class="payment-card payment">
                                            <img src="images/payment/png/03.png" alt="payment">
                                            <h4>card number</h4>
                                            <p>
                                                <span>****</span>
                                                <span>****</span>
                                                <span>****</span>
                                                <sup>1876</sup>
                                            </p>
                                            <h5>miron mahmud</h5>
                                            <button class="trash icofont-ui-delete" title="Remove This" data-bs-dismiss="alert"></button>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                            <!-- <div class="checkout-check">
                                <input type="checkbox" id="checkout-check">
                                <label for="checkout-check">By making this purchase you agree to our <a href="#">Terms and Conditions</a>.</label>
                            </div> -->
                            <div class="checkout-proced" v-if="carts.length>0">
                                <button @click.prevent="getUrlPayment()" class="btn btn-inline">proced to checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
export default{
    props: {
        carts: {
          type: Array,
          required: true
        }
    },
    data(){
        return{
           
        }
    },
    methods:{
        async getUrlPayment(){
      
            let url= await this.$axios.$post(`/user/cart/`)
            window.open(url.data.payment_url)
            return true
        }
    },
    computed:{
          getPrice:function(){
            let total=0
            for (let i = 0; i < this.carts.length; i++) {
                const el = this.carts[i].product.price
                total+= el
                
            }
        return total
        }
    }
}
</script>