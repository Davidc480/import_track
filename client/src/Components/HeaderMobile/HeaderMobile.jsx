import Image from "next/image";
import styles from "./HeaderMobile.module.css"

const HeaderMobile = () => {
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
            <div className={styles.menu}>
            </div>
        </div>
    )
}

export default HeaderMobile;
