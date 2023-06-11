import {BACKEND_APIENDPOINT} from "../constants/fetch-constants";
import {ProductSize, ProductType, Query, SortBy} from "./types";

export default async function findAllProductsMock(
    productSize: ProductSize | string | null,
    productType: ProductType | string | null,
    name: string | null,
    sortBy: SortBy | string | null,
    page: number | string | null,
    size: number | null
): Promise<Query['findAllProductByExample']> {

    return {content: []}
}