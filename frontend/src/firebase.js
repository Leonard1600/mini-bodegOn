import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMJjzNHFFgO0w5pxxA5c4DXOvxGSNsWZo",
  authDomain: "mini-bodegon.firebaseapp.com",
  projectId: "mini-bodegon",
  storageBucket: "mini-bodegon.firebasestorage.app",
  messagingSenderId: "1097788991387",
  appId: "1:1097788991387:web:1aa34ee71e02dd7665233e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);