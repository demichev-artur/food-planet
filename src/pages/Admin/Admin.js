import React from 'react';
import {Outlet} from 'react-router-dom';
import styles from './Admin.module.css';
import AdminSidebar from "./components/AdminSidebar/AdminSidebar";
import AdminHeader from "./components/AdminHeader/AdminHeader";

const Admin = (props) => {

    return (
        <div className={styles.container}>
           <AdminSidebar setTitle={props.setTitle}/>

            <div className={styles.container_child}>

               <AdminHeader title={props.title}/>

                <div className={styles.content}>
                    <Outlet/>
                </div>

            </div>
        </div>

    );
};

export default Admin;