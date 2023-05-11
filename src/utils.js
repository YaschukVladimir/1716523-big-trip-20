import dayjs from 'dayjs';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

const DATE_FORMAT = 'MMMM DD';
const TIME_FORMAT = 'hh:mm';

const FULL_DATE_FORMAT = 'DD/MM/YY hh:mm';

function editFullDate (eventsDate) {
  return dayjs(eventsDate).format(FULL_DATE_FORMAT);
}

function editEventsDate (eventsDate) {
  return dayjs(eventsDate).format(DATE_FORMAT);
}
function editEventsTime (eventsDate) {
  return dayjs(eventsDate).format(TIME_FORMAT);
}

function createUniqIdAcc () {
  let uniqId = 1;
  return function () {
    return uniqId++;
  };
}

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createUniqId (min, max) {
  const uniqIdArr = [];
  return function() {
    while(uniqIdArr.length < max) {
      const currentValue = getRandomInteger(min, max);
      if (!uniqIdArr.includes(currentValue)) {
        uniqIdArr.push(currentValue);
        return currentValue;
      }
    }
  };
}


export {getRandomArrayElement, editEventsDate, getRandomNumber, editEventsTime, createUniqId, getRandomInteger, editFullDate, createUniqIdAcc};
