import React, {useEffect, useState} from 'react';
import styles from './Admin.module.css';
import logo from '../../access/icons/logoAdmin.svg';
import listIcon1 from '../../access/icons/sidebar/list/1. overview.svg';
import listIcon2 from '../../access/icons/sidebar/list/2. tickets.svg';
import listIcon3 from '../../access/icons/sidebar/list/3. ideas.svg';
import listIcon4 from '../../access/icons/sidebar/list/4. contacts.svg';
import listIcon5 from '../../access/icons/sidebar/list/5. agents.svg';
import listIcon6 from '../../access/icons/sidebar/list/6. articles.svg';
import notifiIcon from '../../access/icons/new.svg';
import searchIcon from '../../access/icons/search.svg';
import photo from '../../access/icons/photo.png';

const saveData = () => {
    const [userName, setUserName] = useState(null);
    const [userProfileImg, setUserProfileImg] = useState(null);
    const [review, setReview] = useState(null);
    const [reviewDate, setReviewDate] = useState(null);

    const getValue = (e) => {
        if(e.currentTarget.id === 'name'){
            setName(e.currentTarget.value);
        } else if(e.currentTarget.id === 'img_url'){
            setImgUrl(e.currentTarget.value);
        } else if(e.currentTarget.id === 'price'){
            setPrice(e.currentTarget.value);
        } else if(e.currentTarget.id === 'desc'){
            setDesc(e.currentTarget.value);
        } else if(e.currentTarget.id === 'category'){
            setCategory(e.currentTarget.value);
        }
    }

    const data = {
        userName,
        userProfileImg,
        review,
        reviewDate
    }
    let url = 'http://localhost:3001/reviews';


    const options = {
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    }

    fetch(url, options)
        .then(response => {
            if (response.ok){
                toast.success('Товар успешно добавлен');
            } else {
                toast.error('Что-то произошло.. Статус ошибки:' + response.status);
            }
        })
}

const Admin = () => {
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
        </div>
    ))

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.logo}>
                    <img src={logo} alt=""/>
                    <p>FOOD PLANET</p>
                </div>
                <ul>
                    <li><img src={listIcon1} alt=""/>Главная</li>
                    <li><img src={listIcon2} alt=""/>Заказы</li>
                    <li><img src={listIcon3} alt=""/>Меню</li>
                    <li><img src={listIcon4} alt=""/>Контакты</li>
                    <li><img src={listIcon5} alt=""/>Отзывы</li>
                    <li><img src={listIcon6} alt=""/>Сотрудники</li>
                </ul>
            </div>
            <div className={styles.content_own}>
                <div className={styles.header}>
                    <h1>Главная</h1>
                    <div className={styles.profile}>
                        <div className={styles.icons}>
                            <button><img src={searchIcon} alt=""/></button>
                            <button><img src={notifiIcon} alt=""/></button>
                        </div>

                        <p>
                            Jones Ferdinand
                        </p>
                        <img src={photo} alt=""/>

                    </div>
                </div>
                <div className={styles.content}>


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
                </div>
            </div>

        </div>


    );
};

export default Admin;