'use client'
import style from "./Calculator.module.css"
import { IoInformationCircleOutline } from 'react-icons/io5'
import productFeeList from "@/helper/productsFeeList"
import { useEffect, useState } from "react"
import calculatePriceProduct from "@/helper/calculatePriceProduct"
import { useAppDispatch, useAppSelector } from "@/redux/reduxHooks"
import { fetchPriceDollar } from "@/redux/reduxSlice/priceDollar/priceDollarSlice"
import toast, { Toaster } from 'react-hot-toast';

const Calculator = ()=>{

    const productsForSelect = productFeeList();

    const dispatch = useAppDispatch();

    const [priceProduct, setPriceProduct] = useState("¢  0");

    const [inputValue, setInputValue] = useState();

    const [selectedValue, setSelectedValue] = useState(0);

    const priceDollar = useAppSelector((state) => state.priceDollar.data.currentPriceDollar);

    const [notifyState, setNotifyState] = useState(false)

    useEffect(()=>{
        setPriceProduct(calculatePriceProduct(inputValue, selectedValue, priceDollar));
    },[inputValue, selectedValue])

    useEffect(()=>{
        dispatch(fetchPriceDollar())
    },[])

    console.log(priceDollar);
    
    
    const notify = () => 
    toast('El precio del producto debe ser el precio original en dólares.', {
        id: 'unique-toast',
        duration: 5000,
        position: 'bottom-center',
        className: style.notify
    });

    const handleSelectChange = (event) => {
      setSelectedValue(event.target.value);
    };


    const handleChange = (event) => {
      const newValue = event.target.value;
      setInputValue(newValue);
      const truncatedValue = newValue.slice(0, 3);
      setInputValue(truncatedValue);
    };

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
                            <button className={style.infoIcon} onClick={notify}><IoInformationCircleOutline size={17} color="blue" /></button>
                            <Toaster />
                        </div>
                            <input type="number" min="0" max="1000" placeholder="$" value={inputValue} onChange={handleChange} />
                    </div>
                    <div className={style.inputTypeProduct}>
                        <span>Tipo de Producto</span>
                        <select className={style.selectProduct} value={selectedValue} onChange={handleSelectChange}>
                            {productsForSelect.map(object => (
                                <option key={object.nameProduct} value={object.value}>{object.nameProduct} </option>
                                ))}
                        </select>
                    </div>
                </div>
                <div className={style.tittleBox}>
                    <p>Precio de producto mas importación</p>
                    <div>{priceProduct}</div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;