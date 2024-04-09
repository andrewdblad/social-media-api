
const { ObjectId } = require('mongodb');
const { initDb, getDb } = require('../db/connect');
const utils = require('../utils/writer.js');
// const Default = require('../service/DefaultService.js');

// MongoDB helper functions
async function deleteComment(comment_id) {
  try {
      const db = await getDb();
      const result = await db.collection('comment').deleteOne({ _id: new ObjectId(comment_id) });
      console.log(`Deleted ${result.deletedCount} comment`);
  } catch (err) {
      console.error('Error deleting comment', err);
      throw err;
  }
}

async function getComment(comment_id) {
  try {
      const db = await getDb();
      return await db.collection('comment').findOne({ _id: new ObjectId(comment_id) });
  } catch (err) {
      console.error('Error getting comment', err);
      throw err;
  }
}

async function updateComment(body, comment_id) {
  try {
      const db = await getDb();
      const result = await db.collection('comment').updateOne({ _id: new ObjectId(comment_id) }, { $set: body });
      console.log(`Updated ${result.modifiedCount} comment`);
  } catch (err) {
      console.error('Error updating comment', err);
      throw err;
  }
}

async function explorePosts() {
  try {
      const db = await getDb();
      return await db.collection('post').find().toArray();
  } catch (err) {
      console.error('Error exploring posts', err);
      throw err;
  }
}

async function exploreUsers() {
  try {
      const db = await getDb();
      return await db.collection('user').find().toArray();
  } catch (err) {
      console.error('Error exploring users', err);
      throw err;
  }
}

async function getPosts() {
  try {
      const db = await getDb();
      return await db.collection('post').find().toArray();
  } catch (err) {
      console.error('Error getting posts', err);
      throw err;
  }
}

async function createPost(body) {
  try {
      const db = await getDb();
      const result = await db.collection('post').insertOne(body);
      console.log(`Created post with id: ${result.insertedId}`);
      return result.insertedId;
  } catch (err) {
      console.error('Error creating post', err);
      throw err;
  }
}

async function getPostComments(post_id) {
  try {
      const db = await getDb();
      return await db.collection('comment').find({ post_id: new ObjectId(post_id) }).toArray();
  } catch (err) {
      console.error('Error getting post comments', err);
      throw err;
  }
}

async function addPostComment(body, post_id) {
  try {
      const db = await getDb();
      body.post_id = new ObjectId(post_id);
      const result = await db.collection('comment').insertOne(body);
      console.log(`Added comment with id: ${result.insertedId}`);
      return result.insertedId;
  } catch (err) {
      console.error('Error adding post comment', err);
      throw err;
  }
}

async function deletePost(post_id) {
  try {
      const db = await getDb();
      const result = await db.collection('post').deleteOne({ _id: new ObjectId(post_id) });
      console.log(`Deleted ${result.deletedCount} post`);
  } catch (err) {
      console.error('Error deleting post', err);
      throw err;
  }
}

async function getPost(post_id) {
  try {
      const db = await getDb();
      return await db.collection('post').findOne({ _id: new ObjectId(post_id) });
  } catch (err) {
      console.error('Error getting post', err);
      throw err;
  }
}

async function unlikePost(post_id) {
  try {
      // Your logic for unlike post goes here
  } catch (err) {
      console.error('Error unliking post', err);
      throw err;
  }
}

async function likePost(post_id) {
  try {
      // Your logic for like post goes here
  } catch (err) {
      console.error('Error liking post', err);
      throw err;
  }
}

async function updatePost(body, post_id) {
  try {
      const db = await getDb();
      const result = await db.collection('post').updateOne({ _id: new ObjectId(post_id) }, { $set: body });
      console.log(`Updated ${result.modifiedCount} post`);
  } catch (err) {
      console.error('Error updating post', err);
      throw err;
  }
}

async function getUsers() {
  try {
      const db = await getDb();
      return await db.collection('user').find().toArray();
  } catch (err) {
      console.error('Error getting users', err);
      throw err;
  }
}

async function createUser(body) {
  try {
      const db = await getDb();
      const result = await db.collection('user').insertOne(body);
      console.log(`Created user with id: ${result.insertedId}`);
      return result.insertedId;
  } catch (err) {
      console.error('Error creating user', err);
      throw err;
  }
}

async function deleteUser(user_id) {
  try {
      const db = await getDb();
      const result = await db.collection('user').deleteOne({ _id: new ObjectId(user_id) });
      console.log(`Deleted ${result.deletedCount} user`);
  } catch (err) {
      console.error('Error deleting user', err);
      throw err;
  }
}

async function unfollowUser(user_id) {
  try {
      // Your logic for unfollow user goes here
  } catch (err) {
      console.error('Error unfollowing user', err);
      throw err;
  }
}

async function followUser(user_id) {
  try {
      // Your logic for follow user goes here
  } catch (err) {
      console.error('Error following user', err);
      throw err;
  }
}

async function getUser(user_id) {
  try {
      const db = await getDb();
      return await db.collection('user').findOne({ _id: new ObjectId(user_id) });
  } catch (err) {
      console.error('Error getting user', err);
      throw err;
  }
}

async function updateUser(body, user_id) {
  try {
      const db = await getDb();
      const result = await db.collection('user').updateOne({ _id: new ObjectId(user_id) }, { $set: body });
      console.log(`Updated ${result.modifiedCount} user`);
  } catch (err) {
      console.error('Error updating user', err);
      throw err;
  }
}

// Exporting functions
module.exports = {
  deleteComment,
  getComment,
  updateComment,
  explorePosts,
  exploreUsers,
  getPosts,
  createPost,
  getPostComments,
  addPostComment,
  deletePost,
  getPost,
  unlikePost,
  likePost,
  updatePost,
  getUsers,
  createUser,
  deleteUser,
  unfollowUser,
  followUser,
  getUser,
  updateUser,
  // Controller functions
  commentsComment_idDELETE: function(req, res, next, comment_id) {
    deleteComment(comment_id)
      .then(response => utils.writeJson(res, response))
      .catch(response => utils.writeJson(res, response));
  },
  commentsComment_idGET: function(req, res, next, comment_id) {
    getComment(comment_id)
      .then(response => utils.writeJson(res, response))
      .catch(response => utils.writeJson(res, response));
  },
  commentsComment_idPUT: function(req, res, next, body, comment_id) {
    updateComment(body, comment_id)
      .then(response => utils.writeJson(res, response))
      .catch(response => utils.writeJson(res, response));
  },
  explorePostsGET: function(req, res, next) {
    explorePosts()
      .then(response => utils.writeJson(res, response))
      .catch(response => utils.writeJson(res, response));
  },
  exploreUsersGET: function(req, res, next) {
    exploreUsers()
      .then(response => utils.writeJson(res, response))
      .catch(response => utils.writeJson(res, response));
  },
  postsGET: function(req, res, next) {
    getPosts()
      .then(response => utils.writeJson(res, response))
      .catch(response => utils.writeJson(res, response));
  },
  postsPOST: function(req, res, next, body) {
    createPost(body)
      .then(response => utils.writeJson(res, response))
      .catch(response => utils.writeJson(res, response));
  },
  postsPost_idCommentsGET: function(req, res, next, post_id) {
    getPostComments(post_id)
      .then(response => utils.writeJson(res, response))
      .catch(response => utils.writeJson(res, response));
  },
  postsPost_idCommentsPOST: function(req, res, next, body, post_id) {
    addPostComment(body, post_id)
      .then(response => utils.writeJson(res, response))
      .catch(response => utils.writeJson(res, response));
  },
  postsPost_idDELETE: function(req, res, next, post_id) {
    deletePost(post_id)
      .then(response => utils.writeJson(res, response))
      .catch(response => utils.writeJson(res, response));
  },
  postsPost_idGET: function(req, res, next, post_id) {
    getPost(post_id)
      .then(response => utils.writeJson(res, response))
      .catch(response => utils.writeJson(res, response));
  },
  postsPost_idLikeDELETE: function(req, res, next, post_id) {
    unlikePost(post_id)
      .then(response => utils.writeJson(res, response))
      .catch(response => utils.writeJson(res, response));
  },
  postsPost_idLikePOST: function(req, res, next, post_id) {
    likePost(post_id)
      .then(response => utils.writeJson(res, response))
      .catch(response => utils.writeJson(res, response));
  },
  postsPost_idPUT: function(req, res, next, body, post_id) {
    updatePost(body, post_id)
      .then(response => utils.writeJson(res, response))
      .catch(response => utils.writeJson(res, response));
  },
  usersGET: function(req, res, next) {
    getUsers()
      .then(response => utils.writeJson(res, response))
      .catch(response => utils.writeJson(res, response));
  },
  usersPOST: function(req, res, next, body) {
    createUser(body)
      .then(response => utils.writeJson(res, response))
      .catch(response => utils.writeJson(res, response));
  },
  usersUser_idDELETE: function(req, res, next, user_id) {
    deleteUser(user_id)
      .then(response => utils.writeJson(res, response))
      .catch(response => utils.writeJson(res, response));
  },
  usersUser_idFollowDELETE: function(req, res, next, user_id) {
    unfollowUser(user_id)
      .then(response => utils.writeJson(res, response))
      .catch(response => utils.writeJson(res, response));
  },
  usersUser_idFollowPOST: function(req, res, next, user_id) {
    followUser(user_id)
      .then(response => utils.writeJson(res, response))
      .catch(response => utils.writeJson(res, response));
  },
  usersUser_idGET: function(req, res, next, user_id) {
    getUser(user_id)
      .then(response => utils.writeJson(res, response))
      .catch(response => utils.writeJson(res, response));
  },
  usersUser_idPUT: function(req, res, next, body, user_id) {
    updateUser(body, user_id)
      .then(response => utils.writeJson(res, response))
      .catch(response => utils.writeJson(res, response));
  }
};

