import React from 'react';
import styles from './AdminMain.module.css';

const AdminMain = () => {
    const arr = ["Пицца", "Бургер", "Суши", "Роллы", "Салаты", "Десерты", "Напитки", "Роллы"];

    const cards = arr.map( item => (
        <div className={styles.card}>
            <h2>{item}</h2>
            <span>0</span>
        </div>
    ))
    return (
        <div className={styles.container}>
            {cards}
        </div>
    );
};

export default AdminMain;