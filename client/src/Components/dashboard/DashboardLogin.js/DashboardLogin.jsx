import style from "./DashboardLogin.module.css";

const DashboardLogin = () => {
  return (
    <div className={style.container}>
      <form>
        <div className={style.containerLogin}>
          <div className={style.inputContainer}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className={style.containerButton}>
            <button type="submit">Enviar</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DashboardLogin;
