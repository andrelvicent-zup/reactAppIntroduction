import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'

ReactDOM.render(
<div>
  <ComFilhos>
    <ul>
      <li>Ana</li>
      <li>Andressa</li>
      <li>André</li>
      <li>Abobra</li>
    </ul>
  </ComFilhos>
{  //<Primeiro />
  //<ComParametro titulo="Componente" subtitulo="create component"/>
}
</div>,
  document.getElementById('root')
);
