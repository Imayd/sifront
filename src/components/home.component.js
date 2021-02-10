import React, { Component } from "react";
import {BrowserRouter as Router } from "react-router-dom";
import UserService from "../services/user.service";
import AuthService from "../services/auth.service";
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: [],
      currentUser: undefined
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user
      });
    }
    
    
    /*UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content: "ERROR"
          /*[
            (error.response && error.response.data) ||
            error.message ||
            error.toString()]
        });
      }
    );*/
  }

  render() {
    const currentUser = this.state.currentUser;
    return (
      <Router>
        <div>
          {currentUser ? (
            <div className="container">
            <header className="jumbotron">
              <h3>Welcome Back <strong> {currentUser.username} </strong> dans ton espace utilisateur</h3>
              <hr></hr>
              <h6> >>> Soyez la bienvenue xD</h6>
            </header>
          </div>
          ): (
          <div className="container">
            <header className="jumbotron">
              <h3>Bienvenue dans l'espace de gestion du SI des étudiants de l'ENSA Khouribga</h3>
              <hr></hr>
              <h6> >>> Connectez ou Inscrivez vous pour plus d'options</h6>
            </header>
          </div>
          )}
        </div>
    </Router>
    );
  }
}
