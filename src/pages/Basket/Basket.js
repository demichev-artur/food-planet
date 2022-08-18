import React, {useEffect, useState} from 'react';
import styles from './Basket.module.css';
import minus from "../../access/icons/minusIcon.svg";
import plus from "../../access/icons/plusIcon.svg";
import {toast} from "react-hot-toast";

const TableItems = props => {
    const [count, setCount] = useState(props.data.count);

    return (
        <div key={props.data.id} className={styles.table_item}>
            <div><img src={props.data.productImg} alt=""/><p>{props.data.productName}</p></div>

            <div className={styles.btn_set_count}>
                <button onClick={() => {
                    if (count > 1) {
                        setCount(count - 1)
                    }
                }}>
                    <img src={minus} alt=""/>
                </button>

                <span>{count}</span>

                <button onClick={() => {
                    if (count < 99) {
                        setCount(count + 1)
                    }
                }}>
                    <img src={plus} alt=""/>
                </button>
            </div>
            <div className={styles.price}><span>{props.data.productPrice} сом</span></div>
            <div className={styles.price}><span>{props.data.productPrice * count} сом</span></div>
            <div>
                <button onClick={() => localStorage.removeItem('cart')} className={styles.btn_remove}
                        id={props.data.id}><img style={{width: "30px"}}
                                                src="https://cdn-icons-png.flaticon.com/512/70/70091.png"
                                                alt=""/>
                </button>
            </div>
        </div>
    )
}

const Basket = () => {
    const [basketValues, setBasketValues] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const getProducts = () => {
        if (localStorage.getItem('cart') !== null) {
            const products = JSON.parse(localStorage.getItem('cart'));
            setBasketValues(Object.values(products));
        }

    }

    const getOrder = (e) => {
        const data = {
            name: e.currentTarget.name.value,
            phone: e.currentTarget.phone.value,
            order: JSON.parse(localStorage.getItem('cart'))
        }

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        const url = 'http://localhost:3001/orders/';

        fetch(url, options)
            .then(response => {
                if (response.ok) {
                    toast.success('Ваш заказ принят');
                } else {
                    toast.error('Что-то произошло.. Статус ошибки:' + response.status);
                    return [{}];
                }
            })
    }



    useEffect(getProducts, []);
    useEffect(()=> {
        let a = Object.values(basketValues);
        console.log(a);

    },[basketValues])

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Корзина</h1>
                <h4>Товары в вашей корзине</h4>
            </div>

            <div className={styles.table}>
                <div className={styles.table_item}>
                    <div>Наименование товара</div>
                    <div>Количество</div>
                    <div>Цена</div>
                    <div>К оплате</div>
                    <div>Действия</div>
                </div>

                {
                    basketValues.map(item => <TableItems data={item}/>)
                }

                <div className={styles.table_item}>
                    <div><p>Итого к оплате: <span className={styles.get_total_price}>{totalPrice}</span></p></div>
                </div>
            </div>

            <div className={styles.inputs}>
                <form onSubmit={getOrder} action="javascript:void(0)">
                    <input required type="text" name="name" placeholder="Укажите ваше имя"/>
                    <input required type="text" name="phone" placeholder="Укажите ваш номер"/>
                    <button>Оформить заказ</button>
                </form>
            </div>

        </div>
    );
};

export default Basket;