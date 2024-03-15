import style from "./OrderStatusTracker.module.css"
import { IoInformationCircleOutline } from 'react-icons/io5'

const OrderStatusTracker = ()=>{
    return(
        <div className="flex flex-col justify-center items-center mt-24">
            <div className={style.tittle}>
                <h2>Rastreos</h2>
            </div>
            <div className={style.text}>
                <p>Nuestro servicio de rastreo te ofrece tranquilidad y confianza, permitiéndote seguir tu pedido de manera eficiente. Espera con emoción, porque tu compra está en camino y llegará antes de lo que imaginas. ¡Estamos aquí para asegurarnos de que la espera valga la pena!</p>
            </div>
            <div className={style.containerForm}>
                <form className={style.form} action="">
                    <div className={style.spanIcon}>
                        <span>Precio del Producto</span>
                        <span className={style.infoIcon}><IoInformationCircleOutline size={17} color="blue" /></span>
                    </div>
                        <input placeholder="dd/mm/yyyy" type="text" />
                    <div className={style.button}>
                        <button>Enviar</button>
                    </div>
                </form>
                <div>
                    <h3 className={style.requestedTitle}>Estado de tu pedido:</h3>
                </div>
            </div>
        </div>
    )
}

export default OrderStatusTracker;