import {Route, Switch, BrowserRouter, withRouter} from "react-router-dom";
import Main from "./components/Main/Main";
import Albums from "./components/Albums/Albums";
import React from "react";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import './App.css'
import Toolbar from "./components/UI/Toolbar/Toolbar";

const App = () => {
    return (
        <div>
            <Toolbar/>
            <div className="container">
                <div className="container-inner">
                    <Switch>
                        <Route path="/" exact component={Main}/>
                        <Route path="/music" exact component={Main}/>
                        <Route path="/music/:id" component={Albums}/>
                        <Route path="/register" exact component={Register}/>
                        <Route path="/login" exact component={Login}/>
                    </Switch>
                </div>
            </div>
        </div>
    )
};

export default App;