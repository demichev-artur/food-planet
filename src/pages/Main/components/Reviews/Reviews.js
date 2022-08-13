import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './Reviews.module.css';
import penIconLeft from '../../../../access/icons/penLeftIcon.svg';
import penIconRight from '../../../../access/icons/penRightIcon.svg';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3001/reviews`)
            .then(response => {
                if (response.status === 200){
                    return response.json();
                } else {
                    navigate("/*");
                }
            })
            .then(data => setReviews(data))
    }, []);

    let cards = reviews.map( item => (
        <div key={item.id}>
            <img className={styles.pen} src={penIconLeft} alt=""/>
            <div className={styles.img_block}>
                <img src="https://avatanplus.com/files/resources/original/5aa3f25827c87162106aa863.png" alt=""/>
                <h3 className={styles.name}>{item.userName} <img src={penIconRight} alt=""/></h3>
            </div>


            <p>{item.review}</p>
            <span>{item.reviewDate}</span>
        </div>
    ));

    return (
        <section>
            <div className={styles.reviews}>

                <h1>Отзывы</h1>
                <div className={styles.content}>
                    {cards}
                </div>
            </div>
        </section>
    );
};

export default Reviews;