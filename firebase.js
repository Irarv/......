import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTHDOMAIN",
  databaseURL: "TU_DATABASE_URL",
  projectId: "TU_PROJECT_ID",
};


const app = initializeApp(firebaseConfig);

const db = getDatabase(app);


window.db = db;
window.ref = ref;
window.push = push;
window.set = set;
