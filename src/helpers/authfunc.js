import firebase from 'firebase'
firebase.initializeApp(config);

// importing config keys to connect our SPA with firebase app.
import  {config} from './firebaseConfig'
import  firebaseui from 'firebaseui'

// app is initialized
var dtb=firebase.database()

export function checkadmin(to, from, next){
    firebase.auth().onAuthStateChanged((user) => {
          if(user.email){
                  let email='161210004@nitdelhi.ac.in'
                  if(user.email===email){
                      return next()
                  }
                  else{
                    return next('/')
                  }
          }
          else{
                  return next('/')
          }

     })
}
export function checkUser(to, from, next){
    isLoggedIn().then(user=>{
        const id=user.email.slice(0,-15)
        const match='@nitdelhi.ac.in'
              if(id===match){
                  return next()
              }
              else{
                  return next('/')  
              }      
    })
}
// this func returns whether user is logged in othewise it redirects user to login page.
export function requireauth(to, from, next){
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        return next()
      }
      else{
        return next('/login')
      }
     })
}

// once a user is authenticated route will fallback to profile page
export function authenticated(to, from, next){
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        return next('/profile')
      }
      else{
        return next()
      }
     })
}

// it checks whether a user is logged in and accordingly returns the user's profile.
export function isLoggedIn(){
     var userinfo={"name":"","email":"","photoUrl":""}

	   return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
          if(user){
              // const id=user.email.slice(0,-15)
              //       dtb.ref('/users/'+id).on('value',(snap)=>{
              //         if(snap.exists()){
                            userinfo.name=user.displayName
                            userinfo.email=user.email
                            userinfo.photoUrl=user.photoURL
                            // userinfo.name=user.uid
                            resolve(userinfo)
                        // this.getList(0,id,'reqs')
                        // this.getList(1,id,'issued')
                  }
          else{
             reject({"name":"","email":"","photoUrl":""}) 
          }
       })
    })
}
// to call logOut
export function logOut(){
	firebase.auth().signOut();
  window.location.reload()
}

// for logging in we need firebaseui module, it takes care of logging in just via passing 
// uiConfig object.
export function logIn(){
    var uiConfig = {
      signInSuccessUrl: '/profile',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ]
    };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
}