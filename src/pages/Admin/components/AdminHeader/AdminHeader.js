import React from 'react';
import styles from "./AdminHeader.module.css";
import searchIcon from "../../../../access/icons/search.svg";
import notifiIcon from "../../../../access/icons/new.svg";
import photo from "../../../../access/icons/photo.png";

const AdminHeader = (props) => {
    
    return (
        <div className={styles.header}>
            <h1>{props.title}</h1>

            <div className={styles.profile}>
                <div className={styles.icons}>
                    <button><img src={searchIcon} alt=""/></button>
                    <button><img src={notifiIcon} alt=""/></button>
                </div>

                <p>Jones Ferdinand</p>

                <img src={photo} alt=""/>
            </div>
        </div>
    );
};

export default AdminHeader;