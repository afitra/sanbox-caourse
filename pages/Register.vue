<template>
     <section class="user-form-part">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-10">
                        <Header/>
                        <div class="user-form-card">
                            <div class="user-form-title">
                                <h2>Join Now!</h2>
                                <p>Setup A New Account In A Minute</p>
                            </div>
                            <div class="user-form-group">
                                <ul class="user-form-social">
                                    <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i>Join with facebook</a></li>
                                    <li><a href="#" class="twitter"><i class="fab fa-twitter"></i>Join with twitter</a></li>
                                    <li><a href="#" class="google"><i class="fab fa-google"></i>Join with google</a></li>
                                    <li><a href="#" class="instagram"><i class="fab fa-instagram"></i>Join with instagram</a></li>
                                </ul>
                                <div class="user-form-divider">
                                    <p>or</p>
                                </div>
                                <form class="user-form">
                                    <div class="form-group">
                                        <input type="text"  v-model="form.username" class="form-control" placeholder="Enter your name">
                                    </div>
                                    <div class="form-group">
                                        <input type="email" v-model="form.email" class="form-control" placeholder="Enter your email">
                                    </div>
                                    <div class="form-group">
                                        <input type="password" v-model="form.password" class="form-control" placeholder="Enter your password">
                                    </div>
                                    <div class="form-group">
                                        <input type="password" v-model="form.password2" class="form-control" placeholder="Enter repeat password">
                                    </div>
                                  
                                    <div class="form-button" >
                                        <button @click.prevent="actionRegister()">register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="user-form-remind">
                            <p>Already Have An Account?<a href="login.html">login here</a></p>
                        </div>
                        <div class="user-form-footer">
                            <p>Greeny | &COPY; Copyright by <a href="#">Mironcoder</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>

export default{
  data(){
    return{
        form:{
            username:"bubububu",
            email:"bubu@mail.co",
            password:"1",
            password2:"1"
        }
    }
  },
  methods:{
    async actionRegister(){
        // console.log("Register >>>>");
        if(this.form.password !== this.form.password2){
            console.log("error");
            return "error"
        }
        let user= await this.$axios.$post(`/user/register`,{
            username:this.form.username,
            email:this.form.email,
            password:this.form.password,
        })

        console.log("sukses", user);
        this.$router.push({name:'Login'});

    }
  }
    
}
</script>


<style scoped>
        @import '~/assets/css/user-auth.css';
</style>