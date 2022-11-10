import React from 'react';
import Icons from './Icons';
import ResumePDF from '../images/nararesume.pdf';
import { Container, Row, Col } from 'react-bootstrap';

export default function Resume() {
  return (
    <div>
      <h3 className="text-center text-color">Resume</h3>
      <p>Download my <a download href={ResumePDF}>Resume</a></p>
      <Container fluid>
        <Row>
          <Col sm={12} md={6}>
            <div className="mycard skill">
              <p>Front-end Proficiencies</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>React</li>
                <li>Media and Responsive Design</li>
              </ul>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="mycard skill">
              <p>Back-end Proficiencies</p>
              <ul>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL and Sequelize</li>
                <li>MongoDB and Mongoose</li>
                <li>REST APIs</li>
                <li>GraphQL</li>
                <li>AWS</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <Icons />
    </div>
  );
}