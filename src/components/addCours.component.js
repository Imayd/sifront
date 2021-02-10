import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CoursService from "../services/coursService"

const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
};


class AddCoursComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            libelle :"",
            elementModule : "",
            enseignant : "",
            motCle : "",
            message: "",
            success: false
        }
    this.handleAction = this.handleAction.bind(this);
    this.onChangeLibelle = this.onChangeLibelle.bind(this);
    this.onChangeElementModule = this.onChangeElementModule.bind(this);
    this.onChangeEnseignant = this.onChangeEnseignant.bind(this);
    this.onChangeMotCle = this.onChangeMotCle.bind(this);
    }

    onChangeLibelle(e) {
        this.setState({
          libelle: e.target.value
        });
    }

    onChangeElementModule(e) {
        this.setState({
          elementModule: e.target.value
        });
    }

    onChangeEnseignant(e) {
        this.setState({
          enseignant: e.target.value
        });
    }

    onChangeMotCle(e) {
        this.setState({
          motCle: e.target.value
        });
    }


    handleAction(e) {
        e.preventDefault();
    
        this.setState({
          message: "",
          success: false
        });

        let cours = {
                      libelle : this.state.libelle,
                      motCle : this.state.motCle,
                      elementModule : this.state.elementModule
                    }
        CoursService.addCours(cours).then(

          (res)=>{
            if(res.data)
            {
                this.setState({ 
                    message : "Success! Le cours a bien été ajouté!",
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

    cancel (){
      this.props.history.push('/cours');
    }

    render() {

        const {message , success } = this.state;
        return (
          <Router>
          <div>
          { success ? (

              <div class="alert alert-success centry">
                  {message}
              </div>

          ) : (
              <div className="container">
                <div className="card col-md-6 offset-md-3 ofsset-ms-3">
                  
                  <div>
                    <form>
                    <h2 className="text-center titry"> Ajouter un cours</h2>
                      <div className="form-group">
                        <label>Libelle du cours</label>
                        <input placeholder="Libelle" name="libelle" className="form-control"
                          value={this.state.libelle} onChange={this.onChangeLibelle}/>
                      </div>
                      <div className="form-group">
                        <label>Element du Module</label>
                        <input placeholder="Element du Module" name="elementModule" className="form-control"
                          value={this.state.elementModule} onChange={this.onChangeElementModule}/>
                      </div>
                      <div className="form-group">
                        <label>Enseignant</label>
                        <input placeholder="Enseignant" name="enseignant" className="form-control"
                          value={this.state.enseignant} onChange={this.onChangeEnseignant}/>
                      </div>
                      <div className="form-group">
                        <label>Mot Clé associé au cours</label>
                        <input placeholder="Mot Clé" name="motCle" className="form-control"
                          value={this.state.motCle} onChange={this.onChangeMotCle}/>
                      </div>
                      <button className="btn btn-primary" onClick={this.handleAction}>Valider</button>
                      <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Annuler</button>
                        
                    </form>
                  </div>
                </div>

              </div>)}
            </div>
            </Router>
        );
    }
} 

export default AddCoursComponent;
/**
 * <div className="form-group">
                    <label>Libelle</label>
                    <input type="text" className="form-control" placeholder="Libelle"
                    onChange={e => this.libelle = e.target.value}/>

                </div>
                <div className="form-group">
                    <label>Element de Module</label>
                    <input type="text" className="form-control" placeholder="Element de module"
                                onChange={e => this.elementModule = e.target.value}/>
                </div>

                <div className="form-group">
                    <label>Enseignant</label>
                    <input type="text" className="form-control" placeholder="Enseignant"
                    onChange={e => this.enseignant = e.target.value}/>
                </div>

                <div className="form-group">
                    <label>Mot clé</label>
                    <input type="text" className="form-control" placeholder="Mot clé"
                                onChange={e => this.motCle = e.target.value}/>
                </div>
 */

 /*
 <Router>
            <div className="container">
                <h2 className="text-center titre"> Ajouter un cours</h2>
                <Form
                    onSubmit={this.handleRegister}
                    ref={c => {
                    this.form = c;
                    }}
                >
                    <div className="form-group">
                    <label htmlFor="libelle">Libelle</label>
                    <Input
                        type="text"
                        className="form-control"
                        name="libelle"
                        value={this.state.libelle}
                        onChange={this.onChangeLibelle}
                        validations={[required]}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="elementModule">Element de Module</label>
                    <Input
                        type="text"
                        className="form-control"
                        name="elementModule"
                        value={this.state.elementModule}
                        onChange={this.onChangeElementModule}
                        validations={[required]}
                    />
                    </div>

                    <div className="form-group">
                    <label htmlFor="enseignant">Enseignant</label>
                    <Input
                        type="text"
                        className="form-control"
                        name="enseignant"
                        value={this.state.enseignant}
                        onChange={this.onChangeEnseignant}
                        validations={[required]}

                    />
                    </div>

                    <div className="form-group">
                    <label htmlFor="password">Mot clé</label>
                    <Input
                        type="text"
                        className="form-control"
                        name="motCle"
                        value={this.state.motCle}
                        onChange={this.onChangeMotCle}
                        validations={[required]}
                    />
                    </div>
                </Form>
                
            </div>
            </Router>
 */
/*
this.form.validateAll();
        if (this.checkBtn.context._errors.length === 0) {
            CoursService.addCours(this.state.libelle, this.state.elementModule,
                this.state.enseignant, this.state.motCle).then(
                response => {
                  this.setState({
                    message: response.data.message,
                    successful: true
                  });
                },
                error => {
                  const resMessage =
                    (error.response &&
                      error.response.data &&
                      error.response.data.message) ||
                    error.message ||
                    error.toString();
        
                  this.setState({
                    successful: false,
                    message: resMessage
                  });
                }
*/