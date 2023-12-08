import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//renderiza la el componente creado en App.js, mandando esto al index.hmtl para que se renderice 
//el siguiente const obtiene de index.html el elemento con el id que se le mandara App.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
