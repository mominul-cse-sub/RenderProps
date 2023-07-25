import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HoverCounter from './components/HoverCounter'
import ClickCounter from './components/ClickCounter'
import Counter from './components/Counter'

function App() {
  return (
    <>
      {/* <Counter render= {(count,incrementCount)=> (<ClickCounter count={count} incrementCount ={incrementCount}/>)}/>
      <Counter render= {(count,incrementCount)=> (<HoverCounter count={count} incrementCount ={incrementCount}/>)}/> */}

      <Counter>
          {(count,incrementCount)=> (<ClickCounter count={count} incrementCount ={incrementCount}/>)}
      </Counter>
      <Counter>
          {(count,incrementCount)=> (<HoverCounter count={count} incrementCount ={incrementCount}/>)}
      </Counter>
    </>
  )
}

export default App