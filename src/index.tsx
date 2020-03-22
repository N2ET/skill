import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Graph from './mod-graph/index';
import Layout from './mod-layout/Layout';
import Hook from './mod-hook/index';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
  

    <Layout>
      <Graph />
      <Hook />
    </Layout>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
