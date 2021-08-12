import logo from './logo.svg';
import './App.css';
import React from 'react';

function Helloworld(props){
    console.log(props);
    return(
        <div id="hello">
            <h3>{props.mytext}</h3>
            <p>{props.subtitulo}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            Este es mi componente:
            <Helloworld mytext="Carlos!" subtitulo="Nuevo mensaje"/>
            <Helloworld mytext="Miguell!" subtitulo="Nuevo manzanas"/>
            <Helloworld mytext="Manuel!" subtitulo="Nuevo peras"/>
        </div>
    );
}

export default App;
