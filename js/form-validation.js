import {checkStringLength} from './util.js';

const hashtagsInput = document.querySelector('.text__hashtags');
const maxHashtagsInputLength = 20;
const maxNumberHashtags = 5;
const descriptionInput = document.querySelector('.text__description');
const descriptionInputLength = 140;

const re = /^#[A-Za-zА-Яа-я0-9]/;

hashtagsInput.addEventListener('input', () => {
  const inputArray = hashtagsInput.value.split(' ');

  for (let i = 0; i < inputArray.length; i++) {
    if (!re.test(inputArray[i])) {
      hashtagsInput.setCustomValidity('Хэш-тег должен начинаться с символа # и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.');
    } else if (inputArray[i].length > maxHashtagsInputLength) {
      hashtagsInput.setCustomValidity('Максимальная длина одного хэш-тега 20 символов, включая #');
    } else if (inputArray.length > maxNumberHashtags) {
      hashtagsInput.setCustomValidity('Нельзя указать больше пяти хэш-тегов');
    } else {
      hashtagsInput.setCustomValidity('');
    }
  }
  hashtagsInput.reportValidity();
});

hashtagsInput.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});


descriptionInput.addEventListener('input', () => {
  if (!checkStringLength(descriptionInput.value, descriptionInputLength)) {
    descriptionInput.setCustomValidity('Длина комментария не может составлять больше 140 символов');
  } else {
    descriptionInput.setCustomValidity('');
  }
  descriptionInput.reportValidity();
});

hashtagsInput.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});
