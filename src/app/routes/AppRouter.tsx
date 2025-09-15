import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../../components/templates/Layout";
import Home from "../../components/pages/Home/Home";
import Products from "../../components/pages/Products/Products";
import Product from "../../components/pages/Product/Product";
import Cart from "../../components/pages/Cart/Cart";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<Product />} />
                    <Route path='/cart' element={<Cart />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}