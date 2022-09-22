import React from 'react';
import { useState } from 'react';

const BtnCambiarTitulo = () => {
    const [palabra, setPalabra]= useState('Hello my friend');
    
    const cambiar = () => {
setPalabra(palabra + ' (from changed state)!')
        
    }
    return (
        <div>
            <h1>{palabra}</h1>
            <button onClick={cambiar}>Click me</button>
        </div>
    );
};

export default BtnCambiarTitulo;