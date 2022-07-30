import React from 'react';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MenuNew from "../../components/MenuNew/MenuNew";
import MenuProducts from "../../components/MenuProducts/MenuProducts";
import Benefits from "./components/Benefits";
import Reviews from "./components/Reviews/Reviews";

const Main = () => {
    return (
        <div>
            <Header/>
            <MenuNew/>
            <MenuProducts/>
            <Benefits/>
            <Reviews/>
            <Footer/>
        </div>
    );
};

export default Main;