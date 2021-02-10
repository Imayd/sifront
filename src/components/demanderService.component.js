import React, { Component } from 'react';
import { BrowserRouter as Router  } from 'react-router-dom';
import ServiceService from '../services/serviceService';

class DemanderServiceComponent extends Component {
    
    //state = {};
    constructor(props){
        super(props);
        this.state = {
            message :"",
            success : false,
            description : ""
        }
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.handleService = this.handleService.bind(this);
    }
    
    componentDidMount() {
       
    }

    cancel (){
        this.props.history.push('/etudiant');
    }

    onChangeDescription (e){
        this.setState({
            description: e.target.value
          });
    }
    handleService(e){
        e.preventDefault();
        ServiceService.AddService(this.state.description).then(
            (res)=>{
            if(res.data)
            {
                this.setState({ 
                    message : "Success! Le service a bien été ajouté!",
                    success : true});
            }},
            error => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
    
              this.setState({
                message: resMessage
              });
            }
          );
    }
    
    render() {
        const {message , success, description } = this.state;
        return (
            <Router>
            <div>
            { success ? (

                <div class="alert alert-success centry">
                    {message}
                </div>

            ) : (
            <div>
                <h2 className="text-center titre">Demander un service de l'administration</h2>
                <div className="row">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <div class="md-form">
                                    <label for="description">Veuillez décrire le service à demander</label>
                                    <textarea id="description" class="md-textarea form-control" rows="4" value={this.state.description} onChange={this.onChangeDescription}></textarea>
                                    
                                </div>
                            </div>
                            <button className="btn btn-primary" onClick={this.handleService}>Valider</button>
                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Annuler</button>
                        </form>
                    </div>
                </div>
            </div>)
            }
            </div>
            </Router>
        );
    }
}

export default DemanderServiceComponent;