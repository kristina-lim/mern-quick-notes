const Note = require('../../models/note.js');

module.exports = {
  index,
  create,
};

async function create(req, res) {
  try {
    req.body.user = req.user._id;
    const note = await Note.create(req.body);
    note.save();
    res.json(note);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function index(req, res) {
  const notes = await Note.find({});
  res.status(200).json(notes);
}