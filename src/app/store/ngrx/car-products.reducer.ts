import { createReducer, on } from "@ngrx/store";
import { ProductState } from "./product.state";
import { addToCart, removeFromCart } from "./car.actions";

export const initialState: ProductState = {
    products: []
};

export const cartReducer = createReducer(
    initialState,
    on(addToCart, (state, action) => {
        console.log(state)
        return {
            ...state,
            products: [...state.products, action.product]
        };
    }),
    on(removeFromCart, (state, action) => {
        return { 
            ...state,
            products: state.products.filter(item => item.id !== action.productId) 
        };
    }) 
);