import React from 'react';
import styles from './Benefits.module.css';
import one from '../../../../access/icons/deliveryIcon.svg';
import two from '../../../../access/icons/freshProductsIcon.svg';
import tree from '../../../../access/icons/menuIcon.svg';
import four from '../../../../access/icons/locationIcon.svg';

const Benefits = () => {
    return (
        <section>
            <div className={styles.benefits}>

                <h1>Почему выбирают нас:</h1>
                <div className={styles.content}>
                    <div>
                        <img src={one} alt=""/>
                        <h2>Мгновенная доставка</h2>
                        <p>Доставим заказанную вами
                            еду за 30 минут + напиток в подарок</p>
                    </div>
                    <div>
                        <img src={two} alt=""/>
                        <h2>Свежие продукты</h2>
                        <p>Вся продукция хранится в хороших условиях тем самым продливая срок хранения</p>
                    </div>
                    <div>
                        <img src={tree} alt=""/>
                        <h2>Уникальное меню</h2>
                        <p>Ежедневно мы обновляем наше
                            меню и том числе коктейльное</p>
                    </div>
                    <div>
                        <img src={four} alt=""/>
                        <h2>Доставка</h2>
                        <p>Мы быстро доставляем вашу еду по указанному адресу</p>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default Benefits;