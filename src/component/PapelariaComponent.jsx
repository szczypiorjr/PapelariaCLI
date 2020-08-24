import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ListarProdutosComponent from './ListarProdutosComponent';
import ProdutoComponent from './ProdutoComponent';

class PapelariaComponent extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>SISTEMA PAPELARIA - SISPAP</h1>
                    <Switch>
                        <Route path="/" exact component={ListarProdutosComponent} />
                        <Route path="/produtos" exact component={ListarProdutosComponent} />
                        <Route path="/produtos/:id" component={ProdutoComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default PapelariaComponent