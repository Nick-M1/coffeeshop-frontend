import {Link, useLoaderData, useSearchParams} from "react-router-dom";
import findAllProducts from "../db/find-all-products";
import ProductList from "../components/ProductList";
import {
    ALL_PRODUCT_SIZES,
    ALL_PRODUCT_TYPES,
    ALL_PRODUCTS_TYPES_FORMATTED,
    ALL_SORTBYS
} from "../constants/enum-constants";
import {ProductSize, ProductType} from "../db/types";
import findAllProductsMock from "../db/find-all-products-mock";
import {ChangeEvent, SyntheticEvent, useMemo} from "react";
import SearchFilter from "../components/SearchFilter";
import {PRODUCT_SEARCH_FILTERS} from "../constants/product-search-filters";
import productTypeToImage from "../utils/ProductTypeToImage";
import {toFormattedLowerCase} from "../utils/text-utils";

export async function loader() {
    const urlParams = new URLSearchParams(window.location.search);
    const productSize = urlParams.get('product-size');
    const productType = urlParams.get('product-type');
    const productName = urlParams.get('product-name');
    const sortBy = urlParams.get('sort');
    const page = urlParams.get('page');

    const productsLoader = await findAllProductsMock(productSize, productType, productName, sortBy, page, 10)

    const urlParamsList = [productSize, productType, sortBy, productName] as const
    return { productsLoader, urlParamsList }
}

export function Component() {
    const { productsLoader, urlParamsList} = useLoaderData() as Awaited<ReturnType<typeof loader>>

    const [searchParams, setSearchParams] = useSearchParams();

    console.log(productsLoader)

    const productType = useMemo(() =>
        searchParams.has('product-type')
            ? searchParams.get('product-type')!
            : 'All Product Types',
        [searchParams]
    )


    const updateSearchParam = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        setSearchParams(params => {

            e.currentTarget.value === 'ALL'
                ? params.delete(e.currentTarget.name)
                : params.set(e.currentTarget.name, e.currentTarget.value)
            return params
        })
    }

    return (
        <div>
            <div>
                <div className='flex space-x-5 items-center mb-3'>
                    <img src={productTypeToImage(productType)} alt={productType} title={productType} className='h-20 w-20 m-1'/>
                    <h2 className='font-bold text-5xl my-2 capitalize'>{ toFormattedLowerCase(productType) }:</h2>
                </div>


                <input name='product-name' type='text' onChange={updateSearchParam} placeholder='Search...' defaultValue={urlParamsList[3] || undefined} className='input-primary w-full'/>

                { PRODUCT_SEARCH_FILTERS.map((filterParams, filterParamsIndex) =>
                    <SearchFilter
                        key={filterParams.searchKey}

                        title={filterParams.title}
                        searchKey={filterParams.searchKey}
                        options={filterParams.options}
                        defaultValue={urlParamsList[filterParamsIndex] || undefined}
                        canBeEmpty={filterParams.canBeEmpty}
                        onChange={updateSearchParam}
                    />
                )}

                { productsLoader != null && !productsLoader.empty && <ProductList products={productsLoader?.content}/> }
            </div>
        </div>
    )
}