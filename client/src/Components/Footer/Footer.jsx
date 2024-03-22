'use client'
import style from "./Footer.module.css"
import { FaWhatsapp   } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";

const Footer = ()=>{
    return(
        <div className={style.container}>
                <div className={style.iconContainer}>
                    <FaWhatsapp className={style.iconWhatsapp} size={30} />
                </div>
                <div className={style.iconContainer}>
                    <a href="https://www.instagram.com/happy_shopcr_?igsh=MW9oZWpmZ3F4aG1n" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className={style.iconInstagram} size={30} />
                    </a>
                </div>
                <div className={style.text}>
                    <p>© 2024 Happy_Shopcr_</p>
                </div>
                <div className={style.iconContainer}>
                    <a href="https://www.tiktok.com/@happy_shopcr_?_t=8ksj2e5ACSD&_r=1" target="_blank" rel="noopener noreferrer">
                        <IoLogoTiktok className={style.iconTiktok} size={30}/>
                    </a>
                </div>
        </div>
    )
}

export default Footer;