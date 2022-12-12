// Page is the bigger one, components are the "child"
export default function NoteCard({ user, note }) {
  return (
    <>
      <div>Title: {user.note.title}</div>
      <div>Content: {note.content}</div>
      <div>{note.createdAt().localeDate}</div>
    </>
  )
}