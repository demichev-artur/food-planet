import React from 'react';
import styles from './AdminSidebar.module.css';
import logo from "../../../../access/icons/logoAdmin.svg";
import {NavLink} from "react-router-dom";
import listIcon1 from "../../../../access/icons/sidebar/list/1. overview.svg";
import listIcon2 from "../../../../access/icons/sidebar/list/2. tickets.svg";
import listIcon3 from "../../../../access/icons/sidebar/list/3. ideas.svg";
import listIcon4 from "../../../../access/icons/sidebar/list/4. contacts.svg";
import listIcon5 from "../../../../access/icons/sidebar/list/5. agents.svg";
import listIcon6 from "../../../../access/icons/sidebar/list/6. articles.svg";

const AdminSidebar = (props) => {
    const setActive = ({isActive}) => isActive ? styles.active : "";

    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                <img src={logo} alt=""/>
                <p>FOOD PLANET</p>
            </div>

            <ul>
                <NavLink className={setActive} to="main" onClick={() => props.setTitle("Главная")}>
                    <li><img src={listIcon1} alt=""/>Главная</li>
                </NavLink>

                <NavLink className={setActive} to="orders" onClick={() => props.setTitle("Заказы")}>
                    <li><img src={listIcon2} alt=""/>Заказы</li>
                </NavLink>

                <NavLink className={setActive} to="menu" onClick={() => props.setTitle("Меню")}>
                    <li><img src={listIcon3} alt=""/>Меню</li>
                </NavLink>

                <NavLink className={setActive} to="contacts" onClick={() => props.setTitle("Контакты")}>
                    <li><img src={listIcon4} alt=""/>Контакты</li>
                </NavLink>

                <NavLink className={setActive} to="reviews" onClick={() => props.setTitle("Отзывы")}>
                    <li><img src={listIcon5} alt=""/>Отзывы</li>
                </NavLink>

                <NavLink className={setActive} to="employees" onClick={() => props.setTitle("Сотрудники")}>
                    <li><img src={listIcon6} alt=""/>Сотрудники</li>
                </NavLink>
            </ul>

        </div>
    );
};

export default AdminSidebar;