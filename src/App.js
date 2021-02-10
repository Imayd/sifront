import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import EmploisTemps from "./components/emploisTemps.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardInternaute from "./components/board-internaute.component";
import BoardEtudiant from "./components/board-etudiant.component";
import BoardEnseignant from "./components/board-enseignant.component";
import BoardAdmin from "./components/board-admin.component";
import ListCoursComponent from "./components/listCoursComponent";
import AddCoursComponent from "./components/addCours.component";
import DemanderServiceComponent from "./components/demanderService.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showEtudiantBoard: false,
      showEnseignantBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showEtudiantBoard: user.roles.includes("ROLE_ETUDIANT"),
        showEnseignantBoard: user.roles.includes("ROLE_ENSEIGNANT"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showEtudiantBoard,showEnseignantBoard, showAdminBoard } = this.state;

    return (
      <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light navy" >
          
          <Link to={"/"} className="navbar-brand">
            ENSA Khouribga
          </Link>
          

          <div className="navbar-nav mr-auto">
            
            <li className="nav-item">
                  <Link to={"/emploisTemps"} className="nav-link">
                    Emplois du Temps
                  </Link>
            </li>

            {showEnseignantBoard && (
              <li className="nav-item">
                <Link to={"/enseignant"} className="nav-link">
                  Enseignant Board
                </Link>
              </li>
            )}

              

            {showEtudiantBoard && (
              <li className="nav-item">
                <Link to={"/etudiant"} className="nav-link">
                  Etudiant Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

           
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
          
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/emploisTemps" component={EmploisTemps} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/internaute" component={BoardInternaute} />
            <Route path="/enseignant" component={BoardEnseignant} />
            <Route exact path="/etudiant" component={BoardEtudiant} />
            <Route exact path="/cours" component={ListCoursComponent} />
            <Route exact path="/addCours" component={AddCoursComponent} />
            <Route exact path="/service" component={DemanderServiceComponent} />
            <Route path="/admin" component={BoardAdmin} />
          </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
/*

 {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
navbar-expand navbar-dark bg-dark 
*/