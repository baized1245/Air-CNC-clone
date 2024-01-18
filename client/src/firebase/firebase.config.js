// import { initializeApp } from 'firebase/app'

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// }

// export const app = initializeApp(firebaseConfig)

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDk-z5igWnBlCZfeFMXX5lLwv-IZkA_V7I',
  authDomain: 'air-cnc-dd9c2.firebaseapp.com',
  projectId: 'air-cnc-dd9c2',
  storageBucket: 'air-cnc-dd9c2.appspot.com',
  messagingSenderId: '210970817541',
  appId: '1:210970817541:web:e3222734f7b7558a91186c',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
