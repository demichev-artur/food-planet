import React from 'react';
import styles from './MenuNew.module.css';
import burgerOne from '../../access/images/Tofu-Burger-1.png';
import burgerTwo from '../../access/images/Tofu-Burger-2.png';
import burgerTree from '../../access/images/Tofu-Burger-3.png';
import burgerFour from '../../access/images/Tofu-Burger-4.png';
import plus from '../../access/icons/plusIcon.svg';
import minus from '../../access/icons/minusIcon.svg';

const MenuNew = () => {
    return (
        <div className={styles.menu_new}>
            <div className={styles.menu_new_nav}>
                <h1>Новинки</h1>

                <ul>
                    <li>Пицца</li>
                    <li>Бургер</li>
                    <li>Суши</li>
                    <li>Роллы</li>
                    <li>Салаты</li>
                    <li>Десерты</li>
                    <li>Напитки</li>
                </ul>
            </div>

            <div className={styles.menu_new_content}>
                <div className={styles.card}>
                    <div>
                        <img src={burgerOne} alt=""/>
                    </div>

                    <h2>Чизбургер</h2>
                    <p>Булка, котлета,сыр,  соленый огурец, лук, помидор,
                        салат айсберг,
                        соус чесночный, соус гриль,
                        кетчуп, майонез</p>
                    <h3 className={styles.menu_new_price}>200 сом</h3>

                    <div className={styles.product_count}>
                        <button><img src={minus} alt=""/></button>
                        <span>1</span>
                        <button><img src={plus} alt=""/></button>
                    </div>

                    <button>В корзину</button>
                </div>
                <div className={styles.card}>
                    <div>
                        <img src={burgerTwo} alt=""/>

                    </div>
                    <h2>Чизбургер</h2>
                    <p>Булка, котлета,сыр,  соленый огурец, лук, помидор,
                        салат айсберг,
                        соус чесночный, соус гриль,
                        кетчуп, майонез</p>
                    <h3 className={styles.menu_new_price}>200 сом</h3>

                    <div className={styles.product_count}>
                        <button><img src={minus} alt=""/></button>
                        <span>1</span>
                        <button><img src={plus} alt=""/></button>
                    </div>
                    <button>В корзину</button>


                </div>
                <div className={styles.card}>
                    <div>
                        <img src={burgerTree} alt=""/>

                    </div>
                    <h2>Чизбургер</h2>
                    <p>Булка, котлета,сыр,  соленый огурец, лук, помидор,
                        салат айсберг,
                        соус чесночный, соус гриль,
                        кетчуп, майонез</p>
                    <h3 className={styles.menu_new_price}>200 сом</h3>

                    <div className={styles.product_count}>
                        <button><img src={minus} alt=""/></button>
                        <span>1</span>
                        <button><img src={plus} alt=""/></button>
                    </div>

                    <button>В корзину</button>


                </div>
                <div className={styles.card}>
                    <div>
                        <img src={burgerFour} alt=""/>
                    </div>

                    <h2>Чизбургер</h2>
                    <p>Булка, котлета,сыр,  соленый огурец, лук, помидор,
                        салат айсберг,
                        соус чесночный, соус гриль,
                        кетчуп, майонез</p>
                    <h3 className={styles.menu_new_price}>200 сом</h3>

                    <div className={styles.product_count}>
                        <button><img src={minus} alt=""/></button>
                        <span>1</span>
                        <button><img src={plus} alt=""/></button>
                    </div>

                    <button>В корзину</button>


                </div>
            </div>

        </div>
    );
};

export default MenuNew;