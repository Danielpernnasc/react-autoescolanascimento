import React from "react";

import Error from "components/pages/Error";
import TakenImage from "draws/Taken";

const Error404 = () => (
    <Error 
    image={<TakenImage />} 
    title="Página não encontrada" 
    description="Ops! Essa Página foi Abdusida" />
);


export default Error404;
