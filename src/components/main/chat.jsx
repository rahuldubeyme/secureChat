import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPaperPlane } from 'react-icons/fa';

function ChatScreen() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello!', isReceived: true },
    { id: 2, text: 'Hi there!', isReceived: false },
    { id: 3, text: 'How are you?', isReceived: true },
  ]);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (message.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: message, isReceived: false },
      ]);
      setMessage('');
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="border rounded p-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-3 ${
                  msg.isReceived ? 'text-start' : 'text-end'
                }`}
              >
                <div
                  className={`bg-${
                    msg.isReceived ? 'light' : 'primary'
                  } rounded p-2 d-inline-block`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <Form onSubmit={handleFormSubmit} className="mt-3">
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              <FaPaperPlane /> Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ChatScreen;
