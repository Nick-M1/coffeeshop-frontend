import {ProductSize, ProductType, Role, SortBy} from "../db/types";


export const ALL_PRODUCT_SIZES: ProductSize[] =[
    ProductSize.Small,
    ProductSize.Medium,
    ProductSize.Large
]

export const ALL_PRODUCT_TYPES: ProductType[] =[
    ProductType.HotFood,
    ProductType.ColdFood,
    ProductType.HotDrink,
    ProductType.ColdDrink,
    ProductType.SweetTreats
]

export const ALL_PRODUCTS_TYPES_FORMATTED: string[] = [
    "Hot Food",
    "Cold Food",
    "Hot Drink",
    "Cold Drink",
    "Sweet Treats"
]

export const ALL_ROLES: Role[] =[
    Role.Admin,
    Role.Customer
]

export const ALL_SORTBYS: SortBy[] =[
    SortBy.NameAsc,
    SortBy.NameDsc,
    SortBy.PriceAsc,
    SortBy.PriceDsc
]