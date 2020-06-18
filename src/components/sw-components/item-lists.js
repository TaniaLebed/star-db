import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helpers';

const withChildFunction = (Wrapped) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {({ name }) => <span>{name}</span>}
      </Wrapped>
    )
  };
};

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
}

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
}

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
}

const PersonList = withSwapiService(
    withData(withChildFunction(ItemList)),
    mapPersonMethodsToProps
);

const PlanetList = withSwapiService(
    withData(withChildFunction(ItemList)),
    mapPlanetMethodsToProps
);

const StarshipList = withSwapiService(
    withData(withChildFunction(ItemList)),
    mapStarshipMethodsToProps
);

export {
  PersonList,
  PlanetList,
  StarshipList
};
