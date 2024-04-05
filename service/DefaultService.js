'use strict';


// Delete a comment by comment_id
async function deleteComment(comment_id) {
  try {
      const db = await connectToDB();
      const result = await db.collection('comment').deleteOne({ _id: new ObjectId(comment_id) });
      console.log(`Deleted ${result.deletedCount} comment`);
  } catch (err) {
      console.error('Error deleting comment', err);
      throw err;
  }
}

// Get information about a specific comment by comment_id
async function getComment(comment_id) {
  try {
      const db = await connectToDB();
      return await db.collection('comment').findOne({ _id: new ObjectId(comment_id) });
  } catch (err) {
      console.error('Error getting comment', err);
      throw err;
  }
}

// Update a comment by comment_id
async function updateComment(body, comment_id) {
  try {
      const db = await connectToDB();
      const result = await db.collection('comment').updateOne({ _id: new ObjectId(comment_id) }, { $set: body });
      console.log(`Updated ${result.modifiedCount} comment`);
  } catch (err) {
      console.error('Error updating comment', err);
      throw err;
  }
}

// Get a list of recommended posts
async function explorePosts() {
  try {
      const db = await connectToDB();
      return await db.collection('post').find().toArray();
  } catch (err) {
      console.error('Error exploring posts', err);
      throw err;
  }
}

// Get a list of recommended users
async function exploreUsers() {
  try {
      const db = await connectToDB();
      return await db.collection('user').find().toArray();
  } catch (err) {
      console.error('Error exploring users', err);
      throw err;
  }
}

// Get a list of all posts
async function getPosts() {
  try {
      const db = await connectToDB();
      return await db.collection('post').find().toArray();
  } catch (err) {
      console.error('Error getting posts', err);
      throw err;
  }
}

// Create a new post
async function createPost(body) {
  try {
      const db = await connectToDB();
      const result = await db.collection('post').insertOne(body);
      console.log(`Created post with id: ${result.insertedId}`);
      return result.insertedId;
  } catch (err) {
      console.error('Error creating post', err);
      throw err;
  }
}

// Get comments for a specific post by post_id
async function getPostComments(post_id) {
  try {
      const db = await connectToDB();
      return await db.collection('comment').find({ post_id: new ObjectId(post_id) }).toArray();
  } catch (err) {
      console.error('Error getting post comments', err);
      throw err;
  }
}

// Add a new comment to a post
async function addPostComment(body, post_id) {
  try {
      const db = await connectToDB();
      body.post_id = new ObjectId(post_id);
      const result = await db.collection('comment').insertOne(body);
      console.log(`Added comment with id: ${result.insertedId}`);
      return result.insertedId;
  } catch (err) {
      console.error('Error adding post comment', err);
      throw err;
  }
}

// Delete a post by post_id
async function deletePost(post_id) {
  try {
      const db = await connectToDB();
      const result = await db.collection('post').deleteOne({ _id: new ObjectId(post_id) });
      console.log(`Deleted ${result.deletedCount} post`);
  } catch (err) {
      console.error('Error deleting post', err);
      throw err;
  }
}

// Get information about a specific post by post_id
async function getPost(post_id) {
  try {
      const db = await connectToDB();
      return await db.collection('post').findOne({ _id: new ObjectId(post_id) });
  } catch (err) {
      console.error('Error getting post', err);
      throw err;
  }
}

// Unlike a post by post_id
async function unlikePost(post_id) {
  try {
      // Your logic for unlike post goes here
  } catch (err) {
      console.error('Error unliking post', err);
      throw err;
  }
}

// Like a post by post_id
async function likePost(post_id) {
  try {
      // Your logic for like post goes here
  } catch (err) {
      console.error('Error liking post', err);
      throw err;
  }
}

// Update a post by post_id
async function updatePost(body, post_id) {
  try {
      const db = await connectToDB();
      const result = await db.collection('post').updateOne({ _id: new ObjectId(post_id) }, { $set: body });
      console.log(`Updated ${result.modifiedCount} post`);
  } catch (err) {
      console.error('Error updating post', err);
      throw err;
  }
}

// Get a list of all users
async function getUsers() {
  try {
      const db = await connectToDB();
      return await db.collection('user').find().toArray();
  } catch (err) {
      console.error('Error getting users', err);
      throw err;
  }
}

// Create a new user
async function createUser(body) {
  try {
      const db = await connectToDB();
      const result = await db.collection('user').insertOne(body);
      console.log(`Created user with id: ${result.insertedId}`);
      return result.insertedId;
  } catch (err) {
      console.error('Error creating user', err);
      throw err;
  }
}

// Delete a user by user_id
async function deleteUser(user_id) {
  try {
      const db = await connectToDB();
      const result = await db.collection('user').deleteOne({ _id: new ObjectId(user_id) });
      console.log(`Deleted ${result.deletedCount} user`);
  } catch (err) {
      console.error('Error deleting user', err);
      throw err;
  }
}

// Unfollow a user by user_id
async function unfollowUser(user_id) {
  try {
      // Your logic for unfollow user goes here
  } catch (err) {
      console.error('Error unfollowing user', err);
      throw err;
  }
}

// Follow a user by user_id
async function followUser(user_id) {
  try {
      // Your logic for follow user goes here
  } catch (err) {
      console.error('Error following user', err);
      throw err;
  }
}

// Get information about a specific user by user_id
async function getUser(user_id) {
  try {
      const db = await connectToDB();
      return await db.collection('user').findOne({ _id: new ObjectId(user_id) });
  } catch (err) {
      console.error('Error getting user', err);
      throw err;
  }
}

// Update user information by user_id
async function updateUser(body, user_id) {
  try {
      const db = await connectToDB();
      const result = await db.collection('user').updateOne({ _id: new ObjectId(user_id) }, { $set: body });
      console.log(`Updated ${result.modifiedCount} user`);
  } catch (err) {
      console.error('Error updating user', err);
      throw err;
  }
}

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
  updateUser
};

