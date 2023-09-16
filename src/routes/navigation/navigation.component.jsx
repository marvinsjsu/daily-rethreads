import { Outlet, Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import CartIcon from "../../components/CartIcon/cart-icon.component";
import CartDropdown from "../../components/CartDropdown/cart-dropdown.component";

import { UserActions } from "../../actions/user.actions";

import { selectCurrentUser } from "../../selectors/user.selectors";

import { ReactComponent as DRTLogo } from "../../assets/drt-logo.svg";

import './navigation.styles.scss';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();

  const onLogoutHandler = async () => {
    dispatch(UserActions.userSignOutStart());
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
