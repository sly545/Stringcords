import  { useState } from 'react';

const AddStringForm = () => {
  const [formValues, setFormValues] = useState({
    stringName: '',
    stringType: '',
    durabilityRating: 0,
    playabilityRating: 0,
    oxidationRating: 0,
    photo: null,
  });

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setFormValues({ ...formValues, [e.target.name]: e.target.files[0] });
    } else {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Values:', formValues);
    const { durabilityRating, playabilityRating, oxidationRating } = formValues;
    const averageRating = (parseFloat(durabilityRating) + parseFloat(playabilityRating) + parseFloat(oxidationRating)) / 3;
    console.log('Average Rating:', averageRating.toFixed(2));
    // Envoyer les données au backend ou effectuer d'autres actions nécessaires
    setFormValues({
      stringName: '',
      stringType: '',
      durabilityRating: 0,
      playabilityRating: 0,
      oxidationRating: 0,
      photo: null,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="stringName" value={formValues.stringName} onChange={handleChange} placeholder="Nom de la corde" />
      <select name="stringType" value={formValues.stringType} onChange={handleChange}>
        <option value="">-- Sélectionnez le type de corde --</option>
        <option value="Electrique">Corde électrique</option>
        <option value="Acoustique">Corde acoustique</option>
        <option value="Classique">Corde classique</option>
      </select>
      <div>
  <label htmlFor="description">Description de la corde:</label>
  <textarea name="description" value={formValues.description} onChange={handleChange} placeholder="Description de la corde"></textarea>
      </div>

      <div>
        <label htmlFor="durabilityRating">Note durabilité:</label>
        <input type="range" name="durabilityRating" min="0" max="5" step="0.1" value={formValues.durabilityRating} onChange={handleChange} />
        <span>{formValues.durabilityRating}</span>
      </div>
      <div>
        <label htmlFor="playabilityRating">Note jouabilité:</label>
        <input type="range" name="playabilityRating" min="0" max="5" step="0.1" value={formValues.playabilityRating} onChange={handleChange} />
        <span>{formValues.playabilityRating}</span>
      </div>
      <div>
        <label htmlFor="oxidationRating">Note oxydation:</label>
        <input type="range" name="oxidationRating" min="0" max="5" step="0.1" value={formValues.oxidationRating} onChange={handleChange} />
        <span>{formValues.oxidationRating}</span>
      </div>
      <div>
        <label htmlFor="photo">Ajouter une photo:</label>
        <input type="file" name="photo" accept="image/*" onChange={handleChange} />
      </div>
      
      <button type="submit">Soumettre</button>
    </form>
  );
};

export default AddStringForm;
