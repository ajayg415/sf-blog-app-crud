/**
 * Author: Ajay Gangisetti
 */
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

const BlogModal = (props) => {
  const {
    buttonLabel,
    submitLabel,
    className,
    defaultData,
    blogTitle,
    handleSave
  } = props;
  const initFormData = Object.assign({title: '', text: ''}, defaultData);
  const [modal, setModal] = useState(false);
  const [blogData, setBlogData] = useState(initFormData);
  const toggle = () => setModal(!modal);

  const handleChange = ({target}) => {
    const {
      name,
      value
    } = target;
    setBlogData(Object.assign({...blogData}, {[name]: value}))
  }

  const handleClick = () => {
    handleSave(blogData);
    toggle();
  }

  return (
    <>
      <Button color="primary" className='btn btn-sm btn-primary' onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}>{blogTitle}</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Title</Label>
              <Input type="text" name="title" placeholder="Blog Title" 
                value={blogData.title} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Title</Label>
              <Input type="textarea" name="text" placeholder="Blog Desc" 
                value={blogData.text}
                onChange={handleChange} />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleClick}>{submitLabel}</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default BlogModal;