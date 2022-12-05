import React from 'react';
import Icons from './Icons';
import ResumePDF from '../images/nara-resume.pdf';
import { Container, Row, Col } from 'react-bootstrap';

export default function Resume() {
  return (
    <div>
      <h3 className="text-center text-color">Resume</h3>
      <p>Download my <a download href={ResumePDF}>Resume</a></p>
      <Container fluid>
        <Row>
          <Col sm={12} md={4}>
            <div className="mycard skill">
              <p>Front-end Proficiencies</p>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript ES6+</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>React</li>
                <li>Responsive Web Design</li>
              </ul>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div className="mycard skill">
              <p>Back-end Proficiencies</p>
              <ul>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL and Sequelize</li>
                <li>MongoDB and Mongoose</li>
                <li>REST APIs</li>
                <li>GraphQL</li>
                <li>TDD, Unit/Integration Testing</li>
              </ul>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div className="mycard skill">
              <p>Back-end Proficiencies</p>
              <ul>
                <li>Core Java 8</li>
                <li>Spring Framework</li>
                <li>Spring Boot</li>
                <li>Maven</li>
                <li>Docker and Kubernetes</li>
                <li>CI/CD</li>
                <li>Microservice Architecture</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <Icons />
    </div>
  );
}