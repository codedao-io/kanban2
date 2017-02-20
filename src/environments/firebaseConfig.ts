
import {AuthMethods, AuthProviders} from "angularfire2";


export const firebaseConfig = {
    // Paste all this from the Firebase console...
    apiKey: "AIzaSyARte6rCXqg_eBWqG-oX_3gGeXLqPlIF00",
    authDomain: "kanban2-d5e2a.firebaseapp.com",
    databaseURL: "https://kanban2-d5e2a.firebaseio.com",
    storageBucket: "kanban2-d5e2a.appspot.com",
    messagingSenderId: "457968597991"
};

export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};
