import React from 'react'
import Animal from './Animal'

const AnimalsList = ({ animalsList, handleDelete, setShowID }) => {
  return (
    <div>
      {animalsList.map((animal) => (
        <Animal
          key={animal.id}
          animal={animal}
          handleDelete={handleDelete}
          setShowID={setShowID}
        />
      ))}
    </div>
  )
}

export default AnimalsList
