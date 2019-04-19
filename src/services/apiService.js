import axios from 'axios';
const http = axios.create()
const api = {
    async getCharacter(character) {
        return (await http.get(`https://test-khapi.frannsoft.com/api/characters/name/${character}`)).data
    }
}
export default api;