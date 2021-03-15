import React, { useEffect, Fragment } from 'react';
import Logs from './components/logs/Logs';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';
import SearchBar from './components/layout/SearchBar';
import AddBtn from './components/layout/AddBtn';

const App = () => {
  useEffect(() => {
    M.AutoInit()
  })


  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <Logs />
        <AddBtn />
      </div>
    </Fragment>
  )

}

export default App
