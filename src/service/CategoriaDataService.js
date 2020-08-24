import axios from 'axios'

const PAPELARIA_API_URL = 'http://localhost:9000/PapelariaAPI'
const LISTAR_CATEGORIAS = `${PAPELARIA_API_URL}/categorias`


class CategoriaDataService {

    listarcategorias() {
        //console.log('listarcategorias')
        return axios.get(`${LISTAR_CATEGORIAS}`);
    }

}
export default new CategoriaDataService()