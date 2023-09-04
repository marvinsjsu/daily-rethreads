import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/CartIcon/cart-icon.component";
import CartDropdown from "../../components/CartDropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";

import { logoutUser } from "../../utils/firebase/firebase.utils";

import { ReactComponent as DRTLogo } from "../../assets/drt-logo.svg";

import './navigation.styles.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    const onLogoutHandler = async () => {
        await logoutUser();
    };

    return (
        <>
            <div className="navigation-container">
                <Link className="logo-container" to="/">
                    <DRTLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    {currentUser
                        ? (
                            <span className="nav-link" onClick={onLogoutHandler}>
                                LOGOUT
                            </span>
                        ) : (
                            <Link className="nav-link" to="/auth">
                                LOGIN
                            </Link>
                        )
                    }
                    <CartIcon />
                </div>
                <CartDropdown />
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;
