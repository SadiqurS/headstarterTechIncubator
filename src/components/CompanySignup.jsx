import React from "react";
import { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";
const CompanySignup = () => {
  const companyNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth()
  

    signup(emailRef.current.value, passwordRef.current.value)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form>
            <Form.Group id="company-name" className="mt-4">
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text" ref={companyNameRef} required />
            </Form.Group>
            <Form.Group id="email" className="mt-4">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password" className="mt-4">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button className="w-100 mt-4" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <a href="/login">Log In</a>
      </div>
    </>
    function handleSubmit(e) {
      e.preventDefault()
  );

  
};

export default CompanySignup;
