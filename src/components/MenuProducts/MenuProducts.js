import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {products} from "../../contants/products";
import styles from "../MenuProducts/MenuProducts.module.css";
import minus from "../../access/icons/minusIcon.svg";
import plus from "../../access/icons/plusIcon.svg";


const Cards = props => {
    const [count, setCount] = useState(1);

    return(
        <div className={styles.card}>

            <div className={styles.product_img}>
                <img src={props.data.productImg} alt=""/>
            </div>

            <div className={styles.product_info}>
                <h2>{props.data.productName}</h2>
                <p>{props.data.productCompound}</p>
                <h3 className={styles.menu_new_price}>{props.data.productPrice} сом</h3>

                <div className={styles.product_count}>
                    <button onClick={ ()=>{if(count > 1){setCount(count-1)}}}><img src={minus} alt=""/></button>
                    <span>{count}</span>
                    <button onClick={ ()=>{if(count < 99){ setCount(count+1)} }}><img src={plus} alt=""/></button>
                </div>

            </div>

            <button className={styles.btn_get_bundle}>В корзину</button>

        </div>
    )
}


const MenuProducts = props => {
    const cardsArray = products.map((item,i) => <Cards data={item} key={i}/>);

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
                <button className={styles.btn_show_more}>Показать ещё</button>
            </div>
        </section>
    );
};

export default MenuProducts;