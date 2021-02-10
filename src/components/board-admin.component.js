import React, { Component } from "react";
import {Link} from 'react-router-dom';
import UserService from "../services/user.service";
import AuthService from "../services/auth.service";

export default class BoardAdmin extends Component {
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
    /*UserService.getAdminBoard().then(
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
/**
 *      <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header>
 */

  render() {
    const { currentUser } = this.state;
    return (
      <div className="container">
          <div>
            <label className="labelo" >
              <h3 className="flexy">
                Welcome Back: <strong> { currentUser.username} !</strong>
              </h3>
              <h4 className="centry">What's Next?</h4>
            </label>
            
            <header className="jumbotron">
              <h3>
                >>> <Link to="/cours" className="linky">Ajouter des cours ou consulter la liste existante? </Link>
              </h3>
            </header>
            <header className="jumbotron">
              <h3>
                >>> <Link to="/home" className="linky">Traiter un Service administratif?</Link>
              </h3>
            </header>
            <header className="jumbotron">
              <h3>
                >>> <Link to="/home" className="linky">Gérer les utilisateurs</Link>
              </h3>
              
            </header>
        </div>
      </div>
    );
  }
}
