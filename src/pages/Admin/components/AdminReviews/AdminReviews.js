import React, {useEffect, useState} from 'react';
import styles from "./AdminReviews.module.css";
import toast from "react-hot-toast";
import ModalAddReviews from "./components/ModalAddReviews/ModalAddReviews";

const AdminReviews = () => {
    const [modalActiveCreate, setModalActiveCreate] = useState(false);
    const [reviews, setReviews] = useState([]);

    const reviewDelete = (e) => {
        if (window.confirm('Вы действительно хотите удалить?')) {
            const id = e.target.id;
            const url = 'http://localhost:3001/reviews/' + id;

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

    let tableItems = reviews.map(item => (
        <div key={item.id} className={styles.table_item}>
            <div>{item.userName}</div>
            <div>{item.review}</div>
            <div>
                <button id={item.id} onClick={reviewDelete}>Удалить отзыв</button>
            </div>
        </div>))

    useEffect(() => {
        fetch(`http://localhost:3001/reviews`)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {

                }
            })
            .then(data => setReviews(data))
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.table}>
                <div className={styles.btn}>
                    <button onClick={()=> setModalActiveCreate(true)}>Добавить отзыв</button>
                </div>
                <div className={styles.table_item}>
                    <div>Имя пользователя</div>
                    <div>Отзыв</div>
                    <div>Действия</div>
                </div>
                {tableItems}
            </div>
            <ModalAddReviews active={modalActiveCreate} setActive={setModalActiveCreate}/>
        </div>

    );
};

export default AdminReviews;