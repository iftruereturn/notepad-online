const app = require('../api/src/server.js');
const request = require('supertest').agent(app.listen());

const Note = require('../api/src/models/note.js');

const co = require('co');
const should = require('should');
const testHelpers = require('./testHelpers.js');

describe('Notes CRUD', () => {
  beforeEach((done) => {
    testHelpers.removeAllNotes();
    done();
  });

  afterEach((done) => {
    testHelpers.removeAllNotes();
    done();
  });

  it('gets a note by id', (done) => {
    co(function*() {
      const newNote = new Note({ value: 'my new note', tags: 'my, new, tags' });
      const savedNote = yield newNote.save();
      const id = savedNote._id;

      request
        .get('/notes/' + id)
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function(res) {
          res.text.should.containEql('my new note');
          res.text.should.containEql('my, new, tags');
        })
        .end(done);
    });
  });

  it('gets all notes', (done) => {
    co(function*() {
      const newNote = new Note({ value: 'my new note', tags: 'my, new, tags' });
      const savedNote = yield newNote.save();

      const anotherNewNote = new Note({ value: 'another writing', tags: 'really, nice' });
      const anotherSavedNote = yield anotherNewNote.save();

      request
        .get('/notes')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function(res) {
          res.text.should.containEql('my new note');
          res.text.should.containEql('my, new, tags');
          res.text.should.containEql('another writing');
          res.text.should.containEql('really, nice');
        })
        .end(done);
    });
  });

  it('creates a new note', (done) => {
    request
      .post('/notes')
      .send({ value: 'Very nice note', tags: 'nice, tags' })
      .expect(201)
      .expect('location', /^\/notes\/[0-9a-f]{24}$/)
      .end(done);
  });

  it('updates a note', (done) => {
    co(function*() {
      const newNote = new Note({ value: 'my new note', tags: 'my, new, tags', name: 'random' });
      const savedNote = yield newNote.save();
      const id = savedNote._id;

      // updating
      yield request
        .put('/notes/' + id)
        .send({ value: 'Very nice note' })
        .expect(200);

      request
        .get('/notes/' + id)
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function(res) {
          res.text.should.containEql('Very nice note');
          res.text.should.containEql('my, new, tags');
          res.text.should.containEql('random');
        })
        .end(done);
    });
  });

  it('deletes a note', (done) => {
    co(function*() {
      const newNote = new Note({ value: 'my new note', tags: 'my, new, tags', name: 'random' });
      const savedNote = yield newNote.save();
      const id = savedNote._id;

      // deleting
      yield request
        .del('/notes/' + id)
        .expect(200);

      request
        .get('/notes/' + id)
        .expect(404)
        .end(done);
    });
  });


});