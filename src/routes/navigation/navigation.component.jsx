import { Outlet, Link } from "react-router-dom";

import { ReactComponent as DRTLogo } from "../../assets/drt-logo.svg";

import './navigation.styles.scss';

const Navigation = () => (
    <>
        <div className="navigation-container">
            <Link className="logo-container" to="/">
                <DRTLogo className="logo" />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">
                    SHOP
                </Link>
                <Link className="nav-link" to="/login">
                    LOGIN
                </Link>
            </div>
        </div>
        <Outlet />
    </>
);

export default Navigation;
