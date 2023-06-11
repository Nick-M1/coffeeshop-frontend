export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
    DateTime: any
    BigDecimal: any
}

export type Product = {
    __typename?: "Product"
    id: Scalars["ID"]
    name?: Maybe<Scalars["String"]>
    productSize?: Maybe<ProductSize>
    productType?: Maybe<ProductType>
    price?: Maybe<Scalars["BigDecimal"]>
    img?: Maybe<Scalars["String"]>
}

export type User = {
    __typename?: "User"
    id: Scalars["ID"]
    username?: Maybe<Scalars["String"]>
    password?: Maybe<Scalars["String"]>
    role?: Maybe<Role>
}

export type TransactionItem = {
    __typename?: "TransactionItem"
    id: Scalars["ID"]
    product?: Maybe<Product>
    quantity?: Maybe<Scalars["Int"]>
}

export type Transaction = {
    __typename?: "Transaction"
    id: Scalars["ID"]
    transactionItems?: Maybe<Array<Maybe<TransactionItem>>>
    timestamp?: Maybe<Scalars["DateTime"]>
    user?: Maybe<User>
}

export type Pageable = {
    __typename?: "Pageable"
    offset?: Maybe<Scalars["Int"]>
    pageNumber?: Maybe<Scalars["Int"]>
    pageSize?: Maybe<Scalars["Int"]>
}

export type ProductResponse = {
    __typename?: "ProductResponse"
    content: Array<Product>
    pageable?: Maybe<Pageable>
    empty?: Maybe<Scalars["Boolean"]>
    first?: Maybe<Scalars["Boolean"]>
    last?: Maybe<Scalars["Boolean"]>
    number?: Maybe<Scalars["Int"]>
    numberOfElements?: Maybe<Scalars["Int"]>
    totalElements?: Maybe<Scalars["Int"]>
    totalPages?: Maybe<Scalars["Int"]>
}

export type TransactionInput = {
    productId?: Maybe<Scalars["ID"]>
    quantity?: Maybe<Scalars["Int"]>
}

export type ProductFilter = {
    name?: Maybe<Scalars["String"]>
    productSize?: Maybe<ProductSize>
    productType?: Maybe<ProductType>
    price?: Maybe<Scalars["BigDecimal"]>
    img?: Maybe<Scalars["String"]>
}

export enum ProductSize {
    Small = "SMALL",
    Medium = "MEDIUM",
    Large = "LARGE"
}

export enum ProductType {
    HotFood = "HOT_FOOD",
    ColdFood = "COLD_FOOD",
    HotDrink = "HOT_DRINK",
    ColdDrink = "COLD_DRINK",
    SweetTreats = "SWEET_TREATS"
}

export enum Role {
    Admin = "ADMIN",
    Customer = "CUSTOMER"
}

export enum SortBy {
    NameAsc = "NAME_ASC",
    NameDsc = "NAME_DSC",
    PriceAsc = "PRICE_ASC",
    PriceDsc = "PRICE_DSC"
}

export type Query = {
    __typename?: "Query"
    findAllProduct: Array<Maybe<Product>>
    findAllProductByExample?: Maybe<ProductResponse>
    findOneProduct?: Maybe<Product>
    findAllTransaction: Array<Maybe<Transaction>>
    findAllTransactionByUser: Array<Maybe<Transaction>>
    findOneTransaction?: Maybe<Transaction>
}

export type QueryFindAllProductByExampleArgs = {
    example?: Maybe<ProductFilter>
    sortBy?: Maybe<SortBy>
    page?: Maybe<Scalars["Int"]>
    size?: Maybe<Scalars["Int"]>
}

export type QueryFindOneProductArgs = {
    id: Scalars["ID"]
}

export type QueryFindOneTransactionArgs = {
    id: Scalars["ID"]
}

export type Mutation = {
    __typename?: "Mutation"
    createProduct?: Maybe<Product>
    updateProduct?: Maybe<Product>
    deleteProduct?: Maybe<Product>
    createTransaction?: Maybe<Transaction>
    updateTransaction?: Maybe<Transaction>
    deleteTransaction?: Maybe<Transaction>
}

export type MutationCreateProductArgs = {
    name?: Maybe<Scalars["String"]>
    productSize?: Maybe<ProductSize>
    productType?: Maybe<ProductType>
}

export type MutationUpdateProductArgs = {
    id: Scalars["ID"]
    name?: Maybe<Scalars["String"]>
    productSize?: Maybe<ProductSize>
    productType?: Maybe<ProductType>
}

export type MutationDeleteProductArgs = {
    id: Scalars["ID"]
}

export type MutationCreateTransactionArgs = {
    transactionInput?: Maybe<Array<Maybe<TransactionInput>>>
}

export type MutationUpdateTransactionArgs = {
    id: Scalars["ID"]
    transactionInput?: Maybe<Array<Maybe<TransactionInput>>>
}

export type MutationDeleteTransactionArgs = {
    id: Scalars["ID"]
}
