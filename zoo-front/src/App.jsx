import { useEffect, useState } from 'react'
import AnimalsList from './components/AnimalsList'
import { CreateAnimal } from './components/CreateAnimal'
import axios from 'axios'

const animalsList = [
  {
    id: 1,
    name: `Liutas`,
    type: 'zinduolis',
    weight: '350',
    live_in_zoo: true,
  },
  {
    id: 2,
    name: `karve`,
    type: 'teliukas',
    weight: '250',
    live_in_zoo: false,
  },
  {
    id: 3,
    name: `Bober`,
    type: 'bedantis',
    weight: '15',
    live_in_zoo: true,
  },
  {
    id: 4,
    name: `meska`,
    type: 'bekailio',
    weight: '5',
    live_in_zoo: false,
  },
]
function App() {
  const [create, setCreate] = useState(null)
  const [updateTime, setUpdateTime] = useState(Date.now())

  useEffect(() => {
    if (create === null) {
      return
    }

    axios
      .post('http://localhost:3003/zoo', create)
      .then((res) => setUpdateTime(Date.now()))
  }, [create])
  return (
    <>
      <CreateAnimal setCreate={setCreate} />
      <AnimalsList animalsList={animalsList} />
    </>
  )
}

export default App
