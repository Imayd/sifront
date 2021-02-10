import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'internaute');
  }

  getEtudiantBoard() {
    return axios.get(API_URL + 'etudiant', { headers: authHeader() });
  }

  getEnseignantBoard() {
    return axios.get(API_URL + 'enseignant', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();
