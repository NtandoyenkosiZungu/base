import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzl2zuE7dbbeaEWQ4ZiP9HE5kMJ2T9pZ0",
  authDomain: "mybackenddb-2be30.firebaseapp.com",
  projectId: "mybackenddb-2be30",
  storageBucket: "mybackenddb-2be30.firebasestorage.app",
  messagingSenderId: "874264594331",
  appId: "1:874264594331:web:9f5216e6ed3623ac87433e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth instance
export const auth = getAuth(app);
export default app;