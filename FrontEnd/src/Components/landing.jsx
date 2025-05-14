import React from "react";

import portfolio from "../assets/Portfolio-img.jpg";
import influence from "../assets/influenceIQ.mp4";
import green from "../assets/Greenbridge.png";
import codesen from "../assets/codesensei.png";
import git from "../assets/logo.png"
import link from "../assets/social.png"

import Timing from "./Timing";

const Landing = () => {
  return (
    <>
      <div className="main-container">
        <div className="nav">
          <div className="logo">MD ARIF KHAN</div>
          <div className="components">
            <ul>
              <li>
                <a href="#" className="underline-animate">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="underline-animate">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="underline-animate">
                  Skill
                </a>
              </li>
              <li>
                <a href="#" className="underline-animate">
                  Project
                </a>
              </li>
              <li>
                <a href="#" className="underline-animate">
                  Connect
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="home">
          <div className="home-div div_1"></div>
          <div className="home-div div_2"></div>
          <h1 className="home-h1">HEY, I AM ARIF</h1>
          <h1 className="home-h1">A DEVLOPER</h1>
        </div>
        <div className="home_scroll">
          <div className="scroll-text">Scroll</div>
          <div className="scroll-animation"></div>
        </div>

        <div className="about">
          <div className="main-para">
            <p>
              I utilize MongoDB, Express.js, React.js, and Node.js to develop innovative and responsive web applications. My aim is to design experiences that are fast, user-friendly, and functional, covering everything from the clear user interface to backend logic. I also endeavor to expand my understanding of data structures and algorithms, as well as explore the possibilities of artificial intelligence and machine learning, in order to stay abreast of the latest technological developments.
            </p>
          </div>
          <div className="part-start">ABOUT ME</div>
          <div className="about-me">
            <div className="about-img">
              <img src={portfolio}></img>
            </div>
            <div className="about-para">
              <p>
                Hi, I’m <h1>Arif</h1>. I hold a Diploma in Computer Science & Engineering from Dr. C.V. Raman University and am a passionate, self-motivated <h1>full-stack</h1> web developer. I focus on developing clean, responsive, and scalable web applications with modern technologies such as the MERN stack. At the Academy of Skill Development, I completed a practical internship during which I built full-stack projects, designed RESTful APIs, and collaborated through Git and GitHub.
                <br />
                <br />
                My participation in both a hackathon and an ideathon has been proactive, where I contributed to innovative solutions such as GreenBridge, a project aimed at sustainability through technology. I am presently immersing myself in the fields of <h1>Artificial Intelligence</h1> and <h1>Machine Learning</h1>, studying fundamental principles, algorithms, and their implementation using Python. To enhance my problem-solving skills and prepare for interviews, I’m also establishing a strong grounding in Data Structures and Algorithms.
              </p>
            </div>
          </div>
        </div>
        <div className="skill">
          <div className="part-start">SKILL'S</div>
          <div className="skill-para">
            <p>
              My expertise lies in full-stack web development utilizing the MERN stack, and I have a solid grounding in <h1>responsive UI design</h1>, <h1>API integration</h1>, and clean coding practices. I am also at ease with version control <h1>(Git/GitHub)</h1> and am continuously acquiring knowledge of new tools, currently working with JavaScript, React.js, Node.js, Express.js, and MongoDB.
            </p>
          </div>
          <div className="hr"></div>

          <div className="skill-card-cont">
            <div className="skill-cards">
              <h1>Programming Languages</h1>
              <div className="skill-types">
                <p>JavaScript</p>
                <p>C / C++</p>
                <p>Python</p>
                <p>HTML5</p>
                <p>CSS3</p>
              </div>
            </div>
            <div className="skill-cards">
              <h1>Web Development</h1>
              <div className="skill-types">
                <p>React.js</p>
                <p>Node.js</p>
                <p>Express.js</p>
                <p>MongoDB</p>
                <p>REST APIs</p>
                <p>Git & GitHub</p>
                <p>Tailwind CSS</p>
                <p>Bootstrap</p>
              </div>
            </div>
            <div className="skill-cards">
              <h1>Tools & Platforms</h1>
              <div className="skill-types">
                <p>VS Code</p>
                <p>Postman</p>
                <p>MongoDB Compass</p>
                <p>Netlify / Vercel</p>
              </div>
            </div>
            <div className="skill-cards">
              <h1>UI/UX & Design</h1>
              <div className="skill-types">
                <p>Responsive Design</p>
                <p>CSS Animations</p>
                <p>Dark/Light Themes</p>
              </div>
            </div>
            <div className="skill-cards">
              <h1>Currently Learning</h1>
              <div className="skill-types">
                <p>Machine Learning (Python)</p>
                <p>DSA in JS</p>
                <p>Redux / React Query</p>
              </div>
            </div>
          </div>
        </div>

        <div className="projects">
          <div className="part-start">PROJECT'S</div>

          <div className="project-list">
            <div className="project1 project">
              <div className="p1-video">
                <video
                  className="video"
                  src={influence}
                  autoPlay
                  loop
                  muted
                ></video>
              </div>
              <h1>INFLUENCE IQ</h1>
              <p>Influence Scoring System</p>
              <div className="skill-types p-types">
                <p>2025</p>
                <p>React</p>
                <p>Node</p>
                <p>Python</p>
                <p>Firebase</p>
              </div>
            </div>
            <div className="project2 project">
              <div className="p1-video">
                <img src={green}></img>
              </div>
              <h1>GREEN BRIDGE</h1>
              <p className="pro2-p">Green Tech Network</p>
              <div className="project2-p">
                <p>2025</p>
                <p>React</p>
                <p>Node</p>
                <p>Express</p>
              </div>
            </div>
            <div className="project3 project">
              <div className="p1-video p3-video">
                <img src={codesen}></img>
              </div>
              <h1 className="pro3-p">CODESENSEI AI</h1>
              <p className="pro3-p">Microservice Architecture</p>
              <div className="project3-p">
                <p>MERN</p>
                <p>Versel</p>
                <p>Gemini API</p>
                <p>2025</p>
              </div>
            </div>
          </div>
        </div>

        <div className="connect">
          <div className="part-start">CONNECT</div>
          <div className="connect-part">
            <div className="connect-form">
              <h1>CONTACT <span>ME!</span></h1>
              <form action="#">
                <input className="input" type="text" placeholder="Your Name"></input>
                <input className="input" type="email" placeholder="Your Email"></input>
                <textarea className="input" cols={30} rows={10} placeholder="Write Your Message"></textarea>
                <button className="btn" type="submit">Send Message</button>
              </form>
            </div>
            <div className="connect-details">
              <div className="contact-d1 common">
                <h1>REACH <span>ME AT!</span></h1>
                <p className="underline-animate">arif.dev.in18@gmail.com</p>
              </div>
              <div className="contact-d2 common">
                <h1>MY DIGITAL FOOTPRINTS</h1>
                <div className="d2-cont">
                  <img src={git}></img>
                  <a className="underline-animate" target="_blank" href="https://github.com/Arifkhan2007111">GitHub</a>
                </div>
                <div className="d2-cont">
                  <img src={link}></img>
                  <a className="underline-animate" target="_blank" href="https://www.linkedin.com/in/md-arif-khan-b002742aa/">LinkedIn</a>
                </div>
              </div>
              <div className="contact-d3 common">
                <h1>MY PLACE</h1>
                <p>Patna,India</p>
                <div><Timing /></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer">
          <div className="footer-d1">
            <p>Made with ❤️‍🔥 by <h1>Arif</h1> </p>
          </div>
          <div className="footer-d2">
            <a href="#">Back to top</a>
          </div>
          <div className="footer-d3">
            <p>© 2025 Arif — All rights reserved</p>
            <p>All visuals are concept representations</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default Landing;
