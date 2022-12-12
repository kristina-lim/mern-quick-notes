import NoteCard from '../../components/NoteCard/NoteCard';

export default function Notes({ notes }) {
  return (
    <>
      <h1>Notes</h1>
      {notes.length === 1 ?
      <p>No notes yet poopyface</p>
      :
      <div>
        {notes.map((note, idx) => (
          <NoteCard note={note} idx={idx} />
        ))}
      </div>
      }
    </>
  );
}