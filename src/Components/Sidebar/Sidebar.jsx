/**
 * Author: Ajay Gangisetti
 */
import React from 'react';

import BlogModal from './../BlogModal/BlogModal';

const formatDate = (date) => {
   date = new Date(date);
  return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
}

const Sidebar = props => {
  const { data, addNew } = props;
  const handleSave = newBlog =>{
    addNew(newBlog)
  }
  return (
    <div className="col-12 col-sm-4">
      <h2>Past Posts</h2>
      <ul className="list-group list-group-flush">
      {data.map(blog =>{
        return <li className="list-group-item" key={blog.id}>{formatDate(blog.timestamp)} - {blog.title}</li>
      })}
      </ul>
      <div className='mt-3'>
        <BlogModal 
          buttonLabel='Add Blog'
          submitLabel='Save'
          blogTitle='New Blog'
          handleSave={handleSave}
        />
      </div>
    </div>
  )
};

export default Sidebar;