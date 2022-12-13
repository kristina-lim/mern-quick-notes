// Page is the bigger one, components are the "child"
export default function NoteCard({ note }) {
  return (
    <>
      <div>title: {note.title}</div>
      <div>content: {note.content}</div>
      <div>{new Date().toLocaleString()}</div>&nbsp;
    </>
  )
}