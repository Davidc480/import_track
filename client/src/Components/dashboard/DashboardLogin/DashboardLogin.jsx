'use client'
import style from "./DashboardLogin.module.css";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";

import { useAuth } from "@/Components/dashboard/AuthContext/AuthContext";

import Image from "next/image";



const DashboardLogin = ({ router }) => {

  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const notify = () => {
    toast('Contraseña incorrecta', {
        id: 'unique-toast',
        duration: 5000,
        position: 'bottom-center',
        className: style.notify
    });
};

  const handlePasswordSubmit = (e)=>{
    e.preventDefault();
    if (password === "admin123") {
      login();
      router.push('/dashboard/home');
    } else {
      notify()
    }
  }


 
  return (
    <div className={style.container}>
      <form onSubmit={handlePasswordSubmit}>
        <div className={style.containerLogin}>
      <div className={style.containerPhotos}>
        <Image src="/Img4.png" alt=""  layout="fill" objectFit="contain" />
      </div>
          <div className={style.inputContainer}>
            <input  
              type="password" 
              placeholder="Contraseña"
              name="username"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>
          <div>
            <button className={style.containerButton} type="submit">Enviar</button>
          </div>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default DashboardLogin;
