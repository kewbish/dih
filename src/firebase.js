const firebaseConfig = {
    apiKey: process.env.VUE_APP_API,
    authDomain: process.env.VUE_APP_AUTH,
    databaseURL: process.env.VUE_APP_DATABASE,
    projectId: process.env.VUE_APP_ID,
    storageBucket: process.env.VUE_APP_BUCKET,
    messagingSenderId: process.env.VUE_APP_SENDER,
    appId: process.env.VUE_APP_APPID
};

export default firebaseConfig;