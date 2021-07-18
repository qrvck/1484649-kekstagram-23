import {POSTS} from './create-post.js';

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const pictureList = document.querySelector('.pictures');

const similarListFragment = document.createDocumentFragment();

POSTS.forEach(({url, comments, likes}) => {
  const postElement = pictureTemplate.cloneNode(true);
  postElement.querySelector('.picture__img').src = url;
  postElement.querySelector('.picture__comments').textContent = comments.length;
  postElement.querySelector('.picture__likes').textContent = likes;
  similarListFragment.appendChild(postElement);
});

pictureList.appendChild(similarListFragment);
