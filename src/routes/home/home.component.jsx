import { Outlet } from "react-router-dom";

import CategoryMenu from "../../containers/CategoryMenu/category-menu.component";

const Home = () => {
    return (
        <>
            <CategoryMenu />
            <Outlet />
        </>
    );
};

export default Home;
