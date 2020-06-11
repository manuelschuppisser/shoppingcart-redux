import {ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET} from '../actions/types';
const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        VanGogh1886:{
        name:'Van Gogh,1886',
        price:10.00,
        numbers:0,
        inCart: false
    },
    VanGogh1887:{
        name:'Van Gogh,1887',
        price:9.00,
        numbers:0,
        inCart: false
    },
    VanGogh1888:{
        name:'Van Gogh,1888',
        price:10.00,
        numbers:0,
        inCart: false
    },
    VanGogh1889:{
        name:'Van Gogh,1889',
        price:9.00,
        numbers:0,
        inCart: false
    },
    }
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT_BASKET:
            let addQuantity = {...state.products[action.payload]}
            addQuantity.numbers += 1;
            addQuantity.inCart = true;
            console.log(addQuantity);
            return {
                ...state,
                            basketNumbers: state.basketNumbers + 1,
                            cartCost: state.cartCost + state.products[action.payload].price,
                            products: {
                                ...state.products,
                                [action.payload]: addQuantity
                            }
        }
        case GET_NUMBERS_BASKET:
            return{
                ...state
            }
          default:
              return state;
    }
}