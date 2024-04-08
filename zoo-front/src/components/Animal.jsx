import React from 'react'

const Animal = ({ animal, handleDelete, setShowID }) => {
  const { id, name, type, weight, live_in_zoo } = animal
  return (
    <li>
      <span>{id}</span>
      <span>{name}</span>
      <span>{type}</span>
      <span>{weight}</span>
      <span>{live_in_zoo}</span>
      <div>
        <button onClick={() => setShowID(id)}>Edit</button>
        <button onClick={() => handleDelete()}>Remove</button>
      </div>
    </li>
  )
}

export default Animal
