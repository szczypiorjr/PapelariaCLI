import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ProdutoDataService from '../service/ProdutoDataService';



class ProdutoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            nome: '',
            detalhe: '',
            codBarras: '',
            categoriaId: '',
            descricao: '',
            preco: '',
            precoDesconto: '',
            descontoPercentual: '',
            quantidade: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {

        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        ProdutoDataService.obterProduto(this.state.id)
            .then(response => this.setState({
            nome:  response.data.nome,
            detalhe: response.data.detalhe,
            codBarras: response.data.codBarras,
            categoriaId: response.data.categoriaId,
            descricao: response.data.descricao,
            preco: response.data.preco,
            precoDesconto: response.data.precoDesconto,
            descontoPercentual: response.data.descontoPercentual,
            quantidade: response.data.quantidade
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.nome) {
            errors.description = 'digite o nome!'
        } else if (values.nome.length < 5) {
            errors.nome = 'digite pelo menos 5 Characteres no campo nome!'
        }

        return errors

    }

    onSubmit(values) {
       

        let produto = {
            id                  :this.state.id,
            nome                :values.nome,
            detalhe             :values.detalhe,
            codBarras           :values.codBarras,
            categoriaId         :values.categoriaId,
            descricao           :values.descricao,
            preco               :values.preco,
            precoDesconto       :values.precoDesconto,
            descontoPercentual  :values.descontoPercentual,
            quantidade          :values.quantidade
        }

        if (this.state.id === '-1') {
            produto.id='';
            ProdutoDataService.cadastrarProduto(produto)
                .then(() => this.props.history.push('/produtos'))
        }
         else {
            ProdutoDataService.atualizarProduto(this.state.id,produto)
                .then(() => this.props.history.push('/produtos'))
        }

        console.log(values);
    }

    render() {

     
        let { id,
            nome,
            detalhe,
            codBarras,
            categoriaId,
            descricao,
            preco,
            precoDesconto,
            descontoPercentual,
            quantidade
             } = this.state


        return (
            <div>
                <h3>Produto</h3>
                <div className="container">
                    <Formik
                        initialValues={{  id,
                            nome,
                            detalhe,
                            codBarras,
                            categoriaId,
                            descricao,
                            preco,
                            precoDesconto,
                            descontoPercentual,
                            quantidade }}
                       
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}>
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="nome" component="div"
                                        className="alert alert-warning" />
                                    
                                    <fieldset className="form-group">
                                        <label>id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                  
                                    <fieldset className="form-group">
                                        <label>nome</label>
                                        <Field className="form-control" type="text" name="nome" />
                                    </fieldset>
                                  
                                    <fieldset className="form-group">
                                        <label>detalhe</label>
                                        <Field className="form-control" type="text" name="detalhe" />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>codBarras</label>
                                        <Field className="form-control" type="text" name="codBarras" />
                                    </fieldset>
                                    
                                    <fieldset className="form-group">
                                        <label>categoria</label>
                                        <Field className="form-control" type="text" name="categoriaId" />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>descricao</label>
                                        <Field className="form-control" type="text" name="descricao" />
                                    </fieldset>
                                    
                                    <fieldset className="form-group">
                                        <label>preco</label>
                                        <Field className="form-control" type="text" name="preco" />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>precoDesconto</label>
                                        <Field className="form-control" type="text" name="precoDesconto" />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>descontoPercentual</label>
                                        <Field className="form-control" type="text" name="descontoPercentual" />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>quantidade</label>
                                        <Field className="form-control" type="text" name="quantidade" />
                                    </fieldset>

                                    <button className="btn btn-success" type="submit">SALVAR</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default ProdutoComponent