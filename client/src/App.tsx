import health from './api/health.api'
import './App.css'
import elering from './api/elering.api'
import { useState } from 'react'
  
const healthResponse: any = health.getHealth




function App() {
  const [loading, setLoading] = useState(false)

  const pricesExternal = async () => {
    try {
        setLoading(true)
      const result = await elering.eleringData()
      if(result) {
        setLoading(false)

      } 
      
    } catch (err) {
      console.log('error', err)
      setLoading(false)
      return;
    }
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
      </div>
     
    </>
  )
}

export default App
