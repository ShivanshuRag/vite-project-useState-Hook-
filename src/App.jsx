
import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx';

function App() {

  /* 
 => useState hook , UI me upadation ke liye use karte hai 
 => value , value variable hai , aur eski intial value ko 0 set ki hai (useState(0)) 
 => setValue, ye function hai 

  */
  const [value , setValue] = useState(0); 
   
  function AddValue(){
    setValue(value+1);
  }

  function RemoveValue(){
    setValue(value-1);
  }

  return (
    <>

    <div className=" max-w-sm p-6 bg-white border border-black-200 rounded-lg shadow:md  ">
     <h1 className="text-3xl font-bold underline">hello world</h1>
     
     <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
       onClick={AddValue}
      >
        
         AddValue : {value}</button> <br /> 
         
     <button 

     onClick={RemoveValue} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">RemoveValue : {value}</button>
      
      </div>

      <Card username="chaiaurcode"  btn="submit"/>
      <Card username="hitesh" />
        
    </>
  )
}

export default App
