import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class InsuaranceTypesHeader extends React.Component {
  render() {
    return (
      <>
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "600px",
            backgroundImage:
              "url(https://source.unsplash.com/collection/3848866/1600x900)",
            backgroundSize: "cover",
            backgroundPosition: "center top"
          }}
        >
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-8" />
          {/* Header container */}
          <Container className="d-flex align-items-center" fluid>
            <Row>
              <Col lg="7" md="10">
                <h1 className="display-2 text-white">Hello Jane Doe</h1>
                <p className="text-white mt-0 mb-5">
                  This is the insuarance page where you can view your current insuarance policies and even add new polices
                </p>
                <Button
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  New Insurance Type
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default InsuaranceTypesHeader;
