// =========================================================
//  firebase-config.js — Module dùng chung cho toàn bộ app
//  Import file này thay vì khai báo Firebase riêng từng trang
// =========================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth }        from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore }   from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getDatabase }    from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getStorage }     from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = { 
  apiKey : "AIzaSyAs1LEj2WXO-6MvS7v2uWg5nPzVsqjbVf0" , 
  authDomain : "crud-3fd86.firebaseapp.com" , 
  databaseURL : "https://crud-3fd86-default-rtdb.firebaseio.com" , 
  projectId : "crud-3fd86" , 
  storageBucket : "crud-3fd86.firebasestorage.app" , 
  messagingSenderId : "663063195093" , 
  appId : "1:663063195093:web:5d892cb09a9d2016c7e15c" , 
  measurementId : "G-579FGCK6TP" 
};

const app = initializeApp(firebaseConfig);

export const auth    = getAuth(app);       // Firebase Authentication
export const db      = getFirestore(app);  // Firestore  (user profiles)
export const rtdb    = getDatabase(app);   // Realtime DB (friends, messages)
export const storage = getStorage(app);    // Storage     (avatars, gallery)
