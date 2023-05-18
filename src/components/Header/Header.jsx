import logo from  '../../assets/stringCords-logos_black_polices_gris.png';
import styles from "../Header/Hearder.module.css";

function Hearder() {
    return (
      <div>
        <div> 
        <h1>StringCords</h1>
        <h2>Noter vos cordes de guitar</h2>
        <img className={styles.logo} src={logo} alt="logo" />
        </div>
      <div> 
        <ul>
          <li>Sign up </li>
          <li>login </li>
        </ul>
      </div>

        <div> 
         <ul>
         <li> ajouter une corde </li>
         <li> aceille </li>
         </ul>
        </div>
      </div>
    )
  }
export default Hearder;   