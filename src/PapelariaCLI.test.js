import React from 'react';
import ReactDOM from 'react-dom';
import PapelariaComponent from './component/PapelariaComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PapelariaComponent/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
