import styles from "./AboutUs.module.css"
import Image from "next/image";


const AboutUs = ()=>{
    return(
        <div className="mt-16">
            <div className={styles.tittle}>
                <h2>SOBRE NOSOTRAS</h2>
            </div>
            <div>
            <div className={`${styles.photos} flex justify-center gap-5 mt-8`}>
  <div className="flex flex-col items-center">
    <div className={styles.containerPhotos}>
      <Image src="/img1.jpg" alt=""  layout="fill" objectFit="cover" />
    </div>
    <span className={`${styles.span} mt-1`}>Nombre 1</span>
  </div>
  <div className="flex flex-col items-center">
    <div className={styles.containerPhotos}>
      <Image src="/img2.jpg" alt=""  layout="fill" objectFit="cover" />
    </div>
    <span className={`${styles.span} mt-1`}>Nombre 2</span>
  </div>
</div>


            </div>
        </div>
    )
}

export default AboutUs;