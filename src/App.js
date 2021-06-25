import { useState, useEffect} from "react"
import React from 'react'
import getAtletas from "./service/atletas_service"

const App = () => {
  
  const [pagina, setPagina] = useState(1)
  const [tamanho, setTamanho] = useState(10)
  const [count, setCount] = useState(0);

  const paginar =  (comando) => {
    
    // const a = await getAtletas(pagina + comando,tamanho)
    // setPagina(2)
    // console.log(a)
    // setAtletas(await getAtletas(pagina + comando,tamanho))
  } 
  
  const [ atletas, setAtletas ] = useState( [] )

  useEffect( async () => {
    setAtletas(await getAtletas(pagina,tamanho))
  })
  
  return (

    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    

    <div className="container"> 
          <button onClick={() => paginar(-1)} > Anterior </button> 
          <button onClick={() => setPagina(pagina + 1)}> Proximo </button>
          {/* <button onClick={() => setCount(count + 1)}> </button>        */}
          
          {/* <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Atleta</th>
                  <th scope="col">Idade</th>
                  <th scope="col">País</th>
                  <th scope="col">Ano</th>
                  <th scope="col">Data</th>
                  <th scope="col">Esporte</th>
                  <th scope="col">Ouro</th>
                  <th scope="col">Prata</th>
                  <th scope="col">Bronze</th>
                  <th scope="col">Total</th>                  
                </tr>
              </thead>
              <tbody>
                  { atletas.map(atleta => (             
                        <tr key= {atletas.indexOf(atleta)}> 
                          <td >{ atleta.athlete === '' ? "Desconhecido" : atleta.athlete } </td>
                          <td>{ atleta.age === null ? "--" : atleta.age }</td>
                          <td>{ atleta.country }</td>
                          <td>{ atleta.year }</td>
                          <td>{ atleta.date }</td>
                          <td>{ atleta.sport }</td>
                          <td>{ atleta.gold }</td>
                          <td>{ atleta.silver }</td>
                          <td>{ atleta.bronze }</td>
                          <td>{ atleta.total }</td>               
                        </tr>
                  ))}
                  </tbody>
          </table> */}
      </div>
      </div>
  )
}

export default App