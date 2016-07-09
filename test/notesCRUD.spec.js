var app = require('../api/src/server.js');
var request = require('supertest').agent(app.listen());

const Note = require('../api/src/models/note.js');

var co = require('co');
var should = require('should');
var testHelpers = require('./testHelpers.js');

describe('Notes CRUD', function() {
  beforeEach(function(done) {
    testHelpers.removeAllNotes();
    done();
  });

  afterEach(function(done) {
    testHelpers.removeAllNotes();
    done();
  });

  it('getting notes in json', function(done) {
    request
      .get('/')
      // .expect(200)
      .expect('Content-Type', /json/) // getting all notes
      .end(done);
  });

  it('posts note', function(done) {
    co(function*() {
      request
        .post('/')
        .send({ value: 'Very nice note', tags: 'nice, tags' })
        // .expect(200)
        // .expect('Content-Type', /json/)
        .expect(function(res) {
          res.text.should.containEql('Very nice note');
          res.text.should.containEql('nice, tags');
        })
        .end(done);
    });
  });
});