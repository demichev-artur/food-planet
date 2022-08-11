import React from 'react';
import styles from "../../Admin.module.css";
import searchIcon from "../../../../access/icons/search.svg";
import notifiIcon from "../../../../access/icons/new.svg";
import photo from "../../../../access/icons/photo.png";

const AdminHeader = () => {
    return (
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
    );
};

export default AdminHeader;