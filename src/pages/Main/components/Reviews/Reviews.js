import React from 'react';
import styles from './Reviews.module.css';
import penIconLeft from '../../../../access/icons/penLeftIcon.svg';
import penIconRight from '../../../../access/icons/penRightIcon.svg';

const Reviews = () => {
    return (
        <section>
            <div className={styles.reviews}>

                <h1>Отзывы</h1>
                <div className={styles.content}>
                    <div>
                        <img className={styles.pen} src={penIconLeft} alt=""/>
                        <div className={styles.img_block}>
                            <img src="https://avatanplus.com/files/resources/original/5aa3f25827c87162106aa863.png" alt=""/>
                        </div>

                        <h3 className={styles.name}>Сергей <img src={penIconRight} alt=""/></h3>
                        <p>Большое спасибо! 5 пицц доставили даже быстрее чем планировалось. Пицца была горячая и всему
                            коллективу понравилась! День Рождения прошел отлично! :)</p>
                        <span>02.07.2020</span>
                    </div>
                    <div>
                        <img className={styles.pen} src={penIconLeft} alt=""/>
                        <div className={styles.img_block}>
                            <img src="https://avatanplus.com/files/resources/original/5aa3f25827c87162106aa863.png" alt=""/>
                        </div>

                        <h3 className={styles.name}>Сергей <img src={penIconRight} alt=""/></h3>
                        <p>Очень вкусные роллы Хаки, всем рекомендую! заказали в первый раз и теперь станем постоянными клиентами! Спасибо!</p>
                        <span>02.07.2020</span>
                    </div>
                    <div>
                        <img className={styles.pen} src={penIconLeft} alt=""/>
                        <div className={styles.img_block}>
                            <img src="https://avatanplus.com/files/resources/original/5aa3f25827c87162106aa863.png" alt=""/>
                        </div>

                        <h3 className={styles.name}>Сергей <img src={penIconRight} alt=""/></h3>
                        <p>Очень избирателен в еде, и Уже в третий раз не разочаровываюсь в Food Planet, советую всем! Жена тоже довольна!</p>
                        <span>02.07.2020</span>
                    </div>
                    <div>
                        <img className={styles.pen} src={penIconLeft} alt=""/>
                        <div className={styles.img_block}>
                            <img src="https://avatanplus.com/files/resources/original/5aa3f25827c87162106aa863.png" alt=""/>
                        </div>

                        <h3 className={styles.name}>Сергей <img src={penIconRight} alt=""/></h3>
                        <p>Хочу поблагодарить за бургер !Очень вкусненький в меру остренький)
                            Спасибо,удивили!)</p>
                        <span>02.07.2020</span>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Reviews;