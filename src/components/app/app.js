import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import {PeoplePage, PlanetsPage, StarshipsPage} from "../pages";

import {SwapiServiceProvider} from "../swapi-service-context/swapi-service-context";

import './app.css';
import SwapiService from "../../services/swapi-service";

export default class App extends Component {

    swapiService = new SwapiService();

    render() {
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className="stardb-app">
                        <Header />
                        <RandomPlanet />

                        <PeoplePage/>
                        <PlanetsPage/>
                        <StarshipsPage/>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}