import React, { Component } from 'react';
import './PapelariaCLI.css';
import PapelariaComponent from './component/PapelariaComponent';

class PapelariaCLI extends Component {
  render() {
    return (
      <div className="container">
        <PapelariaComponent/>
      </div>
    );
  }
}

export default PapelariaCLI;
