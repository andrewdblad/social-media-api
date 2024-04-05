const express = require('express');
const router = express.Router();

// Import controller functions for handling requests
const {
  usersGET,
  usersPOST,
  usersUser_idGET,
  usersUser_idPUT,
  usersUser_idDELETE,
  postsGET,
  postsPOST,
  postsPost_idGET,
  postsPost_idPUT,
  postsPost_idDELETE,
  postsPost_idCommentsGET,
  postsPost_idCommentsPOST,
  commentsComment_idGET,
  commentsComment_idPUT,
  commentsComment_idDELETE,
  postsPost_idLikePOST,
  postsPost_idLikeDELETE,
  usersUser_idFollowPOST,
  usersUser_idFollowDELETE,
  exploreUsersGET,
  explorePostsGET
} = require('../controllers/Default');

// Define routes
router.get('/users', usersGET);
router.post('/users', usersPOST);
router.get('/users/:user_id', usersUser_idGET);
router.put('/users/:user_id', usersUser_idPUT);
router.delete('/users/:user_id', usersUser_idDELETE);

router.get('/posts', postsGET);
router.post('/posts', postsPOST);
router.get('/posts/:post_id', postsPost_idGET);
router.put('/posts/:post_id', postsPost_idPUT);
router.delete('/posts/:post_id', postsPost_idDELETE);

router.get('/posts/:post_id/comments', postsPost_idCommentsGET);
router.post('/posts/:post_id/comments', postsPost_idCommentsPOST);

router.get('/comments/:comment_id', commentsComment_idGET);
router.put('/comments/:comment_id', commentsComment_idPUT);
router.delete('/comments/:comment_id', commentsComment_idDELETE);

router.post('/posts/:post_id/like', postsPost_idLikePOST);
router.delete('/posts/:post_id/like', postsPost_idLikeDELETE);

router.post('/users/:user_id/follow', usersUser_idFollowPOST);
router.delete('/users/:user_id/follow', usersUser_idFollowDELETE);

router.get('/explore/users', exploreUsersGET);
router.get('/explore/posts', explorePostsGET);

module.exports = router;
