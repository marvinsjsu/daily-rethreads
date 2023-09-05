import { useContext } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

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
                    <NavLink className="nav-link" to="/shop">
                        SHOP
                    </NavLink>
                    {currentUser
                        ? (
                            <span className="nav-link" onClick={onLogoutHandler}>
                                LOGOUT
                            </span>
                        ) : (
                            <NavLink className="nav-link" to="/auth">
                                LOGIN
                            </NavLink>
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
