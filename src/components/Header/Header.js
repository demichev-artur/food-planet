import React from 'react';
import {NavLink} from "react-router-dom";
import logo from "../../access/images/Logo_Header.svg";
import phoneIcon from "../../access/icons/phoneIconBlack.svg";
import bundleIcon from "../../access/icons/bundleIconBlack.svg";
import styles from './Header.module.css';

const Header = () => {
    const setActive = ({isActive}) => isActive ? styles.active : "";

    return (
        <header>
            <ul>
                <img src={logo} alt=""/>
                <li><NavLink className={setActive} to="/">Главная</NavLink></li>
                <li><NavLink className={setActive} to="/menu">Меню</NavLink></li>
                <li><NavLink className={setActive} to="/delivery">Доставка</NavLink></li>
                <li><NavLink className={setActive} to="/contacts">Контакты</NavLink></li>
                <li><a href="tel:+996500405988"><img src={phoneIcon} alt=""/>+996500405988</a></li>
                <li className={styles.bundle}>
                    <NavLink className={setActive} to="/bundle"><img src={bundleIcon} alt=""/>
                    <span className={styles.bundle_count}>0</span>
                    </NavLink>
                </li>
            </ul>
        </header>
    );
};

export default Header;