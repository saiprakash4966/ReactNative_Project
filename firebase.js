import auth from '@react-native-firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBclrrcLiOkZf14Rdg8j0NBLfG-dAwyGkw',
    authDomain: 'taskone',
    projectId: 'fir-1b429',
    storageBucket: 'fir-1b429.appspot.com',
    messagingSenderId: '',
    appId: '1:269501031109:android:b11b51231e8c5c873946ac',
};

if (!auth.apps.length) {
    auth.initializeApp(firebaseConfig);
}

export default auth;
