import React from 'react'
import './style.css'
import Product from './components/Product'
function App() {
  const p1 = {
        id:1,
        name:'laptop',
        price:1234,
        details:'blalallalal'
    }
  const p2 = {
        id:2,
        name:'pc',
        price:1234,
        details:'blalallalal'
    }
  return (
    <>
    <Product pr={p1}/>
    <Product pr={p2}/>
    </>
  )
}

export default App
