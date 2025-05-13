import React from "react";

import portfolio from "../assets/Portfolio-img.jpg";
import influence from "../assets/influenceIQ.mp4";
import green from "../assets/Greenbridge.png";
import codesen from "../assets/codesensei.png";
import git from "../assets/logo.png"
import link from "../assets/social.png"

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
                  home
                </a>
              </li>
              <li>
                <a href="#" className="underline-animate">
                  about
                </a>
              </li>
              <li>
                <a href="#" className="underline-animate">
                  skill
                </a>
              </li>
              <li>
                <a href="#" className="underline-animate">
                  project
                </a>
              </li>
              <li>
                <a href="#" className="underline-animate">
                  connect
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
              I use MongoDB, Express.js, React.js, and Node.js to create
              cutting-edge, responsive online apps. From clear user interface to
              backend logic, my goal is to create experiences that are quick,
              easy to use, and functional. To keep up with the latest
              technological advancements, I also strive to enhance my knowledge
              of data structures and algorithms and investigate the potential of
              artificial intelligence and machine learning.
            </p>
          </div>
          <div className="part-start">ABOUT ME</div>
          <div className="about-me">
            <div className="about-img">
              <img src={portfolio}></img>
            </div>
            <div className="about-para">
              <p>
                Hi, I'm <h1>Arif</h1>—a passionate and self-motivated{" "}
                <h1>full-stack</h1> web developer with a Diploma in Computer
                Science & Engineering from Dr. C.V. Raman University. I
                specialize in creating clean, responsive, and scalable web
                applications using modern technologies like the MERN stack. I
                completed a hands-on internship at the Academy of Skill
                Development, where I built full-stack projects, designed RESTful
                APIs, and collaborated using Git and GitHub.
                <br />
                <br />
                I’ve actively participated in both a hackathon and an ideathon,
                contributing to innovative solutions like GreenBridge, a project
                focused on sustainability through technology. Currently, I’m
                diving into Artificial Intelligence and Machine Learning,
                learning core concepts, algorithms, and Python-based
                implementation. I’m also building a solid foundation in Data
                Structures and Algorithms to improve my problem-solving and
                interview readiness.
                <br />
                <br />
                In parallel, I'm crafting a custom dark-themed portfolio website
                with smooth animations, written entirely in manual CSS. I love
                experimenting with new tools and frameworks, and I’m constantly
                exploring ways to build smarter, more impactful digital
                experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="skill">
          <div className="part-start">SKILL'S</div>
          <div className="skill-para">
            <p>
              I specialize in full-stack web development using the MERN stack,
              with a strong foundation in responsive UI design, API integration,
              and clean code practices. I'm also comfortable with version
              control <h1> (Git/GitHub)</h1>, and continuously learning new
              tools like <h1> TypeScript</h1> and <h1> Next.js</h1>.
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
