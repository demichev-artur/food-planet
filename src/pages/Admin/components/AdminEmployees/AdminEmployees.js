import React, {useEffect, useState} from 'react';
import styles from './AdminEmployees.module.css';
import ModalAddEmployees from "./components/ModalAddEmployees/ModalAddEmployees";
import toast from "react-hot-toast";
import ModalUpdateEmployees from "./components/ModalUpdateEmployees/ModalUpdateEmployees";


const AdminEmployees = () => {
    const [employees, setEmployees] = useState([]);
    const [modalActiveCreate, setModalActiveCreate] = useState(false);
    const [modalActiveUpdate, setModalActiveUpdate] = useState(false);
    const [id, setId] = useState(1);

    const deleteEmployee = (e) => {
        if (window.confirm('Вы действительно хотите удалить?')) {
            const id = e.target.name;
            const url = 'http://localhost:3001/employees/' + id;

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
            window.location.reload();
        }

    }

    const updateEmployee = (e) => {
        setModalActiveUpdate(true);
        setId(e.target.name);
    }

    useEffect(() => {
        fetch(`http://localhost:3001/employees`)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    toast.error('Произошла ошибка загрузки данных: ' + response.status);

                }
            })
            .then(data => setEmployees(data))
    }, []);

    const cards = employees.map(item => (
        <div className={styles.card} key={item.id}>
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
                <button className={styles.btn_update} name={item.id} onClick={updateEmployee}>Редактировать</button>
                <button className={styles.btn_delete} name={item.id} onClick={deleteEmployee}>Удалить</button>
            </div>

        </div>
    ));

    return (
        <>
            <div className={styles.container}>
                <div className={styles.btn}>
                    <button onClick={() => setModalActiveCreate(true)}>Добавить сотрудника</button>
                </div>
                {cards}
            </div>
            <ModalAddEmployees active={modalActiveCreate} setActive={setModalActiveCreate}/>
            <ModalUpdateEmployees active={modalActiveUpdate} setActive={setModalActiveUpdate} id={id}/>
        </>
    );
};

export default AdminEmployees;