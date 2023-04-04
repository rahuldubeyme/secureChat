import { Card, Button, Form, InputGroup } from 'react-bootstrap';
import { FaGoogle, FaPhoneAlt } from 'react-icons/fa';

function Authentication() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <Card className="my-5 shadow-lg">
            <Card.Body className="p-5">
              <h2 className="text-center mb-4">Authentication</h2>

              {/* Google Authentication Button */}
              <div align="center" className="p-5">
                <Button className="btn btn-google">
                  <FaGoogle />
                </Button>
              </div>

              {/* Divider */}
              <div className="text-center mb-4">
                <span className="bg-white px-3 text-muted">Or</span>
              </div>

              {/* Phone Number Authentication Form */}
              <Form>
                <Form.Group>
                  <Form.Label htmlFor="phoneNumber">Phone Number:</Form.Label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <FaPhoneAlt />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control type="tel" id="phoneNumber" placeholder="Enter phone number" />
                  </InputGroup>
                </Form.Group>

                <Button type="submit" className="btn btn-success btn-block">
                  Send Verification Code
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
