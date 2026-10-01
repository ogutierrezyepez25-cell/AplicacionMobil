// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importante si usas Firestore en PantallaPerfil.js

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWVFc00-u89hBDYiZ7bBGR2CGbyNqaJ0c",
  authDomain: "practica-13perfil.firebaseapp.com",
  projectId: "practica-13perfil",
  storageBucket: "practica-13perfil.firebasestorage.app",
  messagingSenderId: "277301759235",
  appId: "1:277301759235:web:ca0be6fc1afa2c5af8ad36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializar y exportar Firestore para usarlo en tus pantallas
export const db = getFirestore(app);
export default app;