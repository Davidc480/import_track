'use client'
import style from "./DashboardLogin.module.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/reduxHooks";
import { fetchLoginAdminPost } from "@/redux/reduxSlice/loginAdmin/loginAdminSlice";
import toast, { Toaster } from 'react-hot-toast';

const DashboardLogin = () => {
  
  const [formData, setFormData] = useState({
    // Aquí puedes inicializar los datos del formulari
  });
  
  const router = useRouter();

  const loginStatus = useAppSelector((state)=> state.loginAdmin.data)

  const dispatch = useAppDispatch()

  const notify = () => 
  toast('Credenciales incorre', {
      id: 'unique-toast',
      duration: 5000,
      position: 'bottom-center',
      className: style.notify
  });

  useEffect(()=>{
    if(loginStatus.login === true){
      router.push("/dashboardSign/dashboardHome");
      console.log(true);
    } else {
      notify()
      console.log(false);
    }
  }, [loginStatus])

    const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchLoginAdminPost(formData))
  }
  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <div className={style.containerLogin}>
          <div className={style.inputContainer}>
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username"
              name="username"
              value={formData.username || ''}
              onChange={handleChange}
              placeholder="Nombre de usuario"
            />
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              name="password"
              value={formData.password || ''}
              onChange={handleChange}
              placeholder="Contraseña"/>
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
