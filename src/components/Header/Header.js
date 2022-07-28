import React from 'react';
import logo from "../../access/images/Logo_Header.png";
import phoneIcon from "../../access/icons/phoneIconBlack.svg";
import bundleIcon from "../../access/icons/bundleIconBlack.svg";
import styles from './Header.module.css';

const Header = () => {
    return (
        <header>
            <img src={logo} alt=""/>
            <ul>
                <li>Главная</li>
                <li>Меню</li>
                <li>Доставка</li>
                <li>Контакты</li>
                <li><img src={phoneIcon} alt=""/>+996500405988</li>
                <li><img src={bundleIcon} alt=""/><span className={styles.bundle_count}>1</span></li>
            </ul>
        </header>
    );
};

export default Header;