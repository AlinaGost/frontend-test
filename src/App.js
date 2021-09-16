import React from "react";
import './styles/App.css';
import Main from "./pages/Main";
import {BrowserRouter, Route} from "react-router-dom";
import Account from "./pages/Account";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <BrowserRouter>
      <div className={'App'}>
          <Route exact path={'/'} render={() => <Main />} />
          <Route path={'/contacts'} render={() => <Contacts />} />
          <Route path={'/account'} render={() => <Account />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
