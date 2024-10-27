'use client'
import style from "./OrderStatusTracker.module.css"
import { IoInformationCircleOutline } from 'react-icons/io5'
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import checkDayFifteen from "@/helper/checkDayFifteen";
import { useAppDispatch, useAppSelector } from "@/redux/reduxHooks";
import { fetchDateStatus } from "@/redux/reduxSlice/dateStatus/dateStatusSlice";

const OrderStatusTracker = ()=>{

    const dispatch = useAppDispatch()

    const [ activeTab, setActiveTab ] = useState({tabNumber: 0, value: "" })

    const [inputValue, setInputValue] = useState("");

    const dateStatusInfo = useAppSelector((state) => state.dateStatus.date);
    
    const [statusDate, setStatusDate] = useState()

    const [stateButton, setStateButton] = useState(true)


    const handleTabClick = (tabNumber, value) => {
        setActiveTab({tabNumber:tabNumber, value: value})
        setStatusDate("")
    }

    useEffect(()=>{
        setStatusDate(dateStatusInfo)
        dispatch(fetchDateStatus({brand: activeTab.value}))
    }, [dateStatusInfo])

    const notify = () => {
        toast('Ingresa la fecha en la que hiciste el pedido en el formato: año/mes/día (yyyy/mm/dd).', {
            id: 'unique-toast',
            duration: 5000,
            position: 'bottom-center',
            className: style.notify
        });
    };

    
    const handleChange = (event) => {
        event.preventDefault()
        setInputValue(formattedValue);
    };  
    
    const handleSubmit = (event)=>{
        event.preventDefault()
        const dateId = checkDayFifteen(inputValue)
        setInputValue("")
        const brand = activeTab.value
        const data = { id: dateId, brand: brand  };
        dispatch(fetchDateStatus(data));
        setActiveTab((state)=>({...state, tabNumber: 0}))
        setStateButton(true)
    }


    if(inputValue.length === 10 && activeTab.value !== "" && stateButton){
        setStateButton(false)
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
                <form className={style.form} action="" onSubmit={handleSubmit}>
                    <div className={style.spanIcon}>
                        <span>Fecha del pedido</span>
                        <button className={style.infoIcon} type="button" onClick={notify} ><IoInformationCircleOutline size={17} color="blue" /></button>
                    </div>
                        <select placeholder="Selecciona una fecha" id="miSelector" value={inputValue} onChange={handleSubmit}>
                            <option value={"value"}> Selecciona una fecha</option>
                            <option value={"value"}> seleccciona 2</option>
                            </select>
                </form>
                        <Toaster />
                <div>
                    <h3 className={style.requestedTitle}>Estado de tu pedido en {activeTab.value}:</h3>
                </div>
                <div className={statusDate === "" ? "" : style.statusDate}>
                    <p>{statusDate}</p>
                </div>
            </div>
        </div>
    )
}

export default OrderStatusTracker;