import { useRef, useState } from "react"
import Togglable from "./Togglable"

export default function NoteForm ({ addNote, handleLogout}) {
  const [newNote, setNewNote] = useState('')
  const togglableRef = useRef()

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    }

    addNote(noteObject)
    setNewNote('')
    togglableRef.current.toggleVisibility()
  }

  return(
    <Togglable buttonLabel="New note" ref={togglableRef}>

      <h3>Create a new note</h3>
      <form onSubmit={handleSubmit}>
          <input
          placeholder='write your note content'
            value={newNote}
            onChange={handleChange}
          />
          <button type="submit">save</button>
      </form>
      <div>
        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </Togglable>
  )
}