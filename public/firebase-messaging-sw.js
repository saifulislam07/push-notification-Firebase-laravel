// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts("https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js");
/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
*/
firebase.initializeApp({
    apiKey: "AIzaSyAopUCALlae9b1_CvJBJu_pU_idQOQPSPw",
    authDomain: "push-notification-cc303.firebaseapp.com",
    projectId: "push-notification-cc303",
    storageBucket: "push-notification-cc303.appspot.com",
    messagingSenderId: "1047998958672",
    appId: "1:1047998958672:web:18157d00b02e814e45d555",
    measurementId: "G-D1LKGCFX6P",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    console.log("Message received.", payload);
    const title = "Hello world is awesome";
    const options = {
        body: "Your notificaiton message .",
        icon: "/firebase-logo.png",
    };
    return self.registration.showNotification(title, options);
});
