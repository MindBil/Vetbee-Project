import "./PetCards.scss"
import { useEffect, useState } from 'react';

function PetCards() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/pets")
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((error) => console.error("Error fetching pets:", error));
  }, []);

  const handleViewLog = (email) => {
    alert(`View log for ${email}`);
  };

  const handleDelete = (petToDelete) => {
    setPets((prevPets) => prevPets.filter((pet) => pet !== petToDelete));
  };

  return (
    <div className='card-container'>
      {pets.map((pet) => (
        <div key={pet.email} className="card">
          <p>Name: {pet.name}</p>
          <p>Date of Birth: {pet.dob}</p>
          <p>Email: {pet.client_email}</p>
          <button onClick={() => handleViewLog(pet.email)}>View Log</button>
          <button onClick={() => handleDelete(pet)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PetCards;