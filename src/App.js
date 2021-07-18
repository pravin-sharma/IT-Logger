import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';

const App = () => {

  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  })

  return (
    <Fragment>
      <SearchBar />
      <div className='container'>
        <Logs />
      </div>
      <AddBtn />
    </Fragment>
  );
}

export default App;
