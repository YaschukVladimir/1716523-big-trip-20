
import TripEventsListPresenter from './trip-events-presenter.js';
import PointsModel from './model/way-point-model.js';

import FilterPresenter from './filter-presenter.js';

import NewPointButtonView from './view/add-new-point-button-view.js';
import { render } from './framework/render.js';

import FilterModel from './model/filter-model.js';

import PointsApiService from './points-api-service.js';


const AUTHORIZATION = 'Basic kr321B66vrW3Zi5s';
// const END_POINT = 'https://20.ecmascript.pages.academy/big-trip';
const END_POINT = 'https://20.ecmascript.htmlacademy.pro/big-trip';

const siteMainElement = document.querySelector('.page-main');
const tripEventsElement = siteMainElement.querySelector('.trip-events');

const siteHeaderElement = document.querySelector('.page-header');
const siteFiltersElement = siteHeaderElement.querySelector('.trip-controls__filters');
const tripMainElement = document.querySelector('.trip-main');


const pointsModel = new PointsModel({
  pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION)
});

const filterModel = new FilterModel();

const eventsListPresenter = new TripEventsListPresenter({
  listContainer: tripEventsElement, pointsModel, filterModel, onNewPointDestroy: handleNewPointFormClose});

const filterPresenter = new FilterPresenter({
  filterContainer:siteFiltersElement,
  pointsModel,
  filterModel,
});


const newPointButtonComponent = new NewPointButtonView({
  onClick: handleNewPointButtonClick
});

function handleNewPointFormClose() {
  newPointButtonComponent.element.disabled = false;
}

function handleNewPointButtonClick() {
  eventsListPresenter.createPoint();
  newPointButtonComponent.element.disabled = true;
}

pointsModel.init()
  .then(() => {
    render(newPointButtonComponent, tripMainElement);
  })
  .catch(() => {
    render(newPointButtonComponent, tripMainElement);
    newPointButtonComponent.element.disabled = true;
  });


filterPresenter.init();
eventsListPresenter.init();
