import { useState } from 'react';

export default function AddNoteForm({ user, note, setNote }) {
  const [addNote, setAddNote] = useState({
    title: '',
    content: '',
    user: user._id
  });

  function handleChange(evt) {
    setAddNote({
      ...addNote,
      [evt.target.name]: evt.target.value
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setAddNote(addNote);
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="add-note-title">
          <label>Title</label>
          <input 
            value={addNote.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="add-note-content">
          <label>Content</label>
          <textarea
            name="content" 
            value={addNote.content} 
            onChange={handleChange} 
            required
          />
        </div>
        <button type="submit" className="btn">Add Note</button>
      </form>
    </>
  )
}