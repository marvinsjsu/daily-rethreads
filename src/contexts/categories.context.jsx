import { useState, createContext, useEffect } from "react";

import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: [],
    setCategoriesMap: () => null,
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState([]);

    const value = { categoriesMap, setCategoriesMap };

    useEffect(() => {
        async function getCategories () {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }

        getCategories();
    }, []);

    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};
