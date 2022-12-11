import AddNoteForm from '../../components/AddNoteForm/AddNoteForm';

export default function NewNotePage({ user, note, setNote }) {
  return (
    <>
      <h1>New Note</h1>
      <AddNoteForm user={user} note={note} setNote={setNote} />
    </>
  );
}
