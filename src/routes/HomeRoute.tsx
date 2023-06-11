import {Link, useLoaderData} from "react-router-dom";
import findAllProducts from "../db/find-all-products";
import ProductList from "../components/ProductList";
import {ALL_PRODUCT_TYPES, ALL_PRODUCTS_TYPES_FORMATTED} from "../constants/enum-constants";

export async function loader() {
    const productsLoader = await Promise.all(
        ALL_PRODUCT_TYPES.map(productType =>
            findAllProducts(null, productType, null, null, 0, 4)
    ))

    return { productsLoader }
}

export function Component() {
    const { productsLoader } = useLoaderData() as Awaited<ReturnType<typeof loader>>
console.log(productsLoader)

    return (
        <div>
            { productsLoader.map((productGroup, productGroupindex) => (
                productGroup != null && !productGroup?.empty && (
                    <div key={productGroupindex}>
                        <h2 className='bold text-xl'>{ ALL_PRODUCTS_TYPES_FORMATTED[productGroupindex] }</h2>
                        <ProductList products={productGroup?.content}/>
                        <Link to={`/products?product-type=${ALL_PRODUCT_TYPES[productGroupindex]}`}>View more</Link>
                    </div>
                )
            ))}
        </div>
    )
}