import {similarPosts} from './pictures.js';
import {isEscEvent} from './util.js';

const bigPictureList = document.querySelector('.big-picture');
const bigPictireImg = bigPictureList.querySelector('.big-picture__img').querySelector('img');
const bigPictureLikes = bigPictureList.querySelector('.likes-count');
const bigPicturesCountComments = bigPictureList.querySelector('.comments-count');
const bigPicturesCommentsList = bigPictureList.querySelector('.social__comments');
const bigPictureDescription = bigPictureList.querySelector('.social__caption');

const pictures = document.querySelectorAll('.picture');

const btnCloseBigPicture = bigPictureList.querySelector('.big-picture__cancel');


const closebigPictureList = function () {
  bigPictureList.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const onEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    closebigPictureList();

    document.removeEventListener('keydown', onEscKeydown);
  }
};

// обработчкик закрытия большого изображения по нажатию на крестик
btnCloseBigPicture.addEventListener('click', () => {
  closebigPictureList();

  document.removeEventListener('keydown', onEscKeydown);
});

//обработчкик откытия большого изображения
const createBigPicture = function(i) {
  pictures[i].addEventListener('click', () => {
    //отображает большое изображение, кол-во лайков и комметариев
    bigPictureList.classList.remove('hidden');
    bigPictireImg.src = similarPosts[i].url;
    bigPictureLikes.textContent = similarPosts[i].likes;
    bigPicturesCountComments.textContent = similarPosts[i].comments.length;
    bigPicturesCommentsList.textContent = '';

    // добавляет комментарии
    similarPosts[i].comments.forEach(({avatar, message}) => {
      const bigPictureComment = document.createElement('li');
      bigPictureComment.classList.add('social__comment');
      const bigPictureCommentAvatar = document.createElement('img');
      bigPictureCommentAvatar.classList.add('social__picture');
      bigPictureCommentAvatar.src = avatar;
      bigPictureCommentAvatar.width = 35;
      bigPictureCommentAvatar.height = 35;
      bigPictureComment.appendChild(bigPictureCommentAvatar);
      const bigPictureCommentText = document.createElement('p');
      bigPictureCommentText.classList.add('social__text');
      bigPictureCommentText.textContent = message;
      bigPictureComment.appendChild(bigPictureCommentText);
      bigPicturesCommentsList.appendChild(bigPictureComment);
    });

    //добавляет описание фото
    bigPictureDescription.textContent = similarPosts[i].description;

    document.body.classList.add('modal-open');

    document.addEventListener('keydown', onEscKeydown);
  });
};

for (let i = 0; i < pictures.length; i++) {
  createBigPicture(i);
}
