import React from 'react';
import styles from './HeaderContent.module.css';
import burgerImg from '../../access/images/header_content_burger.svg';
import arrowRightWhite from '../../access/icons/arrowRightWhite.svg';


const HeaderContent = () => {
    return (
        <section>
            <div className={styles.content}>

                <div>
                    <h1>Доставка вкусной еды до 30 минут + напиток в подарок!</h1>
                    <p>Доставим заказ вовремя и можете рассчитывать, что еда будет доставлен всегда горячим и ароматным.</p>
                    <button>Перейти в меню <img src={arrowRightWhite} alt=""/></button>
                </div>

                <img src={burgerImg} alt=""/>
            </div>
        </section>
    );
};

export default HeaderContent;