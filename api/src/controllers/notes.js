const Note = require('../models/note.js');
const User = require('../models/user.js');


module.exports = function(passport) {

  const getNote = function*() {
    const id = this.params.id;

    let note;
    try {
      note = yield Note.findById(id).exec();
    } catch (e) {
      return this.status = 404;
    }

    if (!note) {
      this.status = 404;
    } else {
      this.set({ 'Content-Type': 'application/json' });
      this.body = JSON.stringify(note);
      this.status = 200;
    }
  };


  const getAllNotes = function*() {
    // TODO: find notes that belong to this user
    // if (!this.isAuthenticated()) {
    //   this.status = 200;
    //   return this.body = JSON.stringify([]);
    // }
    
    const username = (this.req.user && this.req.user.username)
      ? this.req.user.username
      : '';

    const usernameQuery = [username, 'Anonymous'];

    const query = this.request.query;
    // console.log(query);
    const tagsQuery = query.tags;
    
    let allNotes;

    // needs to find notes that :
    // owner - Anonymous
    // owner - current user
    // owner - any user, but isSecret - false
    if (typeof tagsQuery === 'string') {
      allNotes = yield Note.find({ 
        tags: tagsQuery, 
        $or: [
          { owner: { "$in" : usernameQuery} },
          { isSecret: false }
        ]  
      }, '-value').exec();
    } else if (tagsQuery && tagsQuery.length > 1) {
      allNotes = yield Note.find({ 
        tags: { "$in" : tagsQuery }, 
        $or: [
          { owner: { "$in" : usernameQuery} },
          { isSecret: false }
        ] 
      }, '-value').exec();
    } else {
      allNotes = yield Note.find({ 
        $or: [
          { owner: { "$in" : usernameQuery} },
          { isSecret: false }
        ]  
      }, '-value').exec();  
    }

    this.set({ 'Content-Type': 'application/json' });
    this.body = JSON.stringify(allNotes);
    this.status = 200;
  };


  const postNote = function*() {
    const note = this.request.body;

    // parsing tags (if needed)
    if (typeof note.tags === 'string') {
      let cleanTagsArray = parseTags(note.tags);
      // console.log(cleanTagsArray);
      note.tags = cleanTagsArray;
    }

    if (this.isAuthenticated()) {
      note.owner = this.req.user.username;
    } else {
      note.isSecret = false;
    }


    const newNote = new Note(note);
    let savedNote;
    try {
      savedNote = yield newNote.save();
    } catch (e) {
      return this.status = 404;
    }

    this.set('location', '/api/notes/' + savedNote._id);
    this.status = 201;
  };


  const updateNote = function*() {
    const id = this.params.id;

    const update = this.request.body;
    // update.updated = Date.now();

    console.log(update);

    // parsing tags (if needed)
    if (typeof update.tags === 'string') {
      let cleanTagsArray = parseTags(update.tags);
      // console.log(cleanTagsArray);
      update.tags = cleanTagsArray;
    }

    if ( !this.isAuthenticated() 
      || this.req.user.username !== update.owner ) {
      update.isSecret = false;
    }


    try {
      yield Note.findByIdAndUpdate(id, update).exec();
    } catch (e) {
      return this.status = 404;
    }

    this.status = 200;
  };


  const deleteNote = function*() {
    const id = this.params.id;

    try {
      yield Note.findByIdAndRemove(id).exec();
    } catch (e) {
      return this.status = 404;
    }

    this.status = 200;
  };

  const parseTags = (tagsArray) => {
    return tagsArray.split(',')
             .map( el => el.trim().toLowerCase() )
             .join(' ')
             .split(' ')
             .filter( el => el );
  };

  /*const encodeBase64(mongoId) {
    return (new Buffer(mongoId, 'hex')
      .toString('base64')
      .replace('+', '-')
      .replace('/', '*'));
  }

  const decodeBase64(base64Str) {
    return (new Buffer(base64.replace('-', '+').replace('*', '/'), 'base64')
      .toString('hex'));
  }*/


  return {
    getNote,
    getAllNotes,
    postNote,
    updateNote,
    deleteNote
  };

};