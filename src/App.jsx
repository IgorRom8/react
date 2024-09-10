import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { App2 } from './App2'

function App() {

  const [count, setCount] = useState(0)
  
  let str1 = 'txt1'
  let str2 = 'txt2'
  let str3 = 'txt2'


  return (
    <>
    <div>
    <p>
    {str2}
    </p>
    <p>
    {str1}
    </p>  
    </div>

    </>
  )
}

export default App
