import { useState } from "react";

import FormInput from "../FormInput/form-input.component";
import FormButton from "../FormButton/form-button.component";

import { createUserDocumentFromAuth, createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import "./user-registration.styles.scss";

const initialFormData = {
    email: '',
    password: '',
    displayName: '',
    confirmPassword: '',
};

const initialErrorData = {
    email: null,
    password: null,
    displayName: null,
    confirmPassword: null,
};

const UserRegistration = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [errorData, setErrorData] = useState(initialErrorData);
    const { displayName, email, password, confirmPassword } = formData;

    const onInputChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const onFormSubmitHandler = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setErrorData({
                ...errorData,
                confirmPassword: 'Password mismatch.'
            });

            return;
        }

        try {
            const response = await createAuthUserWithEmailAndPassword(email, password);
            const { user } = response;
            await createUserDocumentFromAuth(user, { displayName });
            resetFormData();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use.');
            }
            console.log('Error in creating user account.', error.message);
        }
    };

    const resetFormData = () => {
        setFormData(initialFormData);
    };

    return (
        <div className="user-registration-container">
            <h2>I do not have an account</h2>
            <span>Create an account with your email and password</span>
            <form onSubmit={onFormSubmitHandler}>
                <FormInput
                    required
                    type="text"
                    label="Username"
                    id="displayName"
                    name="displayName"
                    value={displayName}
                    onChange={onInputChangeHandler}
                />
                <FormInput
                    required
                    id="email"
                    type="email"
                    name="email"
                    label="Email"
                    value={email}
                    onChange={onInputChangeHandler}
                />
                <FormInput
                    required
                    minLength={8}
                    id="password"
                    type="password"
                    name="password"
                    label="Password"
                    value={password}
                    onChange={onInputChangeHandler}
                />
                <FormInput
                    required
                    minLength={8}
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    label="Confirm Password"
                    onChange={onInputChangeHandler}
                />
                <FormButton type="submit">
                    Create Account
                </FormButton>
            </form>
        </div>
    );
};

export default UserRegistration;
