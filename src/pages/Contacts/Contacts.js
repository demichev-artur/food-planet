import React from 'react';
import styles from './Contacts.module.css';
import icon from '../../access/images/contact_us_image.jpg';

const Contacts = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h1>Поддержка:</h1>
                </div>
                <div className={styles.block}>
                    <div className={styles.image}>
                        <img className={styles.image_img} src={icon} alt=""/>
                    </div>
                    <div className={styles.form}>
                        <p>Мы рады ответить на все ваши интересующие вопросы:</p>

                        <form action="" className={styles.message_blank}>
                            <h2>Форма обратной связи</h2>
                            <label htmlFor="">
                                <p>Укажите Ваше имя:</p>
                                <input type="text" placeholder="Иван"/>
                            </label>
                            <label htmlFor="">
                                <p>Укажите Ваш номер:</p>
                                <input type="text" placeholder="+996(555)010203"/>
                            </label>


                            <button className={styles.btn}>Запросить обратный звонок</button>
                        </form>
                    </div>
                </div>

                <div className={styles.title}>
                    <h1>Наш адрес:</h1>
                </div>

                <div className={styles.block}>
                    <div className={styles.information}>
                        <h2>Наши номера:</h2>
                        <p>
                            +996 (500) 405 988 <br/>
                            +996 (505) 405 988
                        </p>
                        <h2>Наша почта:</h2>
                        <p>
                            <a href="mailto:food-planet@gmail.com">food-planet@gmail.com</a>
                        </p>
                        <h2>График работы:</h2>
                        <p>
                            Пн - Вс 10:00 - 20:00
                        </p>
                        <h2>Мы в социальных сетях:</h2>
                        <span>
                            <img src="https://www.istore.kg/static/img/facebook.svg" alt=""/>
                            <img src="https://www.istore.kg/static/img/instagram.svg" alt=""/>
                        </span>
                    </div>
                    <div className={styles.map}>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A2f01521c7162834b254987c30f9996d19bdf853fb22c2efdb936194b877995ab&amp;source=constructor"
                            width="500" height="500" frameBorder="0"/>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Contacts;