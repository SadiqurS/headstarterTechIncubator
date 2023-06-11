import React from "react";
import { Container } from "react-bootstrap";
import CompanySignup from "./CompanySignup";

const SignupPage = () => {

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "600px" }}>
        <CompanySignup />
      </div>
    </Container>
  );
};

export default SignupPage;
