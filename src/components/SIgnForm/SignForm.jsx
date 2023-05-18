import { useState } from 'react';

function SignUpForm() {
  // État local pour stocker les valeurs des champs de formulaire
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Gestionnaire de changement pour le champ de l'e-mail
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Gestionnaire de changement pour le champ du mot de passe
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Gestionnaire de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici votre logique d'enregistrement avec le backend

    console.log('Email:', email);
    console.log('Password:', password);
    // Réinitialisez les champs du formulaire après la soumission
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
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
      <button type="submit">S&apos;enregistrer</button>
    </form>
  );
}

export default SignUpForm;
