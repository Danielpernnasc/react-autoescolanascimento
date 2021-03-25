import { useProduct, useProducts} from "./products";

describe("useProduct()", () => {
    test("returns a product", () => {
        const slang = "Mudanca-Categ-Caminhao";

        const product = useProduct ({ slang });

        expect(product.title).toEqual("Mudança de Categoria Caminhão");
    });
    test("return undefined if product was not found", () => {
        const slang = "invalid-slang";

        const product = useProduct({ slang });

        expect(product).toBeUndefined();
    });
});

describe("useProducts()", () => {
    test("returns a product list", () => {
    
    const products = useProducts();
    
    expect(products.length).toBeGreaterThan(1);
    });
});
