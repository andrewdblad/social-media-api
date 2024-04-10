const express = require('express');
const router = express.Router();
const controller = require('../controllers/Default');

// Define routes
router.get('/users', controller.usersGET);
router.post('/users', controller.usersPOST);
router.get('/users/:user_id', controller.usersUser_idGET);
router.put('/users/:user_id', controller.usersUser_idPUT);
router.delete('/users/:user_id', controller.usersUser_idDELETE);

router.get('/posts', controller.postsGET);
router.post('/posts', controller.postsPOST);
router.get('/posts/:post_id', controller.postsPost_idGET);
router.put('/posts/:post_id', controller.postsPost_idPUT);
router.delete('/posts/:post_id', controller.postsPost_idDELETE);

router.get('/posts/:post_id/comments', controller.postsPost_idCommentsGET);
router.post('/posts/:post_id/comments', controller.postsPost_idCommentsPOST);

router.get('/comments/:comment_id', controller.commentsComment_idGET);
router.put('/comments/:comment_id', controller.commentsComment_idPUT);
router.delete('/comments/:comment_id', controller.commentsComment_idDELETE);


router.get('/explore/users', controller.exploreUsersGET);
router.get('/explore/posts', controller.explorePostsGET);

module.exports = router;