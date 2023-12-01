import React, { useEffect, useState } from 'react';
import Api from '../api'

export default function Departements() {
  const [departements, setDepartements] = useState([]);

  useEffect(() => {
    const api = new Api('https://geo.api.gouv.fr/departements');

    // Exemple d'appel GET
    api.get('/')
      .then(data => {
        setDepartements(data);
        // console.log(data); 
      })
      .catch(error => console.error('GET Error:', error));
  }, []);

  return (
    <div>
      <label>Votre département de naissance :</label>
      <select>
        <option key="choix" value="choix">- Choisir -</option>
        {departements.map(departement => (
          <option key={departement.code} value={departement.code}>
            {departement.code} {departement.nom}
          </option>
        ))}
      </select>
    </div>
  );
}
