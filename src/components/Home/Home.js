import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return ( 
    <> 
      <NavLink exact to={'/books'}>Link To Books</NavLink>
    </>
  );
}
