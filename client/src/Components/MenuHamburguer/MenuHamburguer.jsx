'use client'
import styles from "./MenuHamburguer.module.css"
import React, {useState} from "react";


const MenuHamburguer = ()=>{

    const [navActive, setNavActive] = useState(false)
    const [navButtonActive, setNavButtonActive] = useState(false)

    const handlerClickButton = ()=>{
        setNavActive(!navActive)
        setNavButtonActive(!navButtonActive)
    }

    return(
        <div>
            <div className={styles.container}>
                <button className={styles.navButton} onClick={handlerClickButton}
                aria-controls="nav"
                aria-expanded={navButtonActive}
                aria-label="menú"
                >
                    <div> </div>
                    <div> </div>
                </button>
            </div>
            <nav>
            <ul className={styles.nav} data-visible={navActive}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="">Calculadora</a>
                </li>
                <li>
                    <a href="/orderTracker">Rastrear Pedido</a>
                </li>
                <li>
                    <a href="/nextOrder">Proximos pedidos</a>
                </li>
                <li>
                    <a href="">Contacto</a>
                </li>
            </ul>
            </nav>
        </div>
    )
}

export default MenuHamburguer;