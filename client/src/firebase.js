import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDSEmBfHU0m6Nh8muqh-A6rqS30dhs0rPM",
  authDomain: "musicapp-dc120.firebaseapp.com",
  projectId: "musicapp-dc120",
  storageBucket: "musicapp-dc120.appspot.com",
  messagingSenderId: "929767924753",
  appId: "1:929767924753:web:38cbb10f9d0e35ecebbdb0"
};


const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)