import React, { Component } from "react";
export default class EmploisTemps extends Component{

    render() {
        return (
          <div className="container">
            <header className="jumbotron">
              <h3>Pour visualiser et télecharger les emplois du temps du département informatique de l'ENSAKH,
                   veuillez cliquez sur le lien ci-dessous</h3>
              <hr></hr>
              <a href="http://ensak.usms.ac.ma/ensak/?q=emplois-du-temps"> --- Emplois du Temps</a>
            </header>
          </div>
        );
    }
}