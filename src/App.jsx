//Importacion
/* eslint no-eval: 0*/
import React, { useState } from 'react'
import words from 'lodash.words'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'
import './App.css'

//Generacion de la funcion del componente
const App = () => {
  //Array destructuring
  const [stack, setStack]=useState("")

  const items = words(stack, /[^-^+^*^/]+/g)

  // //  arrayTextoFuncionMedificaTexto =>["", funcion]
  // // 1er Posicion: valor (que inicialemente es el valor por defecto)
  // const texto = arrayTextoFuncionMedificaTexto[0]
  // //2da posicion es la funcion que modifica el texto
  // const funcionModifcatexto = arrayTextoFuncionMedificaTexto[1]


  //Es similar a un if
  //Es verdadero ? (resultado por vendadero) : (resultadoFalso)
  const value = items.length>0?items[items.length-1]:"0"


  //Lo que ejecuta la funcion
  console.log("Renderizacion de app", value)

  return (
    <main className='react-calculator'>
      <Result value={value} />
      <Numbers onClickNumber={number => {
        console.log("Click en number", number)
        setStack(`${stack}${number}`)
      }} />
      <Functions onContentClear={() =>{
        setStack('0')
}}
        onDelete={() =>{
          if(stack.length>0){
          const newStack = stack.substring(0, stack.length -1)
          setStack(newStack)
        }
      }}
      />
      {/* Operadores matematicos e igual */}
      <MathOperations onClickOperation={operation => {
        console.log("Operation:", operation)
      setStack(`${stack}${operation}`)}}
        onClickEqual={equal =>{
          console.log("Equal:", equal)
          setStack(eval(stack).toString())
        }}
         />



    </main>)
}

//Exportancion

export default App
