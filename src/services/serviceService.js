import axios from "axios";
import { Component } from "react";
import authHeader from './auth-header';
import AuthService from "./auth.service";


const SERVICE_API_BASE_URL = "http://localhost:8080/api/services/"

class ServiceService extends Component{

    state ={}
    constructor(props) {
        super(props);
    
        this.state = {
          currentUser: undefined
        };
    }
    componentDidMount() {
        
    }
    //, idEtudiant :  this.state.currentUser.id

    AddService(description){
        const user = AuthService.getCurrentUser();
        console.log(JSON.stringify(user));
        let service = {description : description, idEtudiant :  user.id}
        //console.log(user.id);
        console.log(JSON.stringify(service));
        //return service;
        return axios.post(SERVICE_API_BASE_URL, service, { headers: authHeader() });
    }
}
export default new ServiceService();