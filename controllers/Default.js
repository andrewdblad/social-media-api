'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.commentsComment_idDELETE = function commentsComment_idDELETE (req, res, next, comment_id) {
  Default.commentsComment_idDELETE(comment_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.commentsComment_idGET = function commentsComment_idGET (req, res, next, comment_id) {
  Default.commentsComment_idGET(comment_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.commentsComment_idPUT = function commentsComment_idPUT (req, res, next, body, comment_id) {
  Default.commentsComment_idPUT(body, comment_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.explorePostsGET = function explorePostsGET (req, res, next) {
  Default.explorePostsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.exploreUsersGET = function exploreUsersGET (req, res, next) {
  Default.exploreUsersGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postsGET = function postsGET (req, res, next) {
  Default.postsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postsPOST = function postsPOST (req, res, next, body) {
  Default.postsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postsPost_idCommentsGET = function postsPost_idCommentsGET (req, res, next, post_id) {
  Default.postsPost_idCommentsGET(post_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postsPost_idCommentsPOST = function postsPost_idCommentsPOST (req, res, next, body, post_id) {
  Default.postsPost_idCommentsPOST(body, post_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postsPost_idDELETE = function postsPost_idDELETE (req, res, next, post_id) {
  Default.postsPost_idDELETE(post_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postsPost_idGET = function postsPost_idGET (req, res, next, post_id) {
  Default.postsPost_idGET(post_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postsPost_idLikeDELETE = function postsPost_idLikeDELETE (req, res, next, post_id) {
  Default.postsPost_idLikeDELETE(post_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postsPost_idLikePOST = function postsPost_idLikePOST (req, res, next, post_id) {
  Default.postsPost_idLikePOST(post_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postsPost_idPUT = function postsPost_idPUT (req, res, next, body, post_id) {
  Default.postsPost_idPUT(body, post_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersGET = function usersGET (req, res, next) {
  Default.usersGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersPOST = function usersPOST (req, res, next, body) {
  Default.usersPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUser_idDELETE = function usersUser_idDELETE (req, res, next, user_id) {
  Default.usersUser_idDELETE(user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUser_idFollowDELETE = function usersUser_idFollowDELETE (req, res, next, user_id) {
  Default.usersUser_idFollowDELETE(user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUser_idFollowPOST = function usersUser_idFollowPOST (req, res, next, user_id) {
  Default.usersUser_idFollowPOST(user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUser_idGET = function usersUser_idGET (req, res, next, user_id) {
  Default.usersUser_idGET(user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUser_idPUT = function usersUser_idPUT (req, res, next, body, user_id) {
  Default.usersUser_idPUT(body, user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
