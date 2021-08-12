//Importacion
import React from 'react'
import Button from './components/Button'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import './App.css'

//Generacion de la funcion del componente
const App = ()=> {
  const clickHandlerFunction = text=>{
    console.log("Button.clickHandler",text)
  }

    //Lo que ejecuta la funcion
    return (
    <main className='react-calculator'>
     <Result />
     <div className="numbers">
       <Button text="1" clickHandler={clickHandlerFunction}/>
       <button>2</button>
       <button>3</button>
       <button>4</button>
       <button>5</button>
       <button>6</button>
       <button>7</button>
       <button>8</button>
       <button>9</button>
       <button>10</button>
       </div>
       <div className="functions">
         <button>Clear</button>
         <button>r</button>
         </div>
      <MathOperations/>


  
    </main>)
}

//Exportancion

export default App
