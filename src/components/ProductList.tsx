import {Product} from "../db/types";
import ProductComponent from "./ProductComponent";

type Props = {
    products: Product[]
}

export default function ProductList({ products }: Props) {
    return (
        <div className='grid grid-cols-4'>
            { products.map(product =>
                <ProductComponent key={product.id} product={product}/>
            )}
        </div>
    )
}