import React from 'react';
import {Routes, Route} from "react-router-dom";
import MainPage from "../../pages/main/MainPage";
import Companys from "../../pages/companys/Companys";
import CompanyDetail from "../../pages/companys/CompanyDetail";
import Products from "../../pages/products/Products";
import ProductDetail from "../../pages/products/ProductDetail";

const css = `
    .main {
        padding-top: 20px;
        padding-bottom: 20px;
        min-height: 100px;
        background: #f2ff6d;
        padding-left: 50px;
    }
`

const Main = () => {
    return (
        <div className="main">
            <style>{css}</style>
            <Routes>
                <Route exact path='/' element={<MainPage/>}/>
                <Route path='/companys' element={<Companys/>}/>
                <Route path='/company/:id' element={<CompanyDetail/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/product/:id' element={<ProductDetail/>}/>
            </Routes>
        </div>
    );
};

export default Main;