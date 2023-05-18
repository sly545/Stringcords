import logo from  '../../assets/stringCords-logos_black_polices_gris.png';
import styles from "../Header/Hearder.module.css";

function Hearder() {
    return (
      <div className={styles.Wrap}>
           <div className={styles.AjouCord}> 
         <ul>
         <li> ajouter une corde </li>
         <li> aceille </li>
         </ul>
        </div>
        <div className={styles.ConternerTitle} > 
        <div className={styles.Logotitle}> 
        <img className={styles.logo} src={logo} alt="logo" />
        <h1 className={styles.Title}>StringCords</h1>
       
        </div>
        <h2 className={styles.Slogan}>Noter vos cordes de guitar relou</h2>
        </div>
      <div className={styles.Navbar} > 
        <ul>
          <li>Sign up </li>
          <li>login </li>
        </ul>
      </div>

     
      </div>
    )
  }
export default Hearder;   