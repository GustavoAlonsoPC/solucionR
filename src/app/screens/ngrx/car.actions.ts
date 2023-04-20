import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/shared/models/products.model";

export const addToCart = createAction('[Cart] Add Product', props<{ product: Product }>());
export const removeFromCart = createAction('[Cart] Remove Product', props<{ productId: number }>());