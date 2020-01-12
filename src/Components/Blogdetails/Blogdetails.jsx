/**
 * Author: Ajay Gangisetti
 */
import React from 'react';
import Blog from '../Blog/Blog';

import './Blogdetails.css'

const Blogdetails = props => {
  const { data, deleteBlog, updatingBlog } = props;



  return (
    <div className="col-12 col-sm-8">
      <h2>Past Posts</h2>
      <ul className="list-group list-group-flush">
      {data.map(blog =>{
        return <Blog data={blog} key={blog.id} deleteBlog={deleteBlog} updatingBlog={updatingBlog}/>
      })}
      </ul>
    </div>
  )
};

export default Blogdetails;