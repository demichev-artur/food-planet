import React from 'react';
import Footer from "../../components/Footer/Footer";
import MenuNew from "../../components/MenuNew/MenuNew";
import MenuProducts from "../../components/MenuProducts/MenuProducts";
import Benefits from "./components/Benefits/Benefits";
import Reviews from "./components/Reviews/Reviews";
import HeaderContent from "../../components/HeaderContent/HeaderContent";

const Main = () => {
    return (
        <div>
            <HeaderContent/>
            <MenuNew title="Новинки"/>
            <MenuProducts title="Меню"/>
            <Benefits/>
            <Reviews/>
            <Footer/>
        </div>
    );
};

export default Main;