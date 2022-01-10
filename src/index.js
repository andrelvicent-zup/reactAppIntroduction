import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'

ReactDOM.render(
<div>
  <Primeiro />
  <ComParametro titulo="Componente" subtitulo="create component"/>
</div>,
  document.getElementById('root')
);
