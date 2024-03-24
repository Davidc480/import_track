'use client'
import style from "./OrderStatusTracker.module.css"
import { IoInformationCircleOutline } from 'react-icons/io5'
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import checkDayFifteen from "@/helper/checkDayFifteen";

const OrderStatusTracker = ()=>{

    const [ activeTab, setActiveTab ] = useState({tabNumber: 0, value: "" })

    const [inputValue, setInputValue] = useState("");

    const handleTabClick = (tabNumber, value) => {
        setActiveTab({tabNumber:tabNumber, value: value})
    }

    const notify = (event) => {
        event.preventDefault();
        toast('Ingresa la fecha en la que hiciste el pedido en el formato: año/mes/día (yyyy/mm/dd).', {
            id: 'unique-toast',
            duration: 5000,
            position: 'bottom-center',
            className: style.notify
        });
    };

    
    const handleChange = (event) => {
        let newValue = event.target.value;
    
        newValue = newValue.replace(/\D/g, '');
    
        if (newValue.length > 8) {
            newValue = newValue.slice(0, 8);
        }
    
        let formattedValue = '';
        for (let i = 0; i < newValue.length; i++) {
            if (i === 4 || i === 6) {
                formattedValue += '/';
            }
            formattedValue += newValue[i];
        }

        setInputValue(formattedValue);
    };
    
    
        
        console.log(inputValue);

    const handleSubmit = (event)=>{
        event.preventDefault()
        const { value }= event.target;
    }
    

    return(
        <div className="flex flex-col justify-center items-center mt-16">
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
                        <span>Fecha del pedido</span>
                        <button className={style.infoIcon} onClick={notify} ><IoInformationCircleOutline size={17} color="blue" /></button>
                        <Toaster />
                    </div>
                        <input placeholder="yyyy/dd/mm" type="text" onChange={handleChange} value={inputValue} />
                    <div className={style.button}>
                        <button onClick={handleSubmit} >Enviar</button>
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