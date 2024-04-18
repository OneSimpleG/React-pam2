import { useEffect, useReducer, useRef, useState } from 'react';
import './App.css';
import axios from "axios"
import { addSquareFunction, decrementFunction, incrementFunction, removeSquareFunction } from './actions/actionObject';
import { counterReducer } from './reducers/counterReducer';
import { squareReducer } from './reducers/cubeReducer';
function App() {
  // const [count,setCount]=useState(0)
  const [counter,dispatchCounter]=useReducer(counterReducer,0)
  const [squares,dispatchSquares]=useReducer(squareReducer,[])
  const [inputValue,setInputValue] = useState(0)
  const numberInput = useRef()
  useEffect(()=>{
    console.log(inputValue);
  },[inputValue])
  return (
    <div>
      <button onClick={()=>dispatchCounter(incrementFunction())}>increment</button>
      <p>{counter}</p>
      <button onClick={()=>dispatchCounter(decrementFunction())}>decrement</button>
      <button onClick={()=>dispatchSquares(addSquareFunction())}>Add square</button>
      <button onClick={()=>dispatchSquares(removeSquareFunction())}>Remove square</button>
      <div style={{display:"flex",flexWrap:"wrap"}}>
        {squares.map((square,i)=>{
          return(
            <div style={{width:"50px",height:"50px", margin:"5px",background:"darkGreen"}} key={i}>{square}</div>
          )
        })}
      </div>
      <input type="number" ref={numberInput}/>
      <button onClick={()=>setInputValue(numberInput.current)}>Add Squares</button>
    </div>
  );
}

export default App;
