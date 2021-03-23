
import React from "react";

import { useScrollToTop } from "Hooks/scroll";

import ProductPage from 'components/pages/ProductDetail';

const Product = () => {
    useScrollToTop();
    return <ProductPage/>;
};


export default Product;
