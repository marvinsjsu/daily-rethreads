import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import UserRegistration from "../../components/UserRegistration/user-registration.component";

const Login = () => {

    useEffect(() => {
        async function getAuthResponse() {
            const response = await getRedirectResult(auth);

            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
                console.log({ userDocRef });
            }
        }

        getAuthResponse();
    }, []);
    
    const loginGoogleUserHandler = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log({ userDocRef, user });
    };

    const loginGoogleUserRedirectHandler = async () => {
        await signInWithGoogleRedirect();
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <button onClick={loginGoogleUserHandler}>Login with Google Popup</button>
            <button onClick={loginGoogleUserRedirectHandler}>Login with Google Redirect</button>
            <UserRegistration />
        </div>
    );
};

export default Login;
