import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.scss';

import Layout from "./components/Layout";
import FishermanInfo from "./components/fisherman/FishermanInfo";
import Overview from "./components/overview/Overview";

function App() {
  return (
    <div className="App">
      <Layout>
          <Switch>
              <Route path="/overview" exact component={Overview} />
              <Route path="/profile" exact component={FishermanInfo} />
              <Route path="/" exact component={Overview} />
          </Switch>
      </Layout>
    </div>
  );
}

export default App;
