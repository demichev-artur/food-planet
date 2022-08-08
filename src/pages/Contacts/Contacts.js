import React from 'react';
import styles from './Contacts.module.css';

const Contacts = () => {
    return (

        <div className={styles.content}>
            <div className={styles.map}>
                Здесь будет карта
            </div>
            <div>
                <h1>Контакты</h1>
            </div>
            <div className={styles.form}>
                <p>Мы рады ответить на все ваши интересующие вопросы</p>
                <h3>Форма обратной связи</h3>
                <form action="">
                    <input type="text" placeholder="Ваше имя"/>
                    <input type="text" placeholder="Укажите свой адрес"/>
                    <input type="text" placeholder="Тема обращения"/>
                    <textarea placeholder="Ваше сообщение"/>
                </form>
            </div>
        </div>

    );
};

export default Contacts;