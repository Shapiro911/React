import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { getDatabase, ref } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyCGtVAhIHp_J3k6hi2k80fXaVmIsq2dEaA",
    authDomain: "react-d8cc0.firebaseapp.com",
    projectId: "react-d8cc0",
    storageBucket: "react-d8cc0.appspot.com",
    messagingSenderId: "580989606022",
    appId: "1:580989606022:web:82d4d11a3a2827e2e09907"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const signUp = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
}

export const signIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
}

export const logOut = async () => await signOut(auth);

export const db = getDatabase(app);
export const userRef = ref(db, 'user');
export const chatsRef = ref(db, 'chats');
export const messagesRef = ref(db, 'chatMessages');
export const getChatRefByID = (id) => ref(db, `chats/${id}`);
export const getChatMsgsListRefByID = (chatID) => ref(db, `chatMessages/${chatID}/chatMessageList`);
export const getChatMsgsRefByID = (chatID) => ref(db, `chatMessages/${chatID}`);