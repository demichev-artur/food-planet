import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './NotFound.module.css';
import pizzaImg from '../../access/images/404_page_image.png';

const NotFound = () => {
    return (
        <section>
            <div className={styles.container}>
                <h1>4<img src={pizzaImg} alt=""/>4</h1>
            </div>
            <p>Кажется что-то пошло не так! Страница, которую вы запрашиваете, не существует. Возможно
                она <br/> устарела, была удалена, или был введён неверный адрес в адресной строке.</p>
            <NavLink to="/">
                <button className={styles.btn}>Вернуться на главную страницу</button>
            </NavLink>
        </section>
    );
};

export default NotFound;