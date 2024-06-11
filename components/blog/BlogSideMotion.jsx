// src/components/Sidebar.js
import React from 'react';

const BlogSideMotion = () => {
  return (
    <div className='sticky top-0 h-screen bg-gray-200 p-4 w-64'>
      <ul>
        <li className='p-2 border-b border-gray-300'>Home</li>
        <li className='p-2 border-b border-gray-300'>About</li>
        <li className='p-2 border-b border-gray-300'>Services</li>
        <li className='p-2 border-b border-gray-300'>Contact</li>
      </ul>
    </div>
  );
};

export default BlogSideMotion;
