/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './layout/Card';
import './App.css'

export default (props) => (
    <div className="App">
    <Card titulo="Primeiro componente">
        <Primeiro />
    </Card>
    <Card titulo="Componente com parâmetro">
        <ComParametro titulo="Componente" subtitulo="create component"/>
    </Card>
    <Card titulo="Componente com filhos">
        <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Andressa</li>
                <li>André</li>
                <li>Abobra</li>
            </ul>
        </ComFilhos>    
    </Card>
    </div>
);
