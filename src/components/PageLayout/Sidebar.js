import React from "react";
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const readingBooks = useSelector(state => state.book.readingList)
  const finishedBooks = useSelector(state => state.book.finishedList)

  return (
    <div className='col-md-3'>
      <ul className='list-group sticky-top  py-2'>
        <NavLink as='li' className='list-group-item' to='/' exact>
          Discover
        </NavLink>
        <NavLink as='li' className='list-group-item' to='/reading'>
          Reading List <span className='badge badge-sm bg-primary'>{readingBooks.length}</span>
        </NavLink>
        <NavLink as='li' className='list-group-item' to='/finish'>
          Finished Books <span className='badge badge-sm bg-primary'>{finishedBooks.length}</span>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
