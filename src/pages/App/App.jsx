import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NewNotePage from '../NewNotePage/NewNotePage';
import NotePage from '../NotePage/NotePage';
import * as notesAPI from '../../utilities/notes-api';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);
  
  async function addNote(note) {
    const newNote = await notesAPI.create(note)
    setNotes([...notes, newNote]);
  }

  useEffect(() => {
    async function displayNotes() {
      const noteData = await notesAPI.index();
      setNotes(noteData);
    }
    displayNotes();
  }, []);

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* route components in here */}
            <Route path="/notes/new" element={<NewNotePage addNote={addNote} />} />
            <Route path="/notes" element={<NotePage notes={notes} setNotes={setNotes} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
