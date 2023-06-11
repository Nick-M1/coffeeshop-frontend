import {BACKEND_APIENDPOINT} from "../constants/fetch-constants";
import {Query} from "./types";

export default async function findProductById(productId: number): Promise<Query['findOneProduct']> {

    return await fetch(BACKEND_APIENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${btoa('admin:password')}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
                query FindOneProduct($productId: ID!) {
                    findOneProduct(id: $productId) {
                        id
                        productSize
                        productType
                        price
                        img
                    }
                }
            `,
            variables: {
                productId
            }
        })
    }).then(res => res.json())
    .then(res => res.data.findOneProduct)
}