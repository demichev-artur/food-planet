import React from 'react';
import styles from './Footer.module.css';
import logo from '../../access/images/Logo.png';
import phoneIcon from '../../access/icons/phoneIcon.svg';

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt=""/>
            <ul>
                <li>Главная</li>
                <li>Меню</li>
                <li>Доставка</li>
                <li>Контакты</li>
                <li><img src={phoneIcon} alt=""/>+996500405988</li>
            </ul>
        </footer>
    );
};

export default Footer;