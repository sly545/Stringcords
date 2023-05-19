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
      <div  >
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password" 
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Se connecter</button>
    </form>
 
  );
}

export default LoginForm;
