import React from 'react'
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  // Early return pattern
  if(!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-lg w-48 overflow-hidden'>
       <ul className='border-b-2 pb-2'>
        <li>Home</li>
        <li>shorts</li>
        <li>Subscriptions</li>
      </ul>
      <ul className='border-b-2 py-2'>
        <li>Library</li>
        <li>History</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>
      <h1 className='font-bold py-2'>Subscriptions</h1>
      <ul className='border-b-2 pb-2'>
        <li>Ravish Kumar</li>
        <li>Askhay Saini</li>
        <li>Dhruv Rathee</li>
        <li>Kudvenkat</li>
      </ul>
      <h1 className='font-bold py-2'>Explore</h1>
      <ul className='border-b-2 pb-2'>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Learning</li>
        <li>Fashion and beauty</li>
      </ul>
    </div>
  )
}

export default Sidebar;