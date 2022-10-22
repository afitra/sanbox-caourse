 
 
export default async function({redirect, store , route}) {
  const isAuthenticated = await store.$auth.$state.loggedIn ? true : false
  const self = this;
 
  let validate ={
    Checkout:true,
    index:false,
    Login:false,
    Register:false,
    Shop:true,
    Store:true
  }
  let flag = validate[route.name] || false
  if(isAuthenticated ==false && flag){
    return  redirect({name:"Login"})
  }
   
}

 