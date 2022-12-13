// Page is the bigger one, components are the "child"
export default function NoteCard({ note }) {
  return (
    <>
      <div>{note.title}</div>
      <div>content: {note.content}</div>
      <div>{note.createdAt.toLocaleString()}</div>&nbsp;
    </>
  )
}