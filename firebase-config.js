import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBXCWKUGGF23pGl33VMmCuL4o2C2DOpbhw",
  authDomain: "golden-college-erp.firebaseapp.com",
  projectId: "golden-college-erp",
  storageBucket: "golden-college-erp.firebasestorage.app",
  messagingSenderId: "786894957860",
  appId: "1:786894957860:web:e397b4d5860dcd7a9297b1",
  measurementId: "G-5H9W6H3WFV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };