// import { createElement } from '../render';
import AbstractView from '../framework/view/abstract-view';

function createPhotoesContainerTemplate () {
  return (`
  <div class="event__photos-tape">
    <img class="event__photo" src="img/photos/1.jpg" alt="Event photo">
    <img class="event__photo" src="img/photos/2.jpg" alt="Event photo">
    <img class="event__photo" src="img/photos/3.jpg" alt="Event photo">
    <img class="event__photo" src="img/photos/4.jpg" alt="Event photo">
    <img class="event__photo" src="img/photos/5.jpg" alt="Event photo">
</div>`);
}

export default class PhotoesContainer extends AbstractView {
  get template() {
    return createPhotoesContainerTemplate();
  }
}
