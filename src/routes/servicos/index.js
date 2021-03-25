import React from "react";
import { useParams } from "react-router-dom";

import { useScrollToTop } from "Hooks/scroll";
import { useProduct } from "Hooks/products";

import ProductPage from 'components/pages/ProductDetail';
import Error from 'components/pages/Error';
import NotFoundImage from 'draws/Transito';

const Product = () => {
    useScrollToTop();
    const { slang } = useParams();
    const product = useProduct({ slang });

    if (!product) {
        return <Error
            image={<NotFoundImage/>} 
            title="Serviço não encontrado"
            description="Serviço não encontrado ou não disponível"
        />
    }

    return <ProductPage product={product}/>;
};


export default Product;
