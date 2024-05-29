import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.config";


 export const Authcontext = createContext(null)

 const  googleprovider= new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const[user,setUsers] =useState(null);
    
    const[loading ,setLoading]=useState(true)


const createuser=(email,password)=>{
  setLoading(true)
return createUserWithEmailAndPassword(auth,email,password)
}
  
const loginuser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

// google auth provider popup showing email third party auth access
const gooogleauth = ()=>{
    setLoading(true)
    return signInWithPopup(auth,googleprovider)
}


const logOut=()=>{
    setLoading(true)
    return signOut(auth)
}



useEffect(()=>{

 const unsubscribe=   onAuthStateChanged(auth,currentUser=>{
        console.log('user in the auth state change ',currentUser);
        setUsers(currentUser);
        setLoading(false);
    });
    return()=>{
        unsubscribe();
        
    }


},[])



    const authInfo={
        user,
        createuser,
        loginuser,
        logOut,
        loading,
        gooogleauth

    }
    
    return (
     <Authcontext.Provider value={authInfo}>
         {children}
     </Authcontext.Provider>
    );
};

export default AuthProvider;

