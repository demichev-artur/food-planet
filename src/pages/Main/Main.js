import React from 'react';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MenuNew from "../../components/MenuNew/MenuNew";
import MenuProducts from "../../components/MenuProducts/MenuProducts";

const Main = () => {
    return (
        <div>
            <Header/>
            <MenuNew/>
            <MenuProducts/>
            <Footer/>
        </div>
    );
};

export default Main;