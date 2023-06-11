import {ALL_PRODUCT_SIZES, ALL_PRODUCT_TYPES, ALL_SORTBYS} from "./enum-constants";

export const PRODUCT_SEARCH_FILTERS: SearchFilterType[] = [
    { title: 'Product Size', searchKey: 'product-size', options: ALL_PRODUCT_SIZES, canBeEmpty: true },
    { title: 'Product Type', searchKey: 'product-type', options: ALL_PRODUCT_TYPES, canBeEmpty: true },
    { title: 'Sort',         searchKey: 'sort', options: ALL_SORTBYS, canBeEmpty: false },
]
