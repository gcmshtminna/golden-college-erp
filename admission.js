import { db } from "./firebase-config.js";

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const form = document.getElementById("admissionForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "applications"), {
        fullName: document.getElementById("fullName")?.value || "",
        phone: document.getElementById("phone")?.value || "",
        email: document.getElementById("email")?.value || "",
        course: document.getElementById("course")?.value || "",
        dateSubmitted: new Date().toISOString(),
        status: "Pending"
      });

      alert("Application submitted successfully!");

      form.reset();

    } catch (error) {
      console.error(error);
      alert("Error submitting application.");
    }
  });
}