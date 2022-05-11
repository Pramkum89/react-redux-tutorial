import { combineReducers } from "redux"
import { selectedProduct } from "../actions/productActions"
import { productReducer, selectedProductReducer } from "./productReducer"

export const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer
})

export default reducers