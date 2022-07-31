import React from 'react';
import Footer from "../../components/Footer/Footer";
import MenuNew from "../../components/MenuNew/MenuNew";
import MenuProducts from "../../components/MenuProducts/MenuProducts";
import Benefits from "./components/Benefits";
import Reviews from "./components/Reviews/Reviews";
import HeaderContent from "../../components/HeaderContent/HeaderContent";

const Main = () => {
    return (
        <div>
            <HeaderContent/>
            <MenuNew/>
            <MenuProducts/>
            <Benefits/>
            <Reviews/>
            <Footer/>
        </div>
    );
};

export default Main;