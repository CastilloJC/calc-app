//Importacion
import React from 'react'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'
import './App.css'

//Generacion de la funcion del componente
const App = ()=> {

    //Lo que ejecuta la funcion
    return (
    <main className='react-calculator'>
     <Result />
      <Numbers onClickNumber={number =>{
      console.log("Click en number", number)}}/>
      <Functions onContentClear={()=>
      console.log("Clear")}
      onDelete={()=>
        console.log("Delete")
      }
      />
         {/* Operadores matematicos e igual */}
      <MathOperations onClickOperation={operation => console.log("Operation:", operation)}
      onClickEqual={equal =>
        console.log("Equal:" ,equal)
      }/>


  
    </main>)
}

//Exportancion

export default App
