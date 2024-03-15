import style from "./PromotionalBanner.module.css"
import loopArray from "@/helper/loopArray";

const PromotionalBanner = ()=>{

    const promotionsArray = [
        "Viernes 25% de descuento", "sorteo de maquillaje", "Entregas cada 15 días"
    ]

    const promotionsLoopArray = loopArray(promotionsArray)

    // console.log(promotionsLoopArray);

    return(
        <div className={style.banner}>
            {promotionsLoopArray.map((txt, key)=>(
                <div className={style.text} key={key}>{txt}</div>
            ))}
        </div>
    )
}

export default PromotionalBanner;