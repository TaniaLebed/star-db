import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import {PeoplePage, PlanetsPage, StarshipsPage} from "../pages";
import StarshipDetails from "../sw-components/starship-details";

import {SwapiServiceProvider} from "../swapi-service-context/swapi-service-context";

import './app.css';
import SwapiService from "../../services/swapi-service";

import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

export default class App extends Component {

    swapiService = new SwapiService();

    render() {
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header />
                            <RandomPlanet />

                            <Switch>
                                <Route path="/"
                                       render={() => <h2>Welcome to StarDB</h2>}
                                       exact />
                                <Route path="/people/:id?" component={PeoplePage}/>
                                <Route path="/planets/" component={PlanetsPage}/>
                                <Route path="/starships/"
                                       component={StarshipsPage}
                                       exact />
                                <Route path="/starships/:id" render={({match}) => {
                                    const {id} = match.params;
                                    return <StarshipDetails itemId={id}/>
                                }}/>
                                <Route render={() => <h2>Page not found</h2>}/>
                            </Switch>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}