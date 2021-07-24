import {randomNumber} from './util.js';

const PHOTO_DESCRIPTION = [
  'Море',
  'Пальмы',
  'Песок',
  'Катер',
  'Яхта',
  'Кот',
  'Верблюд',
  'Танцы',
  'Рыбы',
  'Закат',
];

const COMMENTS_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const COMMENTS_NAME = [
  'Михаил',
  'Максим',
  'Артем',
  'Мария',
  'Анна',
  'Алиса',
];

const createComment = () => ({
  id: randomNumber(1, 25),
  avatar: `img/avatar-${randomNumber(1, 6)}.svg`,
  message: COMMENTS_MESSAGE[randomNumber(0, COMMENTS_MESSAGE.length - 1)],
  name: COMMENTS_NAME[randomNumber(0, COMMENTS_MESSAGE.length - 1)],
});

const createPost = (index) => ({
  id: index,
  url: `photos/${randomNumber(1, 25)}.jpg`,
  description: PHOTO_DESCRIPTION[randomNumber(0, PHOTO_DESCRIPTION.length - 1)],
  likes: randomNumber(15, 200),
  comments: new Array(randomNumber(1, 35)).fill(null).map(() => createComment()),
});

const POSTS = () => new Array(25).fill(null).map((post, index) => createPost(index));

export {POSTS};
