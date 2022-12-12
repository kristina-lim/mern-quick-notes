import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function AddNoteForm({ addNote }) {
  const [noteText, setNoteText] = useState({
    title: '',
    content: ''
  });
  const navigate = useNavigate();

  function handleChange(evt) {
    setNoteText({
      ...noteText,
      [evt.target.name]: evt.target.value
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addNote(noteText);
    setNoteText({
      title: "",
      content: ""
    });
    navigate('/notes');
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="add-note-title">
          <label>Title</label>
          <input 
            name="title"
            value={noteText.title}
            onChange={handleChange}
            required
          />
        </div>
        <br></br>
        <div className="add-note-content">
          <label>Content</label>
          <textarea
            name="content" 
            value={noteText.content} 
            onChange={handleChange} 
            required
          />
        </div>
        <button type="submit" className="btn">Add Note</button>
      </form>
    </>
  )
}