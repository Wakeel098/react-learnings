import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  let [count, setCount] = useState(5)

  const increase =()=>{
    if(count=="cant go beyound zero"){
      count=0
    }else{
    count=count+1}
    setCount(count)

  }

  return (
    <>
      <h1> hello everyone ! react hooks</h1>
      <h2>value: {count}</h2>

      <button onClick={increase}>Increment</button> <span>value:{count}</span>
      <br /><br />
      <button onClick={()=>{
        if(count<1 || count=="cant go beyound zero") {
          count="cant go beyound zero"
        }
        else{
          count=count-1
        }
        setCount(count)

      }}>Decrement</button>   <span>value:{count}</span>


    </>
  )
}

export default App
