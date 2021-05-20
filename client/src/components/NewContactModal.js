import * as React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useContacts } from "../contexts/ContactsProvider";

const NewContactModal = ({ closeModal }) => {
  const idRef = React.useRef();
  const nameRef = React.useRef();
  const { createContact } = useContacts();

  const handleSubmit = (e) => {
    e.preventDefault();

    createContact(idRef.current.value, nameRef.current.value);
    closeModal();
  };
  return (
    <>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>id</Form.Label>
            <Form.Control type="text" ref={idRef} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required />
          </Form.Group>
          <Button type="submot">Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default NewContactModal;
