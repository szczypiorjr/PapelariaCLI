import axios from 'axios'

const PAPELARIA_API_URL = 'http://localhost:9000/PapelariaAPI'
const LISTAR_PRODUTOS = `${PAPELARIA_API_URL}/produtos`
const OBTER_PRODUTO = `${LISTAR_PRODUTOS}/produto`
const EXCLUIR_PRODUTO = `${LISTAR_PRODUTOS}/excluir`
const ATUALIZAR_PRODUTO = `${LISTAR_PRODUTOS}/atualizar`
const CADASTRAR_PRODUTO = `${LISTAR_PRODUTOS}/cadastrar`

class ProdutoDataService {

    listarprodutos() {
        //console.log('listarprodutos')
        return axios.get(`${LISTAR_PRODUTOS}`);
    }

    obterProduto(id) {
        //console.log('obterProduto')
        return axios.get(`${OBTER_PRODUTO}/${id}`);
    }

    excluirProduto(id) {
        //console.log('excluirProduto')
        return axios.delete(`${EXCLUIR_PRODUTO}/${id}`);
    }

    atualizarProduto(id,produto) {
        //console.log('atualizarProduto')
        return axios.put(`${ATUALIZAR_PRODUTO}`, produto);
    }

    cadastrarProduto(produto) {
        //console.log('cadastrarProduto')
         return axios.post(`${CADASTRAR_PRODUTO}`, produto);
    }
}

export default new ProdutoDataService()