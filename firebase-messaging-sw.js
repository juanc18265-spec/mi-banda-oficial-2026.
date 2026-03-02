importScripts("https://www.gstatic.com/firebasejs/9.15.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyCWd--llWyw6cBfH8yD4GQVYPhzicTUMFI",
    authDomain: "app-banda-sinfonica-juvenil.firebaseapp.com",
    projectId: "app-banda-sinfonica-juvenil",
    storageBucket: "app-banda-sinfonica-juvenil.firebasestorage.app",
    messagingSenderId: "336040007045",
    appId: "1:336040007045:web:0dc33c6d5619c79f31e0ec"
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/icon-512.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
