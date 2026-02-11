import { useState } from 'react'
import {health} from './api/health.api'
import './App.css'
const healthResponse: any = health.getHealth
function App() {


  return (
    <>
      <h2>{healthResponse || 'bad health'}</h2>
    </>
  )
}

export default App
