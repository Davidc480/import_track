'use client'
import style from "./Footer.module.css"
import { FaFacebookF, FaWhatsapp   } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";

const Footer = ()=>{
    return(
        <div className={style.container}>
                <div className={style.iconContainer}>
                    <FaWhatsapp className={style.iconWhatsapp} size={30} />
                </div>
                <div className={style.iconContainer}>
                    <FaInstagram className={style.iconInstagram} size={30} />
                </div>
                <div className={style.text}>
                    <p>© 2024 Happy_Shopcr_</p>
                </div>
                <div className={style.iconContainer}>
                    <FaFacebookF  className={style.iconFacebook} size={30}/>
                </div>
                <div className={style.iconContainer}>
                    <IoLogoTiktok className={style.iconTiktok} size={30}/>
                </div>
        </div>
    )
}

export default Footer;