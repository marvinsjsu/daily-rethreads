import { useState, useEffect } from "react";

import FormInput from "../FormInput/form-input.component";
import FormButton from "../FormButton/form-button.component";

import { getRedirectResult } from "firebase/auth";
import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    loginWithEmailAndPassword,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./user-login.styles.scss";

const initialFormData = {
    email: '',
    password: '',
};

const UserLogin = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [formData, setFormData] = useState(initialFormData);
    const { email, password } = formData;

    useEffect(() => {
        async function getAuthResponse() {
            await getRedirectResult(auth);
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

    const onInputChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const onLoginSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            await loginWithEmailAndPassword(email, password);
        } catch(error) {
            if (error.code === "auth/wrong-password"
                || error.code === "auth/user-not-found"
            ) {
                setErrorMessage('Login failed - invalid credentials.');
            }   
        }
    };

    return (
        <div className="user-login-container">
            <h2>I already have an account</h2>
            <span>Login with your email and password</span>
            {errorMessage && (
                <div className="user-login-error">
                    {errorMessage}
                </div>
            )}
            <form onSubmit={onLoginSubmitHandler}>
                <FormInput
                    required
                    type="text"
                    name="email"
                    label="Email"
                    value={email}
                    onChange={onInputChangeHandler}
                />
                <FormInput
                    required
                    type="password"
                    label="Password"
                    name="password"
                    value={password}
                    onChange={onInputChangeHandler}                
                />
                <div className="user-login-cta-container">
                    <FormButton type="submit">
                        Login
                    </FormButton>
                    <FormButton
                        type="button"
                        buttonType="google"
                        // onClick={loginGoogleUserRedirectHandler}
                        onClick={loginGoogleUserHandler}
                    >
                        Login with Google
                    </FormButton>
                </div>
            </form>
        </div>
    );
};

export default UserLogin;
