import { Component } from "react";
import api from "./api";




class App extends Component{

  state = {
    atletas: [],
  }

  async componentDidMount(){
    const response = await api.get('');

    this.setState({ atletas: response.data });
  }

  render(){

    // { | athlete | age | country | year | date | sport | gold | silver | bronze | total | }

    const { atletas } = this.state;
    const sortJsonArray = require('sort-json-array');
    const atletasOredenados  = sortJsonArray(atletas, 'athlete');

    return(
      <div className="container">
        <div>
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
          { atletasOredenados.map(atleta => (             
                <tr key= {atleta.index}> 
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
        </div>
      </div>
    );
  };
};

export default App;
