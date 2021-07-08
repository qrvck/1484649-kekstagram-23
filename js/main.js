import {createPost} from './create-post.js';

const POSTS = new Array(25).fill(null).map((post, index) => createPost(index));

POSTS;
