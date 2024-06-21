import React from 'react';
import Cards from './Cards';
import Smallcard from './Smallcard';

function Searchlist({ results }) {
  return (
    <div className=" top-0 left-0 right-0 z-50">
    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
      {results.map((result) => (
        <li key={result.id}>
          <Smallcard item={result} key={result.id} />
        </li>
      ))}
    </ul>
    </div>
  );
}

export default Searchlist;
