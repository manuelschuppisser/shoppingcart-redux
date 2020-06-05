import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import './App.css';
import { Provider } from 'react-redux';
import store from './store.js'
import { BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <BrowserRouter>
    <Navbar/> 
    <Switch>
    <Route exact path = "/" components={Home} />
    <Route path = "/cart" components={Cart} />
    </Switch>
    </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
