import style from "./DashboardLogin.module.css"

const DashboardLogin = ()=>{
    return (
        <div className={style.container}>
            <div className={style.containerLogin}>
                <div className={style.inputContainer}>
                    <span>Username</span>
                    <input type="text" />
                </div>
                <div className={style.inputContainer}>
                    <span>Password</span>
                    <input type="text" />
                </div>
                <div className={style.containerButton}>
                    <button>Enviar</button>
                </div>
            </div>
        </div>
    )
}

export default DashboardLogin;