import React, { Component } from "react";
import {Link} from "react-router-dom"

import AuthService from "../services/auth.service";

export default class BoardEtudiant extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    console.log(currentUser);
    this.setState({ currentUser: currentUser});
    /*UserService.getEtudiantBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );*/
  }

  render() {
    const { currentUser } = this.state;
    return (
    <div className="container">
        <div>
        <label >
          <h3 className="flexy">
            Welcome Back: <strong> { currentUser.username} !</strong>
          </h3>
          <h4 className="centry">What's Next?</h4>
        </label>
        
        <header className="jumbotron">
          <h3>
            >>> <Link to="/cours" className="linky">Consulter la liste des cours ? Ou télècharger un ? </Link>
          </h3>
        </header>
        <header className="jumbotron">
          <h3>
            >>> <Link to="/service" className="linky">Demander un Service de l'administration?</Link>
          </h3>
        </header>
        <header className="jumbotron">
          <h3>
            >>> <Link to="/cours" className="linky">Consulter les statistiques de vos notes et absences ?</Link>
          </h3>
          
        </header>
      </div>
      </div>
    );
  }
}
