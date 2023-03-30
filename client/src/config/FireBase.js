
import {getApp,getApps,initializeApp} from 'firebase/app'
import {getStorage} from 'firebase/storage' 

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.REACT_APP_FIREBASE_MESSENG_ID,
    appId:process.env.REACT_APP_FIREBASE_APP_ID
  };


  const appcon=getApps.length>0?getApp():initializeApp(firebaseConfig);
  const storage=getStorage(appcon)


  export {appcon,storage}