import React, {useEffect, useState} from 'react';
import styles from "../../Admin.module.css";

const AdminReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/reviews`)
            .then(response => {
                if (response.status === 200){
                    return response.json();
                } else {

                }
            })
            .then(data => setReviews(data))
    }, []);

    let tableItems = reviews.map( item => (
        <div className={styles.table_item}>
            <div>
                {item.userName}
            </div>
            <div>
                {item.review}
            </div>
            <div>
                <button>Удалить отзыв</button>
            </div>
        </div>))

    return (
        <div className={styles.table}>
            <div className={styles.btn}>
                <div className={styles.inputs}>
                    <input id="userName" type="text" placeholder="Имя:"/>
                    <input id="userProfileImg" type="text" placeholder="Ссылка фото профиля:"/>
                    <input id="review" type="text" placeholder="Отзыв"/>
                    <input id="reviewDate" type="text" placeholder="Дата публикации"/>
                </div>

                <button>Добавить отзыв</button>
            </div>
            <div className={styles.table_item}>
                <div>Имя пользователя</div>
                <div>Отзыв</div>
                <div>Действия</div>
            </div>
            {tableItems}
        </div>
    );
};

export default AdminReviews;