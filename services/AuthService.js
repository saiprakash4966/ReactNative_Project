import auth from '../firebase';

export const registerUser = (email, password) => {
    return auth().createUserWithEmailAndPassword(email, password);
};

export const loginUser = (email, password) => {
    return auth().signInWithEmailAndPassword(email, password);
};
