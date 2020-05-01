import React from 'react';
import './App.scss';

import Layout from "./components/Layout";
import CatchForm from "./components/fisherman/catches/CatchForm";
import CatchList from "./components/fisherman/catches/CatchList";

function App() {
  return (
    <div className="App">
      <Layout>
          <CatchForm/>
          <CatchList/>
      </Layout>
    </div>
  );
}

export default App;
