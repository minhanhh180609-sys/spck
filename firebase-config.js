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
  apiKey: "AIzaSyBVbNvpjsSjSyGTn5Kvk5iaAi0S2KvF5Ks",
  authDomain: "jsi04-c3a8c.firebaseapp.com",
  databaseURL: "https://jsi04-c3a8c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jsi04-c3a8c",
  storageBucket: "jsi04-c3a8c.firebasestorage.app",
  messagingSenderId: "241743024495",
  appId: "1:241743024495:web:31c9c9cf6cc87fb757d89a",
  measurementId: "G-67CWVS1Y02"
};

const app = initializeApp(firebaseConfig);

export const auth    = getAuth(app);       // Firebase Authentication
export const db      = getFirestore(app);  // Firestore  (user profiles)
export const rtdb    = getDatabase(app);   // Realtime DB (friends, messages)
export const storage = getStorage(app);    // Storage     (avatars, gallery)
