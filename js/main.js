const getLineLength = function (line) {
  const MAXLENGHT = 140;

  if (line.length <= MAXLENGHT) {
    return true;
  }

  return false;
};

getLineLength();

const randomNumber = function (min, max) {

  if (max <= min) {
    return false;
  }

  const RAND = min + Math.random() * (max + 1 - min);
  return Math.floor(RAND);

};

randomNumber();
