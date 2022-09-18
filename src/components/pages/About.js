import React from 'react';
import ImageCoding from '../images/coding-languages.jpg';
import ImageProfile from '../images/profile-picture.jpeg';
import Icons from './Icons';

export default function About() {
  return (
    <div>
      <figure>
        <img className="top-picture" src={ImageCoding} alt="Coding Languages" />
          <figcaption>Learning to Learn is Key!</figcaption>
      </figure>
      <h3 className="text-center text-color">About Me</h3>
      <div className="container">
        <img className="profile-picture" src={ImageProfile} alt="Profile" />
        <p>Full Stack Web Developer with a background of software developer and life-long dedication to
          learning. Accumulated a plethora of experience and knowledge in financial sector. Effective at combining creativity and analytical problem-solving skills to develop user-friendly applications.</p>
        <p>Recently earned a certificate in Full Stack Web Development from a Coding Bootcamp of the
          University of Denver. Result-oriented, self-starter whose drive and sense of urgency are tempered and disciplined by concern for the accuracy and quality of work.</p>
      </div>
      <Icons />
    </div>
  );
}
