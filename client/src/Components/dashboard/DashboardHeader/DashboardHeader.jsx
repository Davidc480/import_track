import styles from "./DashboardHeader.module.css"
import Image from "next/image";

const DashboardHeader = ()=>{
    return (
        <div className={styles.container}>
        <div className={styles.logo}>
            <Image 
                src="/Logo.png" 
                alt="Logo Import-track" 
                width={98} 
                height={80}
                objectFit="contain"
                className="object-contain"
            />
        </div>
        <div className={`${styles.tittle}`}>
            <h1>Happy Shopcr</h1>
        </div>
    </div>
    )
}

export default DashboardHeader;