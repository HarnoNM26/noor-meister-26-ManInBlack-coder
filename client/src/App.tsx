import health from './api/health.api'
import './App.css'
import elering from './api/elering.api'
import { useState } from 'react'
import SimpleAreaChart from './components/charts'
  
const healthResponse: any = health.getHealth




function App() {
  const [loading, setLoading] = useState(false)

  const pricesExternal = async () => {
    try {
     const response = await elering.eleringData()
    return response;

    } catch (err) {
      console.log('error', err)
      setLoading(false)
    }
    return false
  }

  const handlePricesFetch = () => {
  pricesExternal()
  }  
  
  if (loading) { 
      return <h2>Loading...</h2>};



  return (
    <>
    {!healthResponse}
      <h2>{healthResponse || 'bad health'}</h2>

    

      <div className=''>
        <h2> Prices</h2>
        <div className='selectors'>
          <select>
            <option>EE</option>
            <option>LV</option>
            <option>FI</option>
          </select>
        </div>
     
        <button onClick={handlePricesFetch}>Sync prices</button>
        <div className='data_Charts'>
          <div className='over_time'>
            <h2>Hinnad läbi aja</h2>
            <SimpleAreaChart></SimpleAreaChart>
          </div>
          <div>
            <h2>Päeva keskmine</h2>
            <SimpleAreaChart></SimpleAreaChart>

          </div>
          <div>
              <h2>Asukoha järgi valitud keskmine hind</h2>
              <SimpleAreaChart></SimpleAreaChart>

          </div>
          <div>

            <h2>Valitud koha ja ajavahemiku kaart</h2>
            <SimpleAreaChart></SimpleAreaChart>


          </div>
        </div>
      </div>
     
    </>
  )
}

export default App
