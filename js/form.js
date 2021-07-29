import {isEscEvent} from './util.js';
import './form-validation.js';

const uploadFileBtn = document.querySelector('#upload-file');
const imageEditing = document.querySelector('.img-upload__overlay');
const closeImageEditingBtn = document.querySelector('#upload-cancel');

const uploadForm = document.querySelector('#upload-select-image');


const openImageEditing = function () {
  imageEditing.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeydown);
};

const closeImageEditing = function () {
  imageEditing.classList.add('hidden');
  document.body.classList.remove('modal-open');

  // uploadFileBtn.value = '';
  uploadForm.reset();
  document.removeEventListener('keydown', onEscKeydown);
};

function onEscKeydown (evt) {
  if(isEscEvent(evt)) {
    closeImageEditing();

    uploadForm.reset();
    document.removeEventListener('keydown', onEscKeydown);

  }
}

uploadFileBtn.addEventListener('change', () => {
  openImageEditing();
});

closeImageEditingBtn.addEventListener('click', () => {
  closeImageEditing();
});
