import React from 'react';
import { HashRouter, Route, hashHistory } from 'react-router-dom';
import Home from './components/Home';
import ArticleList from './components/ArticleList';
// import more components
//The exact param disables the partial matching for a route and makes sure that it only
// returns the route if the path is an EXACT match to the current url.
export default (
    <HashRouter history={hashHistory}>
     <div>
      <Route exact path='/' component={Home} />
      <Route  path='/articlelist' component={ArticleList} />
     </div>
    </HashRouter>
);
