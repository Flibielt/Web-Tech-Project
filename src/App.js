import React from 'react';
import './App.scss';

import Layout from "./components/Layout";
import FishermanInfo from "./components/fisherman/FishermanInfo";

function App() {
  return (
    <div className="App">
      <Layout>
          <FishermanInfo/>
      </Layout>
    </div>
  );
}

export default App;
