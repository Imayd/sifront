import React, { Component } from 'react';
import coursService from '../services/coursService';
import { BrowserRouter as Router  } from 'react-router-dom';
import AuthService from "../services/auth.service";
class ListCoursComponent extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            cours : [],
            admin : false
        }
        this.addCours = this.addCours.bind(this);
    }
    
    
    componentDidMount() {
        coursService.getCours().then((res)=>{
            this.setState({ cours : res.data});
        });
        const user = AuthService.getCurrentUser();
        if(user.roles.includes("ROLE_ADMIN")){
            this.setState({admin : true})
        }
    }
    addCours(e) {
        this.props.history.push('/addCours');
    }
    updateCours(e){

    }

    deleteCours(e){
        
    }
    
    render() {
        const {admin } = this.state;
        
        return (
            <Router>

            <div>
                <h2 className="text-center titre">La liste des cours</h2>
                <div>{ admin ? ( 
                    <div className="row">
                        <button className="btn btn-primary" onClick={this.addCours}>Ajouter un Cours</button>
                    </div>
                ) : ""}
                </div><br></br>
                
                <div className="row">
                    <table className = "table table-striped table-bordered tablo">
                        <thead>
                            <tr>
                                <th>Label du Cours</th>
                                <th>Mot clé associé au cours</th>
                                <th>Element de Module</th>
                                <th>Enseignant</th>
                                <th>Télécharger</th>
                                { admin ? ( <th>
                                    Actions
                                </th>) : ""}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.cours.map(
                                    cour => 
                                    <tr key= {cour.id}>
                                        <td> {cour.label}</td>
                                        <td> {cour.mot_clé}</td>
                                        <td> {cour.elementModule.libelle}</td>
                                        <td> {cour.elementModule.prof.name}</td>
                                        <td><a href="">télécharger</a></td>
                                        { admin ? ( <td>
                                            <div className="row">
                                                <div><button style={{marginLeft: "10px"}} className="btn btn-warning" onClick={this.updateCours}>Modifier </button></div>
                                                <div><button style={{marginLeft: "10px"}} className="btn btn-danger" onClick={this.deleteCours}>Supprimer </button></div>
                                            </div>
                                        </td>) : ""}
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            
            </div>
         </Router>
        );
    }
}

export default ListCoursComponent;