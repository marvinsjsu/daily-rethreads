import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const Login = () => {
    
    const loginGoogleUserHandler = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log({ userDocRef, user });
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <button onClick={loginGoogleUserHandler}>Login with Google</button>
        </div>
    );
};

export default Login;
