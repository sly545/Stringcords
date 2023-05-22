import  { useState } from 'react';
import Styles from '../LoginForm.jsx/LoginForm.module.css'


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici votre logique de connexion avec le backend
    console.log('Email:', email);
    console.log('Password:', password);
    // Réinitialisez les champs du formulaire après la soumission
    setEmail('');
    setPassword('');
  };

  return (
   
    <form onSubmit={handleSubmit} className={Styles.Form} >
      <h1 className={Styles.TitleLogin} >Login here</h1>
      <div className={Styles.ContenerEmail}>
        <label htmlFor="email"></label>
        <input className={Styles.LoginEmail}
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className={Styles.ContenerPass} >
        <label  htmlFor="password"></label>
        <input className={Styles.LoginPass}
          type="password" 
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button className={Styles.ButtonLogin} type="submit">Se connecter</button>
    </form>
    
 
  );
}

export default LoginForm;
