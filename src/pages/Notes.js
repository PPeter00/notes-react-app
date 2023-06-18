
import { CiSearch } from 'react-icons/ci'
import { MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { BsPlusLg } from 'react-icons/bs'

import NoteItem from '../components/NoteItem'
import { useEffect, useState } from 'react'
function Notes({notes}) {

    const [showSearch, setShowSearch] = useState(false);
    const [text, setText] = useState('');
    const [filteredNotes, setFilteredNotes] = useState(notes);


    const handleSearch = () => {
        setFilteredNotes(notes.filter(note => {
            if(note.title.toLowerCase().match(text.toLocaleLowerCase())){
                return note;
            }
        }))
    }
    useEffect( handleSearch, [text] )
  return (
    <section id='section-notes'>
        <header className='notes_header'>
            {!showSearch && <h2>Notes</h2>}
            {showSearch && <input type='text' value={text} onChange={(e) => {setText(e.target.value); handleSearch()}} autoFocus placeholder='keyword...' />
            }
            
            <button className='btn' onClick={() => setShowSearch(prevState => !prevState)}>{showSearch ? <MdClose/> : <CiSearch/>}</button>
        </header>
        <div className='notes_container'>
            {filteredNotes.length == 0 && <p className='empty_notes'>Note notes found.</p>}
            {
                filteredNotes.map(note => <NoteItem key={note.id} note={note}/>)
            }
        </div>
        <Link to="/notes-react-app/create-note" className='btn add_btn'><BsPlusLg/></Link>
    </section>
  )
}
export default Notes
