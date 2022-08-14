import React, {useEffect, useState} from 'react';
import styles from "./ModalUpdateProducts.module.css";
import toast from "react-hot-toast";

const ModalUpdateProducts = ({active, setActive, id}) => {
    const [values, setValues] = useState({});

    const getEmployeeById = () => {

        const url = 'http://localhost:3001/menu/' + id;

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    toast.error('При получении данных произошла ошибка');
                    return [{}];
                }
            })
            .then(data => setValues(data));

    }

    const updateProduct= (e) => {
        const data = {
            productImg: e.currentTarget.img_url.value,
            productName: e.currentTarget.name.value,
            productCompound: e.currentTarget.desc.value,
            productPrice: e.currentTarget.price.value,
            category: e.currentTarget.category.value
        }

        const options = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        const url = 'http://localhost:3001/menu/' + id;

        fetch(url, options)
            .then(response => {
                if (response.ok) {
                    toast.success('Данные сотрудника успешно изменены');
                } else {
                    toast.error('Ошибка редактирования')
                }
            })

        setActive(false);
        window.location.reload();
    }

    useEffect(getEmployeeById, [id]);

    return (
        <div className={active ? styles.modal_active : styles.modal}>
            <div className={styles.modal_content}>

                <img className={styles.close_icon} src="https://cdn-icons-png.flaticon.com/512/70/70091.png" alt=""
                     onClick={() => setActive(false)}/>
                <h2>Редактирование товара</h2>

                <form onSubmit={updateProduct} action="javascript:void(0)">
                    <div>
                        <label htmlFor="name">Наименование</label>
                        <input required type="text" name="name" defaultValue={values.productName}/>
                    </div>

                    <div>
                        <label htmlFor="img_url">Адрес изображения</label>
                        <input required type="text" name="img_url" defaultValue={values.productImg}/>
                    </div>

                    <div>
                        <label htmlFor="category">Категория</label>
                        <input required type="text" name="category" defaultValue={values.category}/>
                    </div>

                    <div>
                        <label htmlFor="desc">Описание</label>
                        <textarea required name="desc" defaultValue={values.productCompound}/>
                    </div>

                    <div>
                        <label htmlFor="price">Цена</label>
                        <input required type="text" name="price" defaultValue={values.productPrice}/>
                    </div>

                    <button>Редактировать</button>
                </form>
            </div>
        </div>
    );
};

export default ModalUpdateProducts;