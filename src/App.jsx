import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard'
import { useState } from 'react'

function App() {
  const loadedCoffee = useLoaderData()

  const [coffees, setCoffees] = useState(loadedCoffee)
  return (
    <div className='m-10'>

      <h1 className='text-6xl text-purple-600'>Hot Cold coffee: {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-3'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} 
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
            ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
