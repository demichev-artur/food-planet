import React, {useEffect, useState} from 'react';
import styles from "./AdminMenu.module.css";
import ModalAddProducts from "./components/ModalAddProducts/ModalAddProducts";
import toast from "react-hot-toast";
import ModalUpdateProducts from "./components/ModalUpdateProducts/ModalUpdateProducts";

const AdminMenu = () => {
    const [menu, setMenu] = useState([]);
    const [modalActiveCreate, setModalActiveCreate] = useState(false);
    const [modalActiveUpdate, setModalActiveUpdate] = useState(false);
    const [id, setId] = useState(1);

    const deleteProduct = (e) => {
        if (window.confirm('Вы действительно хотите удалить?')) {
            const id = e.target.id;
            const url = 'http://localhost:3001/menu/' + id;

            const options = {
                method: 'DELETE'
            }

            fetch(url, options)
                .then(response => {
                    if (response.ok) {
                        toast.success('Успешно удалено');
                    } else {
                        toast.error('Какая-то ошибка.. Статус: ' + response.status);

                    }
                })
            window.location.reload();
        }


    }

    const updateProduct = (e) => {
        setModalActiveUpdate(true);
        setId(e.target.id);
    }

    useEffect(() => {
        fetch(`http://localhost:3001/menu`)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    return [{}];
                }
            })
            .then(data => setMenu(data))
    }, []);

    let tableItems = menu.map(item => (
        <div key={item.id} className={styles.table_item}>
            <div><img src={item.productImg} alt=""/>
                <button className={styles.btn_img}><a href={item.productImg}>Посмотреть</a></button>
            </div>
            <div>{item.productName}</div>
            <div>{item.category}</div>
            <div>{item.productCompound}</div>
            <div>{item.productPrice}</div>
            <div className={styles.btn_actions}>
                <button id={item.id} onClick={deleteProduct}>Удалить</button>
                <button id={item.id} onClick={updateProduct}>Редактировать</button>
            </div>
        </div>));

    return (

        <div className={styles.container}>
            <div className={styles.table}>
                <div className={styles.btn}>
                    <button onClick={() => setModalActiveCreate(true)}>Добавить продукт</button>
                </div>
                <div className={styles.table_item}>
                    <div>Фото продукта</div>
                    <div>Наименование</div>
                    <div>Категория</div>
                    <div>Описание</div>
                    <div>Цена</div>
                    <div>Действия</div>
                </div>
                {tableItems}
            </div>
            <div className={styles.scroll}>
                <img onClick={() => {
                    var block = document.getElementById("content");
                    block.scrollTop = -9999;
                }} src="https://cdn-icons-png.flaticon.com/512/318/318426.png" alt=""/>

                <img onClick={() => {
                    var block = document.getElementById("content");
                    block.scrollTop = 9999;
                }} src="https://cdn-icons-png.flaticon.com/512/318/318426.png" alt=""/>
            </div>
            <ModalUpdateProducts active={modalActiveUpdate} setActive={setModalActiveUpdate} id={id}/>
            <ModalAddProducts active={modalActiveCreate} setActive={setModalActiveCreate}/>
        </div>


    );
};

export default AdminMenu;