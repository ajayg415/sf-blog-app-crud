/**
 * Author: Ajay Gangisetti
 */
import React from 'react';

const fetchAllBlogs = async () => {
  let resp = await fetch(process.env.REACT_APP_GETALLBLOGS);
  return await resp.json()
};

const fetchBlockById = id => {

};

const createBlog =async (newPost) => {
  let resp = await fetch(process.env.REACT_APP_GETALLBLOGS,{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
  });
  return await resp.json();
};

const updateBlog = async (newPost) => {
  let resp = await fetch(`${process.env.REACT_APP_GETALLBLOGS}${newPost.id}`,{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
  });
  return await resp.json();
};

const deleteBlogById =async (id) => {
  let resp = await fetch(`${process.env.REACT_APP_GETALLBLOGS}${id}`,{
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  return await resp.status;
};

const deleteBlogs = () => {

};

export {fetchAllBlogs, fetchBlockById, createBlog, updateBlog, deleteBlogById, deleteBlogs}