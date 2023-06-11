import findProductById from "../db/find-product-by-id";
import {useLoaderData} from "react-router-dom";
import ProductComponent from "../components/ProductComponent";

export async function loader({params}: any) {
    const productId = parseInt(params.productId)
    if (isNaN(productId))
        throw new Error("Product ID not valid")

    const product = await findProductById(productId)

    return { product }
}

export function Component() {
    const { product } = useLoaderData() as Awaited<ReturnType<typeof loader>>

    return (
        <div>
            <ProductComponent product={product!}/>
        </div>
    )
}