import React, {useEffect, useState} from 'react';
import styles from './AdminMain.module.css';

const AdminMain = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/category`)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    return [{}];
                }
            })
            .then(data => setCategory(data))
    }, []);

    const cards = category.map( (item, i) => (
        <div key={i} className={styles.card}>
            <h2>{Object.values(item)}</h2>
            <span>0</span>
        </div>
    ));

    return (
        <div className={styles.container}>
            {cards}
        </div>
    );
};

export default AdminMain;