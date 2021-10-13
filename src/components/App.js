import { lazy, Suspense, useState } from 'react';
import { Context } from '../data/Context';

const Main = lazy(() => import('./Main').then(module => ({default:module.Main})));

function App() {

  let [username, setUsername] = useState("");

  const [fetchName, setFetchName] = useState("");

  return (
    <div className="App">
      
      <Suspense fallback={<h1>Loading...</h1>}>

        <Context.Provider value={{
          username, setUsername,
          fetchName, setFetchName
          }}>

          <Main/> 

        </Context.Provider>

      </Suspense>

    </div>
  );
}

export default App;
