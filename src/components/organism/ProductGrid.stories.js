import React from "react";

import ProductGrid from "./ProductGrid";
import {buildProductList} from "Models/builders/products";


export default {
  title: "Components/Organism/ProductGrid",
  component: ProductGrid
};
export const usage = () => (<ProductGrid products={buildProductList(6)} />
);
