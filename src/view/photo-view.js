
import AbstractView from '../framework/view/abstract-view';

function createPhotoeTemplate (destination) {
  const photo = destination.pictures[0].src;
  return (`
    <img class="event__photo" src="${photo}">
  `);
}

export default class PhotoeTemplate extends AbstractView{
  constructor(destination) {
    super();
    this.destination = destination;
  }

  get template() {
    return createPhotoeTemplate(this.destination);
  }
}
