import React from "react";
import { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <Container
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}
  >
    <div className="w-100" style={{ maxWidth: "600px" }}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          <Form>
            <Form.Group id="email" className="mt-4">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password" className="mt-4">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button className="w-100 mt-4" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Create an account? <a href="/signup">Sign Up</a>
      </div>
      </div>
    </Container>
  );
};

export default Login;
