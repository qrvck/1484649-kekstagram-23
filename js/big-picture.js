import {similarPosts} from './pictures.js';
import {isEscEvent} from './util.js';

const bigPictureList = document.querySelector('.big-picture');
const bigPictireImg = bigPictureList.querySelector('.big-picture__img').querySelector('img');
const bigPictureLikes = bigPictureList.querySelector('.likes-count');
const bigPicturesCountComments = bigPictureList.querySelector('.comments-count');
// const bigPicturesShowComments = bigPictureList.querySelector('.');
const bigPicturesCommentsList = bigPictureList.querySelector('.social__comments');
const bigPictureDescription = bigPictureList.querySelector('.social__caption');

const pictures = document.querySelectorAll('.picture');

const btnCloseBigPicture = bigPictureList.querySelector('.big-picture__cancel');
const downloadMoreButton = document.querySelector('.social__comments-loader');


//обработчкик откытия большого изображения
const createBigPicture = function(i) {
  pictures[i].addEventListener('click', () => {

    //отображает большое изображение, кол-во лайков и комметариев
    bigPicturesCommentsList.innerHTML = '';
    bigPictireImg.src = similarPosts[i].url;
    bigPictureLikes.textContent = similarPosts[i].likes;
    bigPicturesCountComments.textContent = similarPosts[i].comments.length;
    document.body.classList.add('modal-open');
    bigPictureList.classList.remove('hidden');

    //добавляет описание фото
    bigPictureDescription.textContent = similarPosts[i].description;

    //добавляет комментарий
    const displayComments = [];
    let fromComment = 0;
    let toComment = 5;
    function getFiveComments () {
      displayComments.push(...similarPosts[i].comments.slice(fromComment, toComment));
      displayComments.forEach(({avatar, name, message}) => {
        const bigPictureComment = document.createElement('li');
        bigPictureComment.classList.add('social__comment');
        const bigPictureCommentAvatar = document.createElement('img');
        bigPictureCommentAvatar.classList.add('social__picture');
        bigPictureCommentAvatar.src = avatar;
        bigPictureCommentAvatar.width = 35;
        bigPictureCommentAvatar.height = 35;
        bigPictureCommentAvatar.alt = name;
        bigPictureComment.appendChild(bigPictureCommentAvatar);
        const bigPictureCommentText = document.createElement('p');
        bigPictureCommentText.classList.add('social__text');
        bigPictureCommentText.textContent = message;
        bigPictureComment.appendChild(bigPictureCommentText);
        bigPicturesCommentsList.appendChild(bigPictureComment);
      });
      fromComment += 5;
      toComment += 5;
      if (displayComments.length === similarPosts[i].comments.length) {
        downloadMoreButton.classList.add('hidden');
      }
    }
    getFiveComments();

    // загружает следующие 5 комментариев
    function downloadMoreComments () {
      bigPicturesCommentsList.innerHTML = '';
      getFiveComments();
    }
    downloadMoreButton.addEventListener('click', downloadMoreComments);

    //добавляет обработчкики закрытия большого изображения
    const closebigPictureList = function () {
      bigPictureList.classList.add('hidden');
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', onEscKeydown);
      downloadMoreButton.removeEventListener('click', downloadMoreComments);
      downloadMoreButton.classList.remove('hidden');
    };

    function onEscKeydown (evt) {
      if (isEscEvent(evt)) {
        closebigPictureList();
      }
    }

    btnCloseBigPicture.addEventListener('click', () => {
      closebigPictureList();
    });

    document.addEventListener('keydown', onEscKeydown);
  });
};

for (let i = 0; i < pictures.length; i++) {
  createBigPicture(i);
}
