import React from 'react'
import { useState} from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Searchlist from './Searchlist.jsx'
function Searchcomp({ setResults }) {
    // const [results,setResults]=useState([])
    const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("http://localhost:4001/book")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((data) => {
          return (
            value &&
            data &&
            data.title &&
            data.title.toLowerCase().includes(value)
          );
        });
        console.log(results)
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <>
  
{/* <div className="dropdown dropdown-bottom dropdown-end flex"> */}
<input type="text" className="grow outline-none dark:bg-slate-900 dark:text-white px-2 py-1 h-10 mt-2 mr-2 border rounded-md flex items-center gap-2" placeholder="Search" value={input} onChange={(e)=>handleChange(e.target.value)}/>
  <div tabIndex={0} role="button" className="btn m-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg></div>
 
  {/* <Searchlist results={results}/> */}

    </>
  )
}

export default Searchcomp