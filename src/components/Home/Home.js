import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Book() {
  return ( 
    <> 
      <NavLink to='/bookList'>
        {/* <p>Book List</p> */}
      </NavLink>
    </>
  );
}
