import React, {useEffect, useState} from 'react';
import styles from "../ModalAddEmployees/ModalAddEmployees.module.css";
import toast from "react-hot-toast";

const ModalUpdateEmployees = ({active, setActive, id}) => {
    const [values, setValues] = useState({});

    const getEmployeeById = () => {

        const url = 'http://localhost:3001/employees/' + id;

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    toast.error('При получении данных произошла ошибка');
                }
            })
            .then(data => setValues(data));

    }

    const updateEmployee = (e) => {
        const data = {
            name: e.currentTarget.name.value,
            birthday: e.currentTarget.birthday.value,
            img: e.currentTarget.img_url.value,
            position: e.currentTarget.position.value,
            phone: e.currentTarget.phone.value
        }

        const options = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        const url = 'http://localhost:3001/employees/' + id;

        fetch(url, options)
            .then(response => {
                if (response.ok) {
                    toast.success('Данные сотрудника успешно изменены');
                } else {
                    toast.error('Ошибка редактирования')
                }
            })

        setActive(false);
    }
    useEffect(getEmployeeById, [id]);

    return (
        <div className={active ? styles.modal_active : styles.modal}>
            <div className={styles.modal_content}>
                <img className={styles.close_icon} src="https://cdn-icons-png.flaticon.com/512/70/70091.png" alt=""
                     onClick={() => setActive(false)}/>
                <h2>Редактирование сотрудника</h2>
                <form onSubmit={updateEmployee} action="javascript:void(0)">
                    <div>
                        <label htmlFor="name">ФИО</label>
                        <input required type="text" name="name" defaultValue={values.name}/>
                    </div>

                    <div>
                        <label htmlFor="img_url">Адрес изображения</label>
                        <input required type="text" name="img_url" defaultValue={values.img}/>
                    </div>

                    <div>
                        <label htmlFor="position">Должность</label>
                        <input required type="text" name="position" defaultValue={values.position}/>
                    </div>

                    <div>
                        <label htmlFor="birthday">Дата рождения</label>
                        <input type="text" name="birthday" defaultValue={values.birthday}/>
                    </div>

                    <div>
                        <label htmlFor="phone">Номер телефона</label>
                        <input type="text" name="phone" defaultValue={values.phone}/>
                    </div>

                    <button type="submit">Редактировать</button>
                </form>
            </div>
        </div>
    );
};

export default ModalUpdateEmployees;