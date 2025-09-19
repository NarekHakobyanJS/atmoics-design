import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../../components/templates/Layout";
import Home from "../../components/pages/Home/Home";
import Products from "../../components/pages/Products/Products";
import Product from "../../components/pages/Product/Product";
import Cart from "../../components/pages/Cart/Cart";
import { useEffect, useState } from "react";
import type { IPorduct } from "../../shared/types";
import { createPortal } from "react-dom";
import Modal from "../../components/organisms/Modal/Modal";

const portal: any = document.getElementById('portal')

export const AppRouter = () => {
    const [products, setProducts] = useState<IPorduct[]>([])
    const [carts, setCarts] = useState<IPorduct[]>([])
    const [open, setOpen] = useState(false)

    /// addToBasket 

    const addToCart = (item: IPorduct) => {
        // add Cart 
        setOpen(true)
        console.log(item)
    }
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((res) => setProducts(res))
    }, [])

    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home products={products} />} />
                        <Route path="/products" element={<Products open={open} products={products} addToCart={addToCart} />} />
                        <Route path="/products/:id" element={<Product />} />
                        <Route path='/cart' element={<Cart />} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </>
    )

}  
