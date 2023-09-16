import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import FormInput from "../FormInput/form-input.component";
import FormButton from "../FormButton/form-button.component";

import { UserActions } from "../../actions/user.actions";

import { selectUserError } from "../../selectors/user.selectors";

import "./user-login.styles.scss";

const initialFormData = {
    email: '',
    password: '',
};

const UserLogin = () => {
    const errorMessage = useSelector(selectUserError);
    const [formData, setFormData] = useState(initialFormData);
    const { email, password } = formData;

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(UserActions.getAuthRedirectResult());
    }, []);

    const onInputChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const loginGoogleUserHandler = async () => {
      dispatch(UserActions.googleSignInStart());
    };

    const onLoginSubmitHandler = async (event) => {
        event.preventDefault();
        dispatch(UserActions.emailSignInStart(email, password));
    };

    console.log({ errorMessage });

    return (
        <div className="user-login-container">
            <h2>I already have an account</h2>
            <span>Login with your email and password</span>
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
