import { Component } from "react";
import api from "./api";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{

  state = {
    atletas: [],
  }

  async componentDidMount(){
    const response = await api.get('');

    this.setState({ atletas: response.data });
  }

  render(){

    // {"athlete":"Michael Phelps",
      // "age":23,
      // "country":"United States",
      // "year":2008,
      // "date":"24/08/2008",
      // "sport":"Swimming",
      // "gold":8,
      // "silver":0,
      // "bronze":0,
      // "total":8

    const { atletas } = this.state;
    console.log(atletas)

    return(
      <div className="container">
        <div>
          <h1>Listar Atletas</h1>
          <table class="table">
              <thead class="thead-dark">
                <tr>
                  {/* <th scope="col">#</th> */}
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
          { atletas.map(atleta => ( 
            
              <tbody>
                <tr>
                <th scope="row">{ atleta.athlete }</th>
                <td>{ atleta.age }</td>
                <td>{ atleta.country }</td>
                <td>{ atleta.year }</td>
                <td>{ atleta.date }</td>
                <td>{ atleta.sport }</td>
                <td>{ atleta.gold }</td>
                <td>{ atleta.silver }</td>
                <td>{ atleta.bronze }</td>
                <td>{ atleta.total }</td>
                
                </tr>
              </tbody>
            
            
            
            
            // <li key = { atleta.athlete }>
            //   <h2>
            //     <strong>Atleta: </strong>
            //     { atleta.athlete } <br />
            //   </h2>
            //     <p>Idade: { atleta.age }</p>
            //     <p>País: { atleta.country }</p>
            //     <p>Ano: { atleta.year }</p>
            //     <p>Data: { atleta.date }</p>
            //     <p>Sporte: { atleta.sport }</p>
            //     <p>Medálhas de Ouro: { atleta.gold }</p>
                
              
            
            // </li>
          ))}
          </table>
        </div>
      </div>
    );
  };
};

export default App;
