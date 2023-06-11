import {Product} from "../db/types";
import {Link} from "react-router-dom";

type Props = {
    product: Product
}

export default function ProductComponent({ product }: Props) {
    return (
        <Link to={`/products/${product.id}`}>
            <h4>{ product.name }</h4>
            {/*<h5>{ product.productType }</h5>*/}
            {/*<h5>{ product.productSize }</h5>*/}
            <h5>{ product.price }</h5>
            <img src={product.img || ''} alt={product.name || ''} title={product.name || ''}/>
        </Link>
    )
}