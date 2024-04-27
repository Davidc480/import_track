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
                        <Image src="/Img1.jpg" alt=""  layout="fill" objectFit="cover" />
                    </div>
                    <span className={`${styles.span} mt-3`}>Kimberly</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className={styles.containerPhotos}>
                        <Image src="/Img2.jpg" alt=""  layout="fill" objectFit="cover" />
                    </div>
                    <span className={`${styles.span} mt-3`}>Franchezca</span>
                </div>
            </div>
            <div className="flex justify-center items-center p-4 -mt-20 mb-4">
                <div className={styles.containerText}>
                    <div className="mx-6 mb-9 mt-20">
                        <p>En un rincón acogedor de la web, Con amor y estilo, seleccionan cuidadosamente cada prenda o artículo para que sus clientes se sientan especiales y vuelvan por más. Juntas, convierten cada compra en una experiencia única y encantadora.</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center -mt-14">
                <div className={styles.containerPhotosEnd}>
                    <Image src="/Img3.jpg" alt=""  layout="fill" objectFit="cover" />
                </div>
            </div>
        </div>
    )
}

export default AboutUs;