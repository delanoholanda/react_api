import { useState, useEffect } from 'react'
import React from 'react'
import { getAtletas, getAtleta } from './service/atletas_service'
import { VictoryChart, VictoryGroup, VictoryBar, VictoryAxis } from 'victory'

const App = () => {

  const LIMITE = 10

  const [atletas, setAtletas] = useState([])

  const [pagina, setPagina] = useState(1)
  const [totalPaginas, setTotalPaginas] = useState(1)

  const [dadosGrafico, setDadosGrafico] = useState([[], [], []])


  useEffect(async () => {
    const [atletasRes, totalPaginasRes] = await getAtletas(pagina, LIMITE)

    setAtletas(atletasRes)
    setTotalPaginas(totalPaginasRes)
  }, [pagina])

  const getPaginacao = () => {
    const inicio = (totalPaginas - 2) > pagina ? Math.max(1, pagina - 2) : (totalPaginas - 4)
    const indices = Array.from(Array(Math.min(totalPaginas, 5)).keys()).map(i => inicio + i)

    return indices
      .map(i => (
        <li key={i} className={"page-item" + (i === pagina ? " disabled" : "")}>
          <a className="page-link" onClick={e => setPagina(i)} >{i}</a>
        </li>))
  }

  const getAtletaConquistas = async (nome) => {

    const conquistas = await getAtleta(nome)

    conquistas.sort((atleta, outroAtleta) => atleta.year - outroAtleta.year)
    const grafico = [
      conquistas.map((atleta) => ({ x: atleta.year, y: atleta.gold })),
      conquistas.map((atleta) => ({ x: atleta.year, y: atleta.silver })),
      conquistas.map((atleta) => ({ x: atleta.year, y: atleta.bronze }))
    ]

    setDadosGrafico(grafico)

  }

  return (

    <div className="container">
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Data</th>
            <th scope="col">Atleta</th>
            <th scope="col">Idade</th>
            <th scope="col">País</th>
            <th scope="col">Ano</th>
            <th scope="col">Esporte</th>
            <th scope="col">Ouro</th>
            <th scope="col">Prata</th>
            <th scope="col">Bronze</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {atletas.map(atleta => (
            <tr onClick={() => getAtletaConquistas(atleta.athlete)}
              key={atleta.athlete + atleta.year}>
              <td>{atleta.year}</td>
              <td >{atleta.athlete}</td>
              <td>{atleta.age}</td>
              <td>{atleta.country}</td>
              <td>{atleta.date}</td>
              <td>{atleta.sport}</td>
              <td>{atleta.gold}</td>
              <td>{atleta.silver}</td>
              <td>{atleta.bronze}</td>
              <td>{atleta.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="row" >
        <nav className="col-12" aria-label="..." style={{ display: 'flex', justifyContent: 'center' }} >
          <ul className="pagination">
            <li className={"page-item" + (pagina === 1 ? " disabled" : "")} >
              <a className="page-link" onClick={e => setPagina(pagina - 1)} tabindex="-1">Anterior</a>
            </li>
            {getPaginacao()}
            <li className={"page-item" + (pagina === totalPaginas ? " disabled" : "")}>
              <a className="page-link" onClick={e => setPagina(pagina + 1)} >Próximo</a>
            </li>
          </ul>
        </nav>
      </div>

      {dadosGrafico[0].length > 0 ?
        (
          <VictoryChart
            width={1000}
            height={200}
          >
            <VictoryAxis
              label="Anos"
              tickValues={[2000, 2004, 2008, 2012]}
              tickFormat={['2000', '2004', '2008', '2012']}
            />
            <VictoryGroup offset={20}
              domain={{ x: [2000, 2014], y: [0, 10] }}
              domainPadding={{ x: [10, -10], y: 5 }}
              colorScale={["#DAA520", "#708090", "#8B4513"]}
            >
              <VictoryBar
                labels={({ datum }) => datum.y}
                data={dadosGrafico[0]}
                barWidth={10}
              />
              <VictoryBar
                labels={({ datum }) => datum.y}
                data={dadosGrafico[1]}
                barWidth={10}
              />
              <VictoryBar
                labels={({ datum }) => datum.y}
                data={dadosGrafico[2]}
                barWidth={10}
              />
            </VictoryGroup>
          </VictoryChart>
        ) : null}
      <div className="footer" style={{ paddingBottom: '50px' }}></div>
    </div>
  )
}

export default App