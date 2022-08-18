import React, {useEffect, useState} from 'react';
import styles from "./MenuProducts.module.css";
import minus from "../../access/icons/minusIcon.svg";
import plus from "../../access/icons/plusIcon.svg";
import { ToastContainer, toast } from 'react-toastify';


const Cards = props => {
    const [count, setCount] = useState(1);

    const getToBasket = (data) => {
        const id = data.id;
        let cart = JSON.parse(localStorage.getItem('cart')) || {};
        cart[id] = { ...data, count:count};

        localStorage.setItem('cart', JSON.stringify(cart));
        toast.success('Добавлено в корзину')
    }

    return (
        <div className={styles.card}>

            <div className={styles.product_img}>
                <img src={props.data.productImg} alt=""/>
            </div>

            <div className={styles.product_info}>
                <h2>{props.data.productName}</h2>
                <p>{props.data.productCompound}</p>
                <h3 className={styles.menu_new_price}>{props.data.productPrice} сом</h3>

                <div className={styles.product_count}>
                    <button onClick={() => {
                        if (count > 1) {
                            setCount(count - 1)
                        }
                    }}><img src={minus} alt=""/></button>
                    <span>{count}</span>
                    <button onClick={() => {
                        if (count < 99) {
                            setCount(count + 1)
                        }
                    }}><img src={plus} alt=""/></button>
                </div>

            </div>

            <button className={styles.btn_get_bundle} onClick={()=> getToBasket(props.data)}>В корзину</button>
        </div>
    )
}

const MenuProducts = props => {
    const [category, setCategory] = useState(1);
    const [values, setValues] = useState([]);

    const cardsArray = () => {
        fetch('http://localhost:3001/menu/')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    return [{}]
                }
            })
            .then(data => setValues(data));

    }

    const filteredValues = values.filter(item => item.category === category);

    let cards = filteredValues.map(item => <Cards data={item} key={item.id}/>);

    useEffect(cardsArray, [category]);

    return (
        <section>
            <div className={styles.content}>
                <nav>
                    <h1>{props.title}</h1>
                    <ul>
                        <li onClick={() => setCategory(1)}>Пицца</li>
                        <li onClick={() => setCategory(2)}>Бургер</li>
                        <li onClick={() => setCategory(3)}>Суши</li>
                        <li onClick={() => setCategory(4)}>Роллы</li>
                        <li onClick={() => setCategory(5)}>Салаты</li>
                        <li onClick={() => setCategory(6)}>Десерты</li>
                        <li onClick={() => setCategory(7)}>Напитки</li>
                    </ul>
                </nav>
                <div className={styles.sort}>
                    <p>Сортировать по:</p>
                    <select name="" id="">
                        <option value="">По умолчанию</option>
                        <option value="">По алфавиту</option>
                        <option value="">По цене</option>
                    </select>
                </div>
                <div className={styles.products}>{cards}</div>

                <button className={styles.btn_show_more}>Показать ещё</button>

            </div>
        </section>
    );
};

export default MenuProducts;