//Importacion
import React from 'react'
import Result from '../components/Result'
import './App.css'

//Generacion de la funcion del componente
const App = ()=> {
  
    //Lo que ejecuta la funcion
    return (
    <main className='react-calculator'>
      <result> </result>
     <div className="numbers">
       <button>1</button>
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
       <div className="function">
         <button>Clear</button>
         <button>r</button>
         </div>
         <div className="math-operation">
           <button>+</button>
           <button>-</button>
           <button>*</button>
           <button>/</button>
           <button>=</button>
           </div>


  
    </main>)
}

//Exportancion

export default App
