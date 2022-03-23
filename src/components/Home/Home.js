import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Book() {
  return ( 
    <> 
      <NavLink exact to='/bookList'></NavLink>
    </>
  );
}
