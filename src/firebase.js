import firebase from 'firebase/app'
import 'firebase/auth'

export const auth  = firebase.initializeApp ({
    apiKey: "AIzaSyDaXig8jWUdnW6etZhO0m-bt64JD5Cneqg",
    authDomain: "unichat-459cf.firebaseapp.com",
    projectId: "unichat-459cf",
    storageBucket: "unichat-459cf.appspot.com",
    messagingSenderId: "317687770145",
    appId: "1:317687770145:web:f1380013a6fdad53490760"
  }).auth();