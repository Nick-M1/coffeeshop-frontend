import {BACKEND_APIENDPOINT} from "../constants/fetch-constants";
import {ProductSize, ProductType, Query, SortBy} from "./types";

export default async function findAllProducts(
    productSize: ProductSize | string | null,
    productType: ProductType | string | null,
    name: string | null,
    sortBy: SortBy | string | null,
    page: number | string | null,
    size: number | null
): Promise<Query['findAllProductByExample']> {

    return await fetch(BACKEND_APIENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${btoa('admin:password')}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
                query FindAllProductsByExample($productSize: ProductSize, $productType: ProductType, $name: String, $sortBy: SortBy, $page: Int, $size: Int) {
                  findAllProductByExample(example: { productSize: $productSize, productType: $productType, name: $name }, sortBy: $sortBy, page: $page, size: $size) {
                    content {
                        id
                        name
                        productSize
                        productType
                        price
                        img
                    }
                    numberOfElements
                    totalElements
                    totalPages
                  }
                }
            `,
            variables: {
                productSize,
                productType,
                name,
                sortBy,
                page,
                size
            }
        })
    }).then(res => res.json())
    .then(res => res.data.findAllProductByExample);
}