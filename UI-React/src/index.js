import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
//import './styles/semantic.slate.min.css'
import 'semantic-ui-css/semantic.min.css';
//import '../semantic/dist/semantic.min.css';

ReactDOM.render((
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  ), document.getElementById('root'))
registerServiceWorker();