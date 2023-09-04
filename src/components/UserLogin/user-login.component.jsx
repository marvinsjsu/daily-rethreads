import { useState, useEffect } from "react";

import FormInput from "../FormInput/form-input.component";
import FormButton from "../FormButton/form-button.component";

import { getRedirectResult } from "firebase/auth";
import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./user-login.styles.scss";

const initialFormData = {
    email: '',
    password: '',
};

const UserLogin = () => {
    const [formData, setFormData] = useState(initialFormData);
    const { email, password } = formData;

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

    const onInputChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const onLoginSubmitHandler = (event) => {
        event.preventDefault();

    };

    return (
        <div className="user-login-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
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
                        Sign In
                    </FormButton>
                    <FormButton
                        buttonType="google"
                        onClick={loginGoogleUserRedirectHandler}
                    >
                        Sign In with Google
                    </FormButton>
                </div>
            </form>
        </div>
    );
};

export default UserLogin;
