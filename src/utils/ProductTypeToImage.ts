import {
    ALL_FOODS_IMG,
    COLD_DRINKS_IMG,
    COLD_FOOD_IMG,
    HOT_DRINKS_IMG,
    HOT_FODD_IMG,
    SWEAT_TREATS_IMG
} from "../constants/assets-constants";

const mapper: {[key: string]: string } = {
    HOT_FOOD: HOT_FODD_IMG,
    COLD_FOOD: COLD_FOOD_IMG,
    HOT_DRINK: HOT_DRINKS_IMG,
    COLD_DRINK: COLD_DRINKS_IMG,
    SWEET_TREATS: SWEAT_TREATS_IMG,
    'All Product Types': ALL_FOODS_IMG
}

export default function productTypeToImage(productType: string) {
    return mapper[productType]
}