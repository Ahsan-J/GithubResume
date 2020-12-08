import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './core-features/i18n';
console.log(process.env)
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
