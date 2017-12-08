import firebase from 'firebase'
import  {config} from './firebaseConfig'
import  firebaseui from 'firebaseui'

firebase.initializeApp(config);

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


export function isLoggedIn(){
     var userinfo={"name":"","email":"","photoUrl":""}

	   return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
          if(user){
              
              userinfo.name=user.displayName
              userinfo.email=user.email
              userinfo.photoUrl=user.photoURL
              // userinfo.name=user.uid
          		resolve(userinfo)
          }
          else{
             reject({"name":"","email":"","photoUrl":""}) 
          }
       })
    })
    
}
export function logOut(){
	firebase.auth().signOut();
  window.location.reload()
}

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