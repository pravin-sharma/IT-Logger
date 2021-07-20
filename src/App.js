import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import ListTechModal from './components/techs/ListTechModal';

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
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <ListTechModal />
      </div>
      <AddBtn />
    </Fragment>
  );
}

export default App;
