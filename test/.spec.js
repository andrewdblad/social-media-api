const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe, it, before } = require('mocha');
const { ObjectId } = require('mongodb');

const controllers = require('../path/to/controllers');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Controller Tests', () => {
  before(async () => {
   
  });

  describe('Comment Controller', () => {
    it('should delete a comment', (done) => {
   
      const comment_id = new ObjectId();
      chai.request(server)
        .delete(`/comments/${comment_id}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    
  });

  describe('Post Controller', () => {
    it('should create a post', (done) => {
      const post = { title: 'Test Post', content: 'Test Content' };
      chai.request(server)
        .post('/posts')
        .send(post)
        .end((err, res) => {
          expect(res).to.have.status(200);
          // Assuming response contains the newly created post id
          expect(res.body).to.have.property('insertedId');
          done();
        });
    });

    
  });

  describe('User Controller', () => {
    it('should create a user', (done) => {
      const user = { username: 'testuser', email: 'test@example.com' };
      chai.request(server)
        .post('/users')
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(200);
         
          expect(res.body).to.have.property('insertedId');
          done();
        });
    });

   
  });
});
