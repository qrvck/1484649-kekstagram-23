const randomNumber = function (min, max) {

  if (max <= min) {
    const TEMP = min;
    min = max;
    max = TEMP;
  }

  const RAND = min + Math.random() * (max + 1 - min);
  return Math.abs(Math.floor(RAND));

};

function checkStringLength (string, length) {
  return string.length <= length;
}

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

export {randomNumber, isEscEvent, checkStringLength};
