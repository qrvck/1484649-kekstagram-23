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
const downloadMoreButton = document.querySelector('.social__comments-loader');

const closebigPictureList = function () {
  bigPictureList.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeydown);
};

function onEscKeydown (evt) {
  if (isEscEvent(evt)) {
    closebigPictureList();
  }
}

// обработчкик закрытия большого изображения по нажатию на крестик
btnCloseBigPicture.addEventListener('click', () => {
  closebigPictureList();
});

//обработчкик откытия большого изображения
const createBigPicture = function(i) {
  pictures[i].addEventListener('click', () => {
    //отображает большое изображение, кол-во лайков и комметариев
    bigPicturesCommentsList.innerHTML = '';
    bigPictureList.classList.remove('hidden');
    bigPictireImg.src = similarPosts[i].url;
    bigPictureLikes.textContent = similarPosts[i].likes;
    bigPicturesCountComments.textContent = similarPosts[i].comments.length;

    //добавляет описание фото
    bigPictureDescription.textContent = similarPosts[i].description;



    const animals = ['0ant', '1bison', '2camel', '3duck', '4ant', '5bison', '6camel', '7duck', '8ant', '9bison', '10camel', '11duck', '12ant', '13bison', '14camel', '15duck'];


    //добавляет комментарий
    let displayComments = [];
    let fromComment = 0;
    let toComment = 5;

    function getFiveComments () {
      // displayComments = [];
      // displayComments.push(...animals.slice(fromComment, toComment));
      animals.slice(fromComment, toComment).forEach((one) => {
        const bigPictureComment = document.createElement('li');
        bigPictureComment.textContent = one;

        // bigPictureComment.classList.add('social__comment');
        // const bigPictureCommentAvatar = document.createElement('img');
        // bigPictureCommentAvatar.classList.add('social__picture');
        // bigPictureCommentAvatar.src = avatar;
        // bigPictureCommentAvatar.width = 35;
        // bigPictureCommentAvatar.height = 35;
        // bigPictureCommentAvatar.alt = name;
        // bigPictureComment.appendChild(bigPictureCommentAvatar);
        // const bigPictureCommentText = document.createElement('p');
        // bigPictureCommentText.classList.add('social__text');
        // bigPictureCommentText.textContent = message;
        // bigPictureComment.appendChild(bigPictureCommentText);
        bigPicturesCommentsList.appendChild(bigPictureComment);
      });
      fromComment += 5;
      toComment += 5;
      if (displayComments.length === animals.length) {
        downloadMoreButton.classList.add('hidden');
      }
    }
    getFiveComments();

    downloadMoreButton.addEventListener('click', () => {
      // bigPicturesCommentsList.innerHTML = '';
      getFiveComments();
    });

    document.body.classList.add('modal-open');
    document.addEventListener('keydown', onEscKeydown);
  });
};

for (let i = 0; i < pictures.length; i++) {
  createBigPicture(i);
}
