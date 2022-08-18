import React, {useEffect, useState} from 'react';
import styles from "../AdminContacts/AdminContacts.module.css";

const AdminOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/orders/`)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    return [{}];
                }
            })
            .then(data => setOrders(data))
    }, []);

    const order = (data) => {
        let values = Object.values(data);
        console.log(values)
    }



    let tableItems = orders.map(item => (
        <div key={item.id} className={styles.table_item}>
            <div>{item.name}</div>
            <div>{item.phone}</div>
            <div>{order(item.order)}</div>
            <div>
                <button>Отправленно</button>
            </div>
        </div>));

    return (
        <div className={styles.container}>
            <div className={styles.table}>
                <div className={styles.btn}>
                    <button>Очистить список</button>
                </div>
                <div className={styles.table_item}>
                    <div>Имя</div>
                    <div>Номер</div>
                    <div>Заказ</div>
                    <div>Действия</div>
                </div>
                {tableItems}
            </div>
        </div>
    );
};

export default AdminOrders;