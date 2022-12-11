const Note = require('../../models/note.js');

module.exports = {
  index,
  create,
};

async function create(req, res) {
  req.body.user = req.user._id;
  const note = await Note.create(req.body);
  res.status(201).json(note);
}

async function index(req, res) {
  const notes = await Note.find({});
  res.status(200).json(notes);
}