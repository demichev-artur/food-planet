import React, {useEffect, useState} from 'react';
import styles from './AdminContacts.module.css';
import toast from "react-hot-toast";

const AdminContacts = () => {
    const [contacts, setContacts] = useState([]);

    const listDelete = (e) => {
        if (window.confirm('Вы действительно хотите удалить?')) {
            const url = 'http://localhost:3001/support';

            const options = {
                method: 'DELETE'
            }

            fetch(url, options)
                .then(response => {
                    if (response.ok) {
                        toast.success('Успешно удалено');
                    } else {
                        toast.error('Какая-то ошибка.. Статус: ' + response.status);
                    }
                })

        }
    }

    useEffect(() => {
        fetch(`http://localhost:3001/support`)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    return [];
                }
            })
            .then(data => setContacts(data))
    }, []);

    let tableItems = contacts.map(item => (
        <div key={item.id} className={styles.table_item}>
            <div>{item.name}</div>
            <div>{item.phone}</div>
            <div>
                <button><a href={`tel:${item.phone}`}>Позвонить</a></button>
            </div>
        </div>));

    return (
        <div className={styles.container}>
            <div className={styles.table}>
                <div className={styles.btn}>
                    <button onClick={listDelete}>Очистить список</button>
                </div>
                <div className={styles.table_item}>
                    <div>Имя пользователя</div>
                    <div>Номер</div>
                    <div>Действия</div>
                </div>
                {tableItems}
            </div>
        </div>
    );
};

export default AdminContacts;