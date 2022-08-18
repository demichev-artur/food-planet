import React, {useEffect, useState} from 'react';
import {NavLink, Outlet} from "react-router-dom";
import logo from "../../access/images/Logo_Header.svg";
import phoneIcon from "../../access/icons/phoneIconBlack.svg";
import bundleIcon from "../../access/icons/bundleIconBlack.svg";
import styles from './Header.module.css';

const Header = () => {
    const [countBasket, setCountBasket] = useState(0);

    const setActive = ({isActive}) => isActive ? styles.active : "";

    useEffect(() => {
        if (localStorage.getItem('cart') !== null) {
            let count = JSON.parse(localStorage.getItem('cart'));
            setCountBasket(Object.keys(count).length);
        }
    },[])

    return (
        <>

            <header>
                <ul>
                    <img src={logo} alt=""/>
                    <li><NavLink className={setActive} to="/">Главная</NavLink></li>
                    <li><NavLink className={setActive} to="/menu">Меню</NavLink></li>
                    <li><NavLink className={setActive} to="/delivery">Доставка</NavLink></li>
                    <li><NavLink className={setActive} to="/contacts">Контакты</NavLink></li>
                    <li><a href="tel:+996500405988"><img src={phoneIcon} alt=""/>+996500405988</a></li>
                    <li className={styles.bundle}>
                        <NavLink className={setActive} to="/basket"><img src={bundleIcon} alt=""/>
                            <span
                                className={countBasket > 0 ? styles.basket_count : styles.basket_null}>{countBasket}</span>
                        </NavLink>
                    </li>
                </ul>
            </header>

            <Outlet/>

        </>
    );
};

export default Header;