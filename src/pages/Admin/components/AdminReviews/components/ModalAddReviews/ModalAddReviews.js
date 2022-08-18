import React from 'react';
import styles from './ModalAddReviews.module.css';
import {toast} from "react-hot-toast";

const ModalAddReviews = ({active, setActive}) => {

    const addReview = (e) => {
        const data = {
            userName: e.currentTarget.name.value,
            userProfileImg: e.currentTarget.img_url.value,
            review: e.currentTarget.comment.value,
            reviewDate: e.currentTarget.datePost.value
        }
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        const url = 'http://localhost:3001/reviews';

        fetch(url, options)
            .then(response => {
                if (response.ok) {
                    toast.success('Товар успешно добавлен');
                } else {
                    toast.error('Что-то произошло.. Статус ошибки:' + response.status);
                }
            })

        setActive(false);
    }

    return (
        <div className={active ? styles.modal_active : styles.modal}>
            <div className={styles.modal_content}>
                <img className={styles.close_icon} src="https://cdn-icons-png.flaticon.com/512/70/70091.png" alt=""
                     onClick={() => setActive(false)}/>
                <h2>Добавление отзыва</h2>

                <form onSubmit={addReview} action="javascript:void(0)">
                    <div>
                        <label htmlFor="name">Имя пользователя</label>
                        <input required type="text" name="name"/>
                    </div>

                    <div>
                        <label htmlFor="img_url">Адрес изображения</label>
                        <input required type="text" name="img_url"/>
                    </div>

                    <div>
                        <label htmlFor="comment">Отзыв</label>
                        <input required type="text" name="comment"/>
                    </div>

                    <div>
                        <label htmlFor="datePost">Дата отзыва</label>
                        <input type="text" name="datePost"/>
                    </div>

                    <button>Добавить</button>
                </form>
            </div>
        </div>
    );
};

export default ModalAddReviews;