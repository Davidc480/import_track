import { useAppSelector } from "@/redux/reduxHooks";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/reduxHooks";
import { fetchPriceDollar } from "@/redux/reduxSlice/priceDollar/priceDollarSlice";

export default function DollarPrice(){
    
    // const [editingPrice, setEditingPrice] = useState(null);
    // const [newPrice, setNewPrice] = useState({ priceDollar });

    const priceState = useAppSelector((state)=>state.priceDollar.data)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(fetchPriceDollar())

    }, [])
    return(
        <div>
            <p>
                dolar: {priceState.currentPriceDollar}
            </p>
        </div>
    )
}