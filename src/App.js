import { useState, useEffect} from "react"
import React from 'react'
import getAtletas from "./service/atletas_service"

const App = () => {
  
  const [pagina, setPagina] = useState(1)
  const [tamanho, setTamanho] = useState(15)
  const [count, setCount] = useState(0);

    
  const [ atletas, setAtletas ] = useState( [] )

  useEffect( async () => {
    setAtletas(await getAtletas(pagina,tamanho))
  }, [pagina])
  
  return (   

    <div className="container">          
          <table className="table table-striped">
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
          </table>
          <button onClick={() => setPagina(Math.max((pagina - 1), 1)) } > Anterior </button>
          <button onClick={() => setPagina(pagina + 1)}> Proximo </button>
    </div>
  )
}

export default App