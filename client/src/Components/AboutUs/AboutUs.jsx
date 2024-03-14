import styles from "./AboutUs.module.css"
import Image from "next/image";


const AboutUs = ()=>{
    return(
        <div className="mt-16 text-center">
            <div className={styles.tittle}>
                <h2>SOBRE NOSOTRAS</h2>
            </div>
            <div className={`${styles.photos} flex justify-center gap-5 mt-8`}>
                <div className="flex flex-col items-center">
                    <div className={styles.containerPhotos}>
                        <Image src="/img1.jpg" alt=""  layout="fill" objectFit="cover" />
                    </div>
                    <span className={`${styles.span} mt-3`}>Nombre 1</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className={styles.containerPhotos}>
                        <Image src="/img2.jpg" alt=""  layout="fill" objectFit="cover" />
                    </div>
                    <span className={`${styles.span} mt-3`}>Nombre 2</span>
                </div>
            </div>
            <div className="flex justify-center items-center p-4 -mt-20">
                <div className={styles.containerText}>
                    <div className="mx-6 mb-9 mt-24">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Sed nec felis pellentesque, 
                        suscipit mauris.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;