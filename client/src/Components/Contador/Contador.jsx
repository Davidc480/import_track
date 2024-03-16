'use client'
import React, { useState, useEffect } from 'react';

const ContadorCuentaRegresiva = ()=> {
  const fechaObjetivo = new Date(2024, 6, 1, 12, 0, 0); // Ejemplo: 1 de julio de 2024 a las 12:00 PM
  const [tiempoRestante, setTiempoRestante] = useState(calcularTiempoRestante());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempoRestante(calcularTiempoRestante());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  function calcularTiempoRestante() {
    const ahora = new Date();
    const diferencia = fechaObjetivo - ahora;
    
    if (diferencia <= 0) {
      return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    return { dias, horas, minutos, segundos };
  }

  return (
    <div>
      <h1>Contador de Cuenta Regresiva</h1>
      <p>Tiempo restante: {tiempoRestante.dias} días, {tiempoRestante.horas} horas, {tiempoRestante.minutos} minutos, {tiempoRestante.segundos} segundos</p>
    </div>
  );
}

export default ContadorCuentaRegresiva;
