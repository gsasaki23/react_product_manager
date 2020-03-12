import React from 'react';
import {Router, Redirect} from '@reach/router';
import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import Edit from './views/Edit';
import NotFound from './views/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Redirect from="/" to="/products" noThrow="true" />
        <Main path="products/"/>
        <Detail path="products/:id"/>
        <Edit path="products/:id/edit"/>
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
