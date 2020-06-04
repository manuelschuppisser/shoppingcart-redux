import { ADD_PRODUCT_BASKET } from './types';

export const addBasket =() => {
    return (dispatch) => {
        console.log("Adding to Basket");
        dispatch({
            type: ADD_PRODUCT_BASKET
        });
    }
}