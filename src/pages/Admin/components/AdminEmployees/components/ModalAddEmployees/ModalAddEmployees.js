import React from 'react';
import {toast} from "react-hot-toast";
import styles from './ModalAddEmployees.module.css';

const ModalAddEmployees = ({active, setActive}) => {
    const addEmployees = (e) => {
        const data = {
            name: e.currentTarget.name.value,
            birthday: e.currentTarget.birthday.value,
            img: e.currentTarget.img_url.value,
            position: e.currentTarget.position.value,
            phone: e.currentTarget.phone.value

        }
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        const url = 'http://localhost:3001/employees';

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
                <h2>Добавление сотрудника</h2>
                <form onSubmit={addEmployees} action="javascript:void(0)">
                    <div>
                        <label htmlFor="name">ФИО</label>
                        <input required type="text" name="name"/>
                    </div>

                    <div>
                        <label htmlFor="img_url">Адрес изображения</label>
                        <input required type="text" name="img_url"/>
                    </div>

                    <div>
                        <label htmlFor="position">Должность</label>
                        <input required type="text" name="position"/>
                    </div>

                    <div>
                        <label htmlFor="birthday">Дата рождения</label>
                        <input type="text" name="birthday"/>
                    </div>

                    <div>
                        <label htmlFor="phone">Номер телефона</label>
                        <input type="text" name="phone"/>
                    </div>

                    <button>Добавить</button>
                </form>
            </div>
        </div>
    );
};

export default ModalAddEmployees;