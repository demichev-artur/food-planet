import React from 'react';
import {Outlet} from 'react-router-dom';
import styles from './Admin.module.css';
import AdminSidebar from "./components/AdminSidebar/AdminSidebar";
import AdminHeader from "./components/AdminHeader/AdminHeader";

const Admin = () => {

    return (
        <div className={styles.container}>
           <AdminSidebar/>
            <div className={styles.content_own}>
               <AdminHeader/>
                <div className={styles.content}>
                    <Outlet/>
                </div>
            </div>
        </div>

    );
};

export default Admin;