<template>
       <header class="header-part">
            <div class="container">
                <div class="header-content">
                    <div class="header-media-group">
                        <ul class="navbar-list header-widget">
                            <li class="navbar-item "  >
                                <nuxt-link class="btn btn-success btn-sm " to="/" >Home</nuxt-link>
                            </li>
                            <li class="navbar-item "  >
                                <a class="btn btn-success btn-sm " v-if="this.validate.shop" href="/#shop" >Shop</a>
                            </li>

                            <li class="navbar-item " v-if="this.validate.checkout">
                                <nuxt-link class="btn btn-success btn-sm " to="/checkout" >Cart</nuxt-link>
                            </li>
                            <li class="navbar-item " v-if="this.validate.login">
                                <nuxt-link class="btn btn-success btn-sm " to="/login" >Login</nuxt-link>
                            </li>
                            <li class="navbar-item" v-if="this.validate.register">
                                <nuxt-link class="btn btn-success btn-sm " to="/register" >Register</nuxt-link>

                            </li>
                            <li class="navbar-item" v-if="this.validate.logout">
                                <button class="btn btn-success btn-sm "  @click.prevent="actionLogout()">Logout</button>

                            </li>
                        </ul>
                           
                        <!-- <button class="btn btn-success btn-sm  ">Login</button>
                        <button class="btn btn-success btn-sm  ">Register</button> -->
                         
                    </div>
                    <!-- gambar logo -->
                    <!-- <div class="header-widget-group">
                        <nuxt-link to="/" class="header-logo">
                            <img src="images/logo.png" alt="logo">
                        </nuxt-link>
                    </div> -->

                   

                    <!-- <form class="header-form">
                        <input type="text" placeholder="Search anything...">
                        <button><i class="fas fa-search"></i></button>
                    </form> -->

                    <div class="header-widget-group">
                        <!-- <a href="compare.html" class="header-widget" title="Compare List">
                            <i class="fas fa-random"></i>
                            <sup>0</sup>
                        </a>
                        <a href="wishlist.html" class="header-widget" title="Wishlist">
                            <i class="fas fa-heart"></i>
                            <sup>0</sup>
                        </a> -->
                         

                        <!-- <a href="login.html" class="header-widget" title="My Account">
                            <img src="images/user.png" alt="user">
                            <span>join</span>
                        </a> -->
                        <ul class="navbar-list header-widget">
                            <li class="navbar-item "  >
                                <nuxt-link class="btn btn-success btn-sm " to="/" >Home</nuxt-link>
                            </li>
                            <li class="navbar-item "  >
                                <a class="btn btn-success btn-sm " v-if="this.validate.shop" href="#shop" >Shop</a>
                            </li>
                            <li class="navbar-item " v-if="this.validate.checkout">
                                <nuxt-link class="btn btn-success btn-sm " to="/checkout" >Cart</nuxt-link>
                            </li>
                            <li class="navbar-item " v-if="this.validate.login">
                                <nuxt-link class="btn btn-success btn-sm " to="/login" >Login</nuxt-link>
                            </li>
                            <li class="navbar-item" v-if="this.validate.register">
                                <nuxt-link class="btn btn-success btn-sm " to="/register" >Register</nuxt-link>

                            </li>
                            <li class="navbar-item" v-if="this.validate.logout">
                                <button class="btn btn-success btn-sm "  @click.prevent="actionLogout()">Logout</button>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
</template>

<script>
export default{
     data(){
        return{
            validate:{
                login:true,
                logout:false,
                checkout:false,
                user:false,
                register:true,
                shop:false
            }
        }
     },
    methods:{
        async actionLogout(){
            const self = this;
            try {
                await self.$auth.logout();
                self.$router.push("/login");
            } catch (err) {
                // self.$NOTIF("error", "gagal logout");
            }
        }
    },
    mounted(){

      
        if(this.$auth.loggedIn){
            this.validate.login = false
            this.validate.logout= true
            this.validate.checkout= true
            this.validate.user=true
            this.validate.register=false
        
        }else{
   
            this.validate.login = true
            this.validate.logout= false
            this.validate.checkout= false
            this.validate.user=false
            this.validate.register=true
        }  
   
        this.validate[this.$route.name.toLowerCase()] = false
        if(this.$route.name=='index'){
            this.validate.shop=true
        }

        // if(this.$route.name=='Register'){
        //     this.validate.register= false
        // }
        // if(this.$route.name=='Login'){
        //     this.validate.login= false
        // }
        // if(this.$route.name=='Login'){
        //     this.validate.login= false
        // }
        
    }

}
</script>