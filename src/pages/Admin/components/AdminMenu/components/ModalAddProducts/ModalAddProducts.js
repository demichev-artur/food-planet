import React from 'react';
import styles from "./ModalAddProducts.module.css";
import {toast} from "react-hot-toast";

const ModalAddProducts = ({active, setActive}) => {
    const addEmployees = (e) => {
        const data = {
            productImg: e.currentTarget.img_url.value,
            productName: e.currentTarget.name.value,
            productCompound: e.currentTarget.desc.value,
            productPrice: e.currentTarget.price.value,
            category: +e.currentTarget.category.value

        }
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        const url = 'http://localhost:3001/menu';

        fetch(url, options)
            .then(response => {
                if (response.ok) {
                    toast.success('Товар успешно добавлен');
                } else {
                    toast.error('Что-то произошло.. Статус ошибки:' + response.status);
                    return [{}];
                }
            })

        setActive(false);
        window.location.reload();
    };

    return (
        <div className={active ? styles.modal_active : styles.modal}>
            <div className={styles.modal_content}>
                <img className={styles.close_icon} src="https://cdn-icons-png.flaticon.com/512/70/70091.png" alt=""
                     onClick={() => setActive(false)}/>
                <h2>Добавление товара</h2>
                <form onSubmit={addEmployees} action="javascript:void(0)">
                    <div>
                        <label htmlFor="name">Наименование</label>
                        <input required type="text" name="name"/>
                    </div>

                    <div>
                        <label htmlFor="img_url">Адрес изображения</label>
                        <input required type="text" name="img_url"/>
                    </div>

                    <div>
                        <label htmlFor="category">Категория</label>
                        <input required type="text" name="category"/>
                    </div>

                    <div>
                        <label htmlFor="desc">Описание</label>
                        <textarea required name="desc"/>
                    </div>

                    <div>
                        <label htmlFor="price">Цена</label>
                        <input required type="text" name="price"/>
                    </div>

                    <button>Добавить</button>
                </form>
            </div>
        </div>
    );
};

export default ModalAddProducts;