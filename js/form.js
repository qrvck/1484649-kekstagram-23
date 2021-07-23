import {isEscEvent} from './util.js';
import './form-validation.js';

const uploadFileBtn = document.querySelector('#upload-file');
const imageEditing = document.querySelector('.img-upload__overlay');
const closeImageEditingBtn = document.querySelector('#upload-cancel');


const openImageEditing = function () {
  imageEditing.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const closeImageEditing = function () {
  imageEditing.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const onEscKeydown = (evt) => {
  if(isEscEvent(evt)) {
    closeImageEditing();

    uploadFileBtn.innerHTML = '';
    document.removeEventListener('keydown', onEscKeydown);

  }
};

uploadFileBtn.addEventListener('change', () => {
  openImageEditing();

  document.addEventListener('keydown', onEscKeydown);
});

closeImageEditingBtn.addEventListener('click', () => {
  closeImageEditing();

  uploadFileBtn.innerHTML = '';
  document.removeEventListener('keydown', onEscKeydown);
});
