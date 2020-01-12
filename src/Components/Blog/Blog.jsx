/**
 * Author: Ajay Gangisetti
 */
import React from 'react';
import './Blog.css'

import BlogModal from './../BlogModal/BlogModal';

const Blog = props => {
  const { data, deleteBlog, updatingBlog } = props;

  const handleClick = () =>{
    deleteBlog(data.id);
  }


  return (
    <div className="card mb-2">
      <div className="card-header text-left">{data.title}</div>
      <div className="card-body">{data.text}</div>
      <div className="card-footer text-right">
        <BlogModal 
          buttonLabel='Edit Blog'
          submitLabel='Update'
          blogTitle='Edit Blog'
          defaultData={data}
          handleSave={updatingBlog}
        />
        <button className="btn btn-sm btn-danger" onClick={handleClick}>Delete</button>
      </div>
    </div>
  )
};

export default Blog;