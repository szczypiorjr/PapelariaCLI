import React, { Component } from 'react'
import ProdutoDataService from '../service/ProdutoDataService';



class ListarProdutosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            produtos: [],
            message: null
        }
        this.excluirProdutoClicked = this.excluirProdutoClicked.bind(this)
        this.atualizarProdutoClicked = this.atualizarProdutoClicked.bind(this)
        this.addProdutoClicked = this.addProdutoClicked.bind(this)
        this.refreshProdutos = this.refreshProdutos.bind(this)
    }

    componentDidMount() {
        this.refreshProdutos();
    }

    refreshProdutos() {
        ProdutoDataService.listarprodutos()
            .then(
                response => {
                    //console.log(response);
                    this.setState({ produtos: response.data })
                }
            )
    }

    excluirProdutoClicked(id) {
        ProdutoDataService.excluirProduto(id)
            .then(
                response => {
                    this.setState({ message: `Exclusão do produto ${id} realizada com sucesso!` })
                    this.refreshProdutos()
                }
            )

    }

    addProdutoClicked() {
        this.props.history.push(`/produtos/-1`)
    }

    atualizarProdutoClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/produtos/${id}`)
    }

    render() {
        console.log('render')
        return (
            <div className="container">
                <h3>LISTA DE PRODUTOS CADASTRADOS</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                            <th>CODIGO</th>
							<th>NOME</th>
							<th>DETALHE</th>
							<th>COD.BARRAS</th>
							<th>CATEGORIA</th>
							<th>DESCRIÇÃO</th>
							<th>PREÇO</th>
							<th>PREÇO COM DESCONTO</th>
							<th>DESCONTO</th>
							<th>QUANTIDADE</th>
                             <th>ATUALIZAR</th>
                             <th>EXCLUIR</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.produtos.map(
                                    produto =>
                                        <tr key={produto.id}>
                                            <td align="right">  {produto.id}              </td>
                                            <td align="left">   {produto.nome}            </td>
                                            <td align="left">   {produto.detalhe}         </td>
                                            <td align="justify">{produto.codBarras}       </td>
                                            <td align="right">  {produto.categoria}       </td>
                                            <td align="left">   {produto.descricao}       </td>
                                            <td align="right">{produto.preco}             </td>
							                <td align="right">{produto.precoDesconto}     </td>
							                <td align="right">{produto.descontoPercentual}</td>
							                <td align="right">  {produto.quantidade}    </td>
                                            <td><button className="btn btn-success" onClick={() => this.atualizarProdutoClicked(produto.id)}>ATUALIZAR</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.excluirProdutoClicked(produto.id)}>EXCLUIR</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addProdutoClicked}>CADASTRAR</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListarProdutosComponent