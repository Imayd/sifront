import axios from "axios";
import authHeader from './auth-header';



const COURS_API_BASE_URL = "http://localhost:8080/api/cours/"

class CoursService {
    getCours(){
        return axios.get(COURS_API_BASE_URL,{ headers: authHeader() });
    }
    addCours(cours){
        return axios.post(COURS_API_BASE_URL, cours,{ headers: authHeader() });
    }
    updateCours(){
        return axios.put(COURS_API_BASE_URL,{ headers: authHeader() });
    }

    deleteCours(){
        return axios.delete(COURS_API_BASE_URL,{ headers: authHeader() });
    }
}
export default new CoursService();