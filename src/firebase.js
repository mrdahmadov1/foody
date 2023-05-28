import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import axios from "axios";
// Add your Firebase configuration values here
const firebaseConfig = {
  apiKey: "AIzaSyCd_rAGc5RPJJel0fvIlzPugWx59l8Pc38",
  authDomain: "foody-d9b5f.firebaseapp.com",
  projectId: "foody-d9b5f",
  storageBucket: "foody-d9b5f.appspot.com",
  messagingSenderId: "389066001907",
  appId: "1:389066001907:web:4d716afe17e79f94de5686",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const axiosInstance = axios.create({
  baseURL: `https://foody-d9b5f-default-rtdb.firebaseio.com`,
});

export const auth = getAuth(app);
export { axiosInstance, db };
