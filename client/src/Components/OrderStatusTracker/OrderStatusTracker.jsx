'use client'
import style from "./OrderStatusTracker.module.css"
import { IoInformationCircleOutline } from 'react-icons/io5'
import React, { useState } from 'react';

const OrderStatusTracker = ()=>{

    const [ activeTab, setActiveTab ] = useState({tabNumber: 0, value: "" })

    const handleTabClick = (tabNumber, value) => {
        setActiveTab({tabNumber:tabNumber, value: value})
    }

    return(
        <div className="flex flex-col justify-center items-center mt-24">
            <div className={style.tittle}>
                <h2>Rastreos</h2>
            </div>
            <div className={style.text}>
                <p>Nuestro servicio de rastreo te ofrece tranquilidad y confianza, permitiéndote seguir tu pedido de manera eficiente. Espera con emoción, porque tu compra está en camino y llegará antes de lo que imaginas. ¡Estamos aquí para asegurarnos de que la espera valga la pena!</p>
            </div>
            <div className={style.pestañaContainer}>
                <button className={`${style.pestaña} ${activeTab.tabNumber === 1 ?  style.active : "" }`} onClick={()=> handleTabClick(1, "Shein")} type="button">Shein</button>
                <button className={`${style.pestaña} ${activeTab.tabNumber === 2 ?  style.active : "" }`} onClick={()=> handleTabClick(2, "Amazon")} type="button">Amazon</button>
            </div>
            <div className={style.containerForm}>
                <form className={style.form} action="">
                    <div className={style.spanIcon}>
                        <span>Precio del Producto</span>
                        <span className={style.infoIcon}><IoInformationCircleOutline size={17} color="blue" /></span>
                    </div>
                        <input placeholder="dd/mm/yyyy" type="text" />
                    <div className={style.button}>
                        <button>Enviar</button>
                    </div>
                </form>
                <div>
                    <h3 className={style.requestedTitle}>Estado de tu pedido en {activeTab.value}:</h3>
                </div>
            </div>
        </div>
    )
}

export default OrderStatusTracker;