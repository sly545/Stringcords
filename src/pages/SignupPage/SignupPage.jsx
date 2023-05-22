import SignUpForm from "../../components/SIgnForm/SignForm";
import styles from '../LoginPage/LoginPage.module.css'
function SignUpPage() {
    return (
      <div className={styles.LoginSpace} >
        <SignUpForm />
      </div>
    );
  }

  export default SignUpPage; 