import Image from "next/image";
import styles from "./DashboardHeaderLogin.module.css"
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { useAuth } from "../AuthContext/AuthContext";

const DashboardHeaderLogin = ()=>{

    const { logout } = useAuth()

    return (
    <ProtectedRoute>
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
                <button onClick={logout}>Salir</button>
            </div>
        </div>
    </ProtectedRoute>
    );
}

export default DashboardHeaderLogin;