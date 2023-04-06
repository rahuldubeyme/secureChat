import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'react-bootstrap';


function homeBar() {
    return (
      <div className='row'>
        <div className='stories'>
        <h1>stories</h1>
        </div>
        <div className='feeds'>
        <h1>feeds</h1>
        </div>
      </div>
);
}

export default homeBar;
