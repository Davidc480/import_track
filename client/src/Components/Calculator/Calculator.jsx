import style from "./Calculator.module.css"
import { IoInformationCircleOutline } from 'react-icons/io5'

const Calculator = ()=>{
    return(
        <div className={style.container}>
            <div className={style.tittle}>
                <h3>Calcula el precio de tu producto</h3>
            </div>
            <div className={style.containerText}>
                <p>Introduce el precio del producto en dólares y calcularemos el costo total incluyendo los gastos de importación. Así sabrás cuánto pagarás sin complicaciones.</p>
            </div>

            <div className={style.containerCalculator}>
                <div>
                    <div className={style.inputPriceProduct}>
                        <div className={style.input_container}>
                            <span>Precio del Producto</span>
                            <span className={style.infoIcon}><IoInformationCircleOutline size={17} color="blue" /></span>
                        </div>
                            <input type="text" placeholder="$" />
                    </div>
                    <div className={style.inputTypeProduct}>
                        <span>Tipo de Producto</span>
                        <select>
                            <option value="opcion1">Selecciona una Opción </option>
                            <option value="opcion2">Opción 2</option>
                            <option value="opcion3">Opción 3</option>
                        </select>
                    </div>
                </div>
                <div className={style.tittleBox}>
                    <p>Precio de producto mas importación</p>
                    <div>¢  2.000</div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;