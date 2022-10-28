import { combineReducers } from "redux";
import { alertReducer } from "./alert.reducer";
import { authReducer } from "./auth.reducer";
import { cartReducer } from "./Cart.reducer";
import { categoryReducer } from "./Category.reducer";
import { counterReducer } from "./Counter.reducer";
import { orderReducer } from "./Order.reducer";
import { productReducer } from "./Product.reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    counter: counterReducer,
    Product: productReducer,
    category: categoryReducer,
    cart: cartReducer,
    order: orderReducer
})