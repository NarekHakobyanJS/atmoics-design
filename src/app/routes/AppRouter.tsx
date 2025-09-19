import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../../components/templates/Layout";
import Home from "../../components/pages/Home/Home";
import Products from "../../components/pages/Products/Products";
import Product from "../../components/pages/Product/Product";
import Cart from "../../components/pages/Cart/Cart";
import { useEffect, useState } from "react";
import type { IPorduct } from "../../shared/types";

export const AppRouter = () => {
    const [products, setProducts] = useState<IPorduct []>([])

    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((res) => setProducts(res))
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home products={products}/>} />
                    <Route path="/products" element={<Products products={products}/>} />
                    <Route path="/products/:id" element={<Product />} />
                    <Route path='/cart' element={<Cart />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}