import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './MenuNew.module.css';
import {productsNew} from "../../contants/productsNew";
import plus from '../../access/icons/plusIcon.svg';
import minus from '../../access/icons/minusIcon.svg';



const MenuNew = props => {

    const cardsArray = productsNew.map(item => (
        <div className={styles.card}>

            <div className={styles.product_img}>
                <img src={item.productImg} alt=""/>
            </div>

            <div className={styles.product_info}>
                <h2>{item.productName}</h2>
                <p>{item.productCompound}</p>
                <h3 className={styles.menu_new_price}>{item.productPrice} сом</h3>

                <div className={styles.product_count}>
                    <button><img src={minus} alt=""/></button>
                    <span>1</span>
                    <button><img src={plus} alt=""/></button>
                </div>

            </div>

            <button className={styles.btn_get_bundle}>В корзину</button>


        </div>
    ))

    return (
        <section>
            <div className={styles.content}>
                <nav>
                    <h1>{props.title}</h1>

                    <ul>
                        <li><NavLink to="burger">Пицца</NavLink></li>
                        <li><NavLink to="burger">Бургер</NavLink></li>
                        <li><NavLink to="burger">Суши</NavLink></li>
                        <li><NavLink to="burger">Роллы</NavLink></li>
                        <li><NavLink to="burger">Салаты</NavLink></li>
                        <li><NavLink to="burger">Десерты</NavLink></li>
                        <li><NavLink to="burger">Напитки</NavLink></li>
                    </ul>
                </nav>

                <div className={styles.products}>
                    {cardsArray}
                </div>

            </div>
        </section>

    );
};

export default MenuNew;