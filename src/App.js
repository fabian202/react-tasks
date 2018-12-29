import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import  { todos } from './data/todos.json';
console.log(todos);

class App extends Component {
  render() {
    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Tasks
            <span className="badge badge-pill badge-light ml-2">
              
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
            </div>

            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4">
                  <div className="card mt-4">
                    <div className="card-title text-center">
                      <h3>Título</h3>
                      <span className="badge badge-pill badge-danger ml-2">
                        terminada?
                      </span>
                    </div>
                    <div className="card-body">
                      descripción
                    </div>
                    <div className="card-footer">
                      <button
                        className="btn btn-danger">
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
