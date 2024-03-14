'use strict';


/**
 * Delete a comment.
 *
 * comment_id Integer ID of the comment to delete.
 * no response value expected for this operation
 **/
exports.commentsComment_idDELETE = function(comment_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get information about a specific comment.
 *
 * comment_id Integer ID of the comment to retrieve.
 * no response value expected for this operation
 **/
exports.commentsComment_idGET = function(comment_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update a comment.
 *
 * body CommentInput 
 * comment_id Integer ID of the comment to update.
 * no response value expected for this operation
 **/
exports.commentsComment_idPUT = function(body,comment_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a list of recommended posts.
 *
 * no response value expected for this operation
 **/
exports.explorePostsGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a list of recommended users.
 *
 * no response value expected for this operation
 **/
exports.exploreUsersGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a list of all posts.
 *
 * no response value expected for this operation
 **/
exports.postsGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create a new post.
 *
 * body PostInput 
 * no response value expected for this operation
 **/
exports.postsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get comments for a specific post.
 *
 * post_id Integer ID of the post to retrieve comments for.
 * no response value expected for this operation
 **/
exports.postsPost_idCommentsGET = function(post_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Add a new comment to a post.
 *
 * body CommentInput 
 * post_id Integer ID of the post to add a comment to.
 * no response value expected for this operation
 **/
exports.postsPost_idCommentsPOST = function(body,post_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a post.
 *
 * post_id Integer ID of the post to delete.
 * no response value expected for this operation
 **/
exports.postsPost_idDELETE = function(post_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get information about a specific post.
 *
 * post_id Integer ID of the post to retrieve.
 * no response value expected for this operation
 **/
exports.postsPost_idGET = function(post_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Unlike a post.
 *
 * post_id Integer ID of the post to unlike.
 * no response value expected for this operation
 **/
exports.postsPost_idLikeDELETE = function(post_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Like a post.
 *
 * post_id Integer ID of the post to like.
 * no response value expected for this operation
 **/
exports.postsPost_idLikePOST = function(post_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update a post.
 *
 * body PostInput 
 * post_id Integer ID of the post to update.
 * no response value expected for this operation
 **/
exports.postsPost_idPUT = function(body,post_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a list of all users.
 *
 * no response value expected for this operation
 **/
exports.usersGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create a new user.
 *
 * body UserInput 
 * no response value expected for this operation
 **/
exports.usersPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a user account.
 *
 * user_id Integer ID of the user to delete.
 * no response value expected for this operation
 **/
exports.usersUser_idDELETE = function(user_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Unfollow a user.
 *
 * user_id Integer ID of the user to unfollow.
 * no response value expected for this operation
 **/
exports.usersUser_idFollowDELETE = function(user_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Follow a user.
 *
 * user_id Integer ID of the user to follow.
 * no response value expected for this operation
 **/
exports.usersUser_idFollowPOST = function(user_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get information about a specific user.
 *
 * user_id Integer ID of the user to retrieve.
 * no response value expected for this operation
 **/
exports.usersUser_idGET = function(user_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update user information.
 *
 * body UserInput 
 * user_id Integer ID of the user to update.
 * no response value expected for this operation
 **/
exports.usersUser_idPUT = function(body,user_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

