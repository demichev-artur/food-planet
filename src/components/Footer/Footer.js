import React from 'react';
import styles from './Footer.module.css';
import logo from '../../access/images/Logo_Footer.svg';
import phoneIcon from '../../access/icons/phoneIcon.svg';
import {NavLink} from "react-router-dom";

const Footer = () => {

    const setActive = ({isActive}) => isActive ? styles.active : "";

    return (
        <footer className={styles.footer}>
            <ul>
                <img src={logo} alt=""/>
                <li><NavLink className={setActive} to="/">Главная</NavLink></li>
                <li><NavLink className={setActive} to="/menu">Меню</NavLink></li>
                <li><NavLink className={setActive} to="/delivery">Доставка</NavLink></li>
                <li><NavLink className={setActive} to="/contacts">Контакты</NavLink></li>
                <li><a href="tel:+996500405988"><img src={phoneIcon} alt=""/>+996500405988</a></li>
            </ul>
        </footer>
    );
};

export default Footer;