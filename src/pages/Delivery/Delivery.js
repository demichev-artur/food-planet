import React from 'react';
import styles from './Delivery.module.css';
import image from '../../access/images/devilery_image.png';
import imageTwo from '../../access/images/del.png';
import imageTree from '../../access/images/del1.png';
const Delivery = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.block}>
                    <div>
                        <h1>Доставка вкусной еды до 30 минут + напиток в подарок!</h1>
                        <button>Оформить доставку</button>
                    </div>

                    <div className={styles.image}>
                        <img className={styles.image_img} src={image} alt=""/>
                    </div>
                </div>
                <div className={styles.del}>
                    <h2>Как работает доставка</h2>
                    <img src={imageTwo} alt=""/>
                    <h2>Доставка в самые короткие сроки</h2>
                    <img src={imageTree} alt=""/>
                </div>

            </div>
        </div>
    );
};

export default Delivery;