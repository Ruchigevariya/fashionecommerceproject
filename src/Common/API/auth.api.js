import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase";

export const signupApi = (data) => {
    console.log("signupApi", data);
    // firebase integration

    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);

                onAuthStateChanged(auth, (user) => {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            resolve({ payload: "please check your email" });
                        })
                        .catch((e) => {
                            reject({ payload: e });
                        })

                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(error);

                if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
                    reject({ payload: "email already registered" });
                } else {
                    reject({ payload: errorCode });
                }
            });
    })

}

export const signInApi = (data) => {
    console.log("signInApi", data);

    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);

                if(user.emailVerified){
                    resolve({payload: user});
                }else{
                    reject({payload:"first verify email" });
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode.localeCompare("auth/user-not-found") === 0) {
                    reject({ payload: "email or password is wrong" });
                } else if(errorCode.localeCompare("auth/wrong-password") === 0){
                    reject({ payload: "password is wrong" });
                } else {
                    reject({ payload: errorCode });
                }
            });
    })
}

export const signOutApi = () => {
    console.log("signOutApi");

    return new Promise((resolve, reject) => {
        signOut(auth) 
        .then(() => {
            resolve({ payload: "LogOut successfull"})
        })
        .catch ((error) => {
            reject({ payload: "Something went wrong"})
        })
    })
}