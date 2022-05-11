import fakestoreapi from "../../apis/fakeStoreApi"
import { ActionTypes } from "../constants/action-types"

// redux-thunk middleware action creator
export const fetchProducts = () => async (dispatch) => {
    const response = await fakestoreapi.get("/products")
    dispatch({ type: ActionTypes.SET_PRODUCTS, payload: response.data })
}

export const fetchProduct = (id) => async (dispatch) => {
    const response = await fakestoreapi.get(`/products/${id}`)
    dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data })
}
// without middleware: action creator from component
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) => {
    console.log(product)
    return {

        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}