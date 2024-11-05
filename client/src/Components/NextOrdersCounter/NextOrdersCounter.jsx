'use client'
import React, { useState, useEffect } from 'react';
import style from "./NextOrdersCounter.module.css"
import { useAppSelector, useAppDispatch } from '@/redux/reduxHooks';
import { fetchDateCounter } from '@/redux/reduxSlice/dateCounter/dateCounterSlice';
import calculateTimeMissing from "@/helper/calculateTimeMissing";

const NextOrdersCounter = () => {

  const [ activeTab, setActiveTab ] = useState({tabNumber: 0, value: "" })

  const [loading, setLoading] = useState(false);

  
  const targetDates = useAppSelector((state)=> state.datesCounter.dates)
  const statusTargetDates = useAppSelector((state)=> state.datesCounter.status)
  
  const [timeLeft, setTimeLeft] = useState(targetDates[0])

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (statusTargetDates === 'idle') {
      setLoading(true);
      dispatch(fetchDateCounter());
    }
    
 
    if (targetDates.length > 0 && activeTab.tabNumber === 0) {
      setActiveTab({ tabNumber: 1, value: targetDates[0].dateBrand });
    }
  }, [statusTargetDates, dispatch, targetDates, activeTab.tabNumber]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (targetDates.length > 0) {
        setLoading(false);
        const targetIndex = activeTab.value === "Amazon" ? 1 : 0;
        const remainingTime = targetDates[0].dateBrand === "default" ? targetDates[0] : calculateTimeMissing(targetDates[targetIndex].date);
        setTimeLeft(remainingTime);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDates, activeTab.value]);


const handleTabClick = (tabNumber, value) => {
  setActiveTab({tabNumber:tabNumber, value: value})
  setLoading(true)
  }

  return (
    <div className='flex flex-col justify-center items-center mt-16'>
      <div className={style.tittle}>
        <h4>Proximo pedido</h4>
      </div>
      <div className={style.subtittle}>
        <p>El tiempo se agota y el contador avanza. Asegura tus productos antes de que sea demasiado tarde. Cuando el contador llegue a cero, cerraremos los pedidos y tendrás que esperar hasta que volvamos a abrir. ¡No te quedes sin tus favoritos! </p>
      </div>
      <div className={style.pestañaContainer}>
                <button className={`${style.pestaña} ${activeTab.tabNumber === 1 ?  style.active : "" }`} onClick={()=> handleTabClick(1, "Shein")} type="button">Shein</button>
                <button className={`${style.pestaña} ${activeTab.tabNumber === 2 ?  style.active : "" }`} onClick={()=> handleTabClick(2, "Amazon")} type="button">Amazon</button>
                {loading ? 
                <div className={style.spinnerContainer}>
                  <div className={style.spinner}></div>
                </div>
                : ""}
            </div>
            <div className={`${style.containerAccountant} flex justify-center items-center mt-16 gap-4`}>
              <div>
                <span>Días</span>
                <p>{timeLeft.days}</p>
              </div>
              <div>
                <span>Horas</span>
                <p>{timeLeft.hours}</p>
              </div>
              <div>
                <span>Minutos</span>
                <p>{timeLeft.minutes}</p>
              </div>
              <div>
                <span>Segundos</span>
                <p>{timeLeft.seconds}</p>
              </div>
            </div>
    </div>
  );
}

export default NextOrdersCounter;
