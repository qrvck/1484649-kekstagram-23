import {similarPosts} from './pictures.js';

const bigPictureList = document.querySelector('.big-picture');
const bigPictireImg = bigPictureList.querySelector('.big-picture__img').querySelector('img');
const bigPictureLikes = bigPictureList.querySelector('.likes-count');
const bigPicturesCountComments = bigPictureList.querySelector('.comments-count');
const bigPicturesCommentsList = bigPictureList.querySelector('.social__comments');
const bigPictureDescription = bigPictureList.querySelector('.social__caption');

const pictures = document.querySelectorAll('.picture');

const btnCloseBigPicture = bigPictureList.querySelector('.big-picture__cancel');

const createBigPicture = function(i) {
  pictures[i].addEventListener('click', () => {
    //отображает большое изображение, кол-во лайков и комметариев
    bigPictureList.classList.remove('hidden');
    bigPictireImg.src = similarPosts[i].url;
    bigPictureLikes.textContent = similarPosts[i].likes;
    bigPicturesCountComments.textContent = similarPosts[i].comments.length;

    //добавляет комментарий
    const bigPictureComment = document.createElement('li');
    bigPictureComment.classList.add('social__comment');
    const bigPictureCommentAvatar = document.createElement('img');
    bigPictureCommentAvatar.classList.add('social__picture');
    bigPictureCommentAvatar.src = similarPosts[i].comments[0].avatar;
    bigPictureCommentAvatar.width = 35;
    bigPictureCommentAvatar.height = 35;
    bigPictureComment.appendChild(bigPictureCommentAvatar);
    const bigPictureCommentText = document.createElement('p');
    bigPictureCommentText.classList.add('social__text');
    bigPictureCommentText.textContent = similarPosts[i].comments[0].message;
    bigPictureComment.appendChild(bigPictureCommentText);
    bigPicturesCommentsList.textContent = '';
    bigPicturesCommentsList.appendChild(bigPictureComment);

    //добавляет описание фото
    bigPictureDescription.textContent = similarPosts[i].description;

    // временно убрал счетчик комментариев и загрузку новых комментариев
    const bigPicturesCountAllComments = bigPictureList.querySelector('.social__comment-count');
    bigPicturesCountAllComments.classList.add('hidden');
    const bigPicturesCommentsLoader = bigPictureList.querySelector('.comments-loader');
    bigPicturesCommentsLoader.classList.add('hidden');

    document.body.classList.add('modal-open');
  });
};

for (let i = 0; i < pictures.length; i++) {
  createBigPicture(i);
}

btnCloseBigPicture.addEventListener('click', () => {
  bigPictureList.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    bigPictureList.classList.add('hidden');
  }
});
