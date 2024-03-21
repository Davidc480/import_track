'use client'
import React, { useEffect } from "react";
import style from "./PromotionalBanner.module.css"
import loopArray from "@/helper/loopArray";
import { useAppDispatch, useAppSelector } from "@/redux/reduxHooks";
import { fetchDataBannerGet } from "@/redux/reduxSlice/dataBanner/dataBannerGetSlice";

const PromotionalBanner = ()=>{

    const dispatch = useAppDispatch();
    const statusDataBanner = useAppSelector((state) => state.dataBannerGet.status);
    const dataBanner = useAppSelector((state) => state.dataBannerGet.data);

    useEffect(() => {
        if (statusDataBanner === 'idle') {
            dispatch(fetchDataBannerGet())
        }
    }, [])

    const promotionsLoopArray = loopArray(dataBanner)

    return(
        <div className={style.banner}>
            {promotionsLoopArray.map((txt, key)=>(
                <div className={style.text} key={key}>{txt.data}</div>
            ))}
        </div>
    )
}

export default PromotionalBanner;