import { useState ,useEffect } from 'react'

// import './App.css'


const Search = ({searchTerm , setSearchTerm}) => {

  return (
    <main>
    <div className='search'>
        <div>
            <img src="search(1).svg" />
            <input 
              type="text" 
              placeholder="Search for a movie, tv show, person..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
    </div>
    </main>
  )
}

export default Search
