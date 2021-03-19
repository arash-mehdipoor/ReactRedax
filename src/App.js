import React, { useEffect, Fragment } from 'react';
import SearchBar from './components/layout/SearchBar';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/tech/AddTechModal';
import TechListModal from './components/tech/TechListModal';
import Logs from './components/logs/Logs';
import { Provider } from 'react-redux';
import Store from './Store';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';

const App = () => {
  useEffect(() => {
    M.AutoInit()
  })


  return (
    <Provider store={Store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <Logs />
          <AddBtn />
          <TechListModal />

          <AddLogModal />
          <AddTechModal />

          <EditLogModal />
        </div>
      </Fragment>
    </Provider>

  )

}

export default App
