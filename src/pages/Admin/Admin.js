import React, {useEffect, useState} from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import styles from './Admin.module.css';
import notifiIcon from '../../access/icons/new.svg';
import searchIcon from '../../access/icons/search.svg';
import photo from '../../access/icons/photo.png';
import AdminSidebar from "./components/AdminSidebar/AdminSidebar";

const Admin = () => {
    const title = document.querySelectorAll('a');
    console.log(title);

    return (

        <div className={styles.container}>
            {<AdminSidebar/>}
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
                    <Outlet/>
                </div>
            </div>
        </div>

    );
};

export default Admin;