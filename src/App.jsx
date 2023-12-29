import { useState } from 'react'
import './App.css'
function App() {
  const [color, setColor] = useState('blue')
  const [color1, setColor1] = useState('green')
  return (
    <>
      <h1 style={{color:color}}>ViteReact</h1>
      <h2 style={{color:color1}}>ViteReact</h2>
      <div className="card">
        <button onClick={() => setColor(("red"))}>
          color is {color}                                                                                                          
          </button>
          <button onClick={() => setColor1(("violet"))}>
          color is {color1}
          </button>
      </div>
    </>
  )
}
export default App
