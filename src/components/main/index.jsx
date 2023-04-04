import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'react-bootstrap';


function MainBar() {
    return (
       

        <Container className="pt-5">
          <Container>
            <Row className="justify-content-center">
              <Col lg={6} className="text-center">
                <h1 className="display-4">Secure Chat with Anyone</h1>
                <p className="lead">Start chatting securely with anyone, anytime, anywhere</p>
              </Col>
            </Row>
          </Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <Form action="/chat.html">
                <FormGroup>
                <Form.Label className="text-left">Choose Language</Form.Label>
                  <Form.Select type="select" className="form-control" id="select1">
                    <option>Hindi</option>
                    <option>English</option>
                  </Form.Select>
                </FormGroup>
                <FormGroup>
                <Form.Label className="text-left" for="select2">Choose Algorithms</Form.Label>
                  <Form.Select type="select" className="form-control" id="select2">
                    <option>AES</option>
                    <option>RSA</option>
                    <option>DES</option>
                    <option>Blowfish</option>
                    <option>Twofish</option>
                    <option>Triple DES</option>
                    <option>ChaCha20</option>
                    <option>SHA-3</option>
                    <option>SHA-2</option>
                    <option>SHA-1</option>
                  </Form.Select>
                </FormGroup>
                <FormGroup>
                <Form.Label className="text-left" for="input2">Input Your Secret Key for encrypt messages</Form.Label>
                <Form.Control type="text" className="form-control" id="input2" placeholder="Enter input 2" />
                </FormGroup>
                <FormGroup>
                  <Form.Label  className="text-left" for="input3">Input Your Secret Key for decrypt messages</Form.Label>
                  <Form.Control type="text" className="form-control" id="input3" placeholder="Enter input 3" />
                </FormGroup>
                <div className="pt-2">
                  <Button type="submit" className="btn btn-primary float-right">Submit</Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
        

);
}

export default MainBar;
