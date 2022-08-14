import React from 'react';
import styles from './Menu.module.css';
import MenuProducts from "../../components/MenuProducts/MenuProducts";

const Menu = () => {


    return (
        <section>
            <div className={styles.content}>
                <MenuProducts/>
            </div>
        </section>

    );
};

export default Menu;