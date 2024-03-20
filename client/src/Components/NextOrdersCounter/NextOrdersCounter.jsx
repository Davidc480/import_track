'use client'
import React, { useState, useEffect } from 'react';
import style from "./NextOrdersCounter.module.css"

const NextOrdersCounter = () => {

  const [ activeTab, setActiveTab ] = useState({tabNumber: 0, value: "" })
  
  const fechaObjetivo = activeTab.tabNumber <= 1 ? new Date(2024, 5, 1, 12) : new Date(2024, 4, 1, 10); // Ejemplo: 1 de julio de 2024 a las 12:00 PM
  
  const [ tiempoRestante, setTiempoRestante ] = useState(calcularTiempoRestante());

  const [ tittleOrderClose, setTittleOrderClose ] = useState("")

  useEffect(() => {
   
      setTiempoRestante(calcularTiempoRestante());
    
  }, [activeTab]);

  useEffect(()=>{
    if(!tiempoRestante.statusOrder){
      setTittleOrderClose("El pedido está cerrado actualmente. Mantente al tanto de nuestras redes sociales para la próxima fecha disponible.")
    } else {
      setTittleOrderClose("")
    }

  }, [tiempoRestante])


  function calcularTiempoRestante() {
    const ahora = new Date();
    const diferencia = fechaObjetivo - ahora;
    
    if (diferencia <= 0) {
      return { dias: 0, horas: 0, minutos: 0, segundos: 0};
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    return { dias, horas, minutos, segundos,};
  }

  

  const handleTabClick = (tabNumber, value) => {
      setActiveTab({tabNumber:tabNumber, value: value})
  }

  return (
    <div className='flex flex-col justify-center items-center mt-16'>
      <div className={style.tittle}>
        <h4>Proximo pedido</h4>
      </div>
      <div className={style.pestañaContainer}>
                <button className={`${style.pestaña} ${activeTab.tabNumber === 1 ?  style.active : "" }`} onClick={()=> handleTabClick(1, "Shein")} type="button">Shein</button>
                <button className={`${style.pestaña} ${activeTab.tabNumber === 2 ?  style.active : "" }`} onClick={()=> handleTabClick(2, "Amazon")} type="button">Amazon</button>
            </div>
            <div className={`${style.containerAccountant} flex justify-center items-center mt-16 gap-4`}>
              <div>
                <span>Días</span>
                <p>{tiempoRestante.dias}</p>
              </div>
              <div>
                <span>Horas</span>
                <p>{tiempoRestante.horas}</p>
              </div>
              <div>
                <span>Minutos</span>
                <p>{tiempoRestante.minutos}</p>
              </div>
              <div>
                <span>Segundos</span>
                <p>{tiempoRestante.segundos}</p>
              </div>
            </div>
    </div>
  );
}

export default NextOrdersCounter;
