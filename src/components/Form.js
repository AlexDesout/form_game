import React, { useEffect } from 'react';
import Api from '../api'
import Departements from './Departements';


export default function Form() {

    /*Identité */
    // Votre genre
    // Votre prenom
    // Annee de naissance 
    // Département de naissance (requête api pour récupérer la liste)
    return (
        <div>
            <h2>Je suis un formulaire</h2>
            <Departements />
        </div>
    )
}