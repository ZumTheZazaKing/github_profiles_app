import { lazy, Suspense, useState } from 'react';
import { Context } from '../data/Context';

import CircularProgress from '@mui/material/CircularProgress';

const Main = lazy(() => import('./Main').then(module => ({default:module.Main})));

function App() {

  let [username, setUsername] = useState("");

  let [fetchData, setFetchData] = useState({});

  return (
    <div className="App">
      
      <Suspense fallback={<div id="mainLoading"><CircularProgress size={60} className="loading" disableShrink/></div>}>

        <Context.Provider value={{
          username, setUsername,
          fetchData, setFetchData
          }}>

          <Main/> 

        </Context.Provider>

      </Suspense>

    </div>
  );
}

export default App;
