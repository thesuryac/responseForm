import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDCEd-brZOkfYFbz7VAQhErcttYQnMqzco",
  authDomain: "response-ee9a0.firebaseapp.com",
  projectId: "response-ee9a0",
  storageBucket: "response-ee9a0.appspot.com",
  messagingSenderId: "42320540276",
  appId: "1:42320540276:web:2e097cbde8ff0da2425721",
  measurementId: "G-VV9K1TZ6KP",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const imageDb = getStorage(app);
