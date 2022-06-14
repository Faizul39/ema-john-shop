import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication  = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/*
 Steps For Authentication 
--------------------------------------------------------
* Step-1: Initial Setup
1. Firebase : create project
2. Create Web App
3. Get Configuration
4. Initialize Firebase
5. Enable Auth Method 
--------------------------------------------------------
* Step-2: Registration 
1. Create Login Component 
2. Create Register Component 
3. Route For Login & Registration.  
--------------------------------------------------------
* Step-3:
1. Set up Sign In Method
2. Set up Sign out Method
3. User State
4. Special Observer
5. Return Necessary methods and states from useFirebase
--------------------------------------------------------
* Step-4:
1. Create Auth Context
2. Create Context Provider 
3. Use Auth Provider
4. Create Use Auth Hook

*/ 
