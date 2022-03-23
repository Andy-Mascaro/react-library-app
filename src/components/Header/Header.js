import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <div className='header'>
      <ul>
        <NavLink exact to={'/bookList'}>
          <p>Book List</p>
        </NavLink>
        <NavLink exact to={'/bookDetail'}>
          <p>Details About Book</p>
        </NavLink>
      </ul>
    </div>
  );
}
