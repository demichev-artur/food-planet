import React, {useEffect, useState} from 'react';
import styles from './AdminEmployees.module.css';

const AdminEmployees = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/employees`)
            .then(response => {
                if (response.status === 200){
                    return response.json();
                } else {

                }
            })
            .then(data => setEmployees(data))
    }, []);

    const cards = employees.map( item => (
        <div className={styles.card}>
            <h4 className={styles.title}>{item.name}</h4>
            <div>
                <div className={styles.image}>
                    <img src={item.img} alt=""/>
                </div>
                <div className={styles.info}>
                    <h5>Должность: <span>{item.position}</span></h5>
                    <h5>Дата рождения: <span>{item.birthday}</span></h5>
                    <h5>Номер телефона: <span>{item.phone}</span></h5>
                </div>
            </div>

            <div className={styles.buttons}>
                <button className={styles.btn_update}>Редактировать</button>
                <button className={styles.btn_delete}>Удалить</button>
            </div>

        </div>
    ))

    return (
        <div className={styles.container}>
            <div className={styles.btn}>
                <button>Добавить сотрудника</button>
            </div>
            {cards}
        </div>

    );
};

export default AdminEmployees;