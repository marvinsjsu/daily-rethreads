
import UserLogin from "../../components/UserLogin/user-login.component";
import UserRegistration from "../../components/UserRegistration/user-registration.component";

import "./login.styles.scss";

const Login = () => {
    return (
        <div className="login-container">
            <UserLogin />
            <UserRegistration />
        </div>
    );
};

export default Login;
