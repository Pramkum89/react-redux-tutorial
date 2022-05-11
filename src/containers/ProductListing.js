import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from "./ProductComponent";
import { setProducts, fetchProducts } from "../redux/actions/productActions";

const ProductListing = () => {

    const products = useSelector((state) => state)
    const dispatch = useDispatch()
    console.log(products)

    // Redux without thunk middleware
    // const fetchProducts = async () => {
    //     const response = await axios
    //         .get("https://fakestoreapi.com/products")
    //         // .get("https://asos2.p.rapidapi.com/products/list")
    //         .catch((err) => {
    //             console.log("Err", err)
    //         })
    //     console.log(response.data)
    //     dispatch(setProducts(response.data))

    // }

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    console.log("Products: ", products)

    return (
        <div className="ui grid container">
            {/* <h2>Product Listing</h2> */}
            <ProductComponent />
        </div>
    )
}

export default ProductListing