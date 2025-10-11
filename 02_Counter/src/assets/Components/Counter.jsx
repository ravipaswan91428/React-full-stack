import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div className='mainContainer'>
      <h1>Hello world</h1>
      <p id='content'>You have clicked {count} times</p>
      <button id='btn' onClick={()=>{
        if(count<10){
          setCount(count+1)
          }
        }
      }>Increse</button>
      <button id='btn' onClick={()=>{
        if(count>0){
          setCount(count-1)
          }
        }
      }>Decrease</button>
    </div>
  )
}

export default Counter
