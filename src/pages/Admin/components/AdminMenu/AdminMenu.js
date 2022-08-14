import React, {useEffect, useState} from 'react';
import styles from "./AdminMenu.module.css";

const AdminMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/menu`)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    return [{}];
                }
            })
            .then(data => setMenu(data))
    }, []);

    let tableItems = menu.map(item => (
        <div key={item.id} className={styles.table_item}>
            <div><img src={item.productImg} alt=""/><button className={styles.btn_img}><a href={item.productImg}>Посмотреть</a></button></div>
            <div>{item.productName}</div>
            <div>{item.category}</div>
            <div>{item.productCompound}</div>
            <div>{item.productPrice}</div>
            <div className={styles.btn_actions}>
                <button id={item.id}>Удалить</button>
                <button id={item.id}>Редактировать</button>
            </div>
        </div>));

    return (
        <div className={styles.container}>
            <div className={styles.table}>
                <div className={styles.btn}>
                    <button>Добавить продукт</button>
                </div>
                <div className={styles.table_item}>
                    <div>Фото продукта</div>
                    <div>Наименование</div>
                    <div>Категория</div>
                    <div>Описание</div>
                    <div>Цена</div>
                    <div>Действия</div>
                </div>
                {tableItems}
            </div>
        </div>
    );
};

export default AdminMenu;