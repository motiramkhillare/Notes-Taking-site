import { useState } from "react";
import "./App.css";
import Form from "./Components/form.jsx";
importgit init
 Note from "./Components/note.jsx";




function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    
    const noteWithId = {
    id: crypto.randomUUID(),
    heading: newNote.heading,
    details: newNote.details,
  };
    console.log("App received:", newNote);
    setNotes((previousNotes) => {
      return [...previousNotes, newNote];
    });
  }

  function deleteNote(indexToDelete) {
    setNotes((previousNotes) => {
      return previousNotes.filter(
        (node) => node.id !== indexToDelete
      );
    });
  }
  function editNote(indexToEdit, updatedNote) {
    setNotes((previousNotes) => {
      return previousNotes.map((note, index) => {
        if (index === indexToEdit) {
          return updatedNote;
        }

        return note;
      });
    });
  }

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <Form addNote={addNote} />

<div className="mx-auto mt-8 w-full max-w-7xl">
  <h2 className="mb-6 text-2xl font-bold text-black">
          Notes Area
        </h2> 
      </div>

  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {notes.map((note) => (
        <Note 
          key={note.id} 
          heading={note.heading} 
          details={note.details} 
          deleteNote={() => deleteNote(note.id)}
        />
        ))}
      </div>
    </div>
  );
}

export default App;
