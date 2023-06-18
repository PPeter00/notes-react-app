import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Notes from './pages/Notes'
import CreateNote from './pages/CreateNote'
import EditNote from './pages/EditNote'
//import dmNotes from './dm-notes'



function App() {
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
    
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])
  return (
    <main id='app'>
        <BrowserRouter>
           <Routes>
              <Route path='/notes-react-app/' element={
              <Notes notes={notes}/>} />
              <Route path='notes-react-app/create-note' element={<CreateNote setNotes={setNotes}/>} />
              <Route path='notes-react-app/edit-note/:id' element={<EditNote notes={notes} setNotes={setNotes} />} />
            </Routes>
        </BrowserRouter>
    </main>
  );
}

export default App;
