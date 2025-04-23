import React from "react";

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
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="underline-animate">
                  Services
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="home">
          <div className="home-div"></div>
          <div className="home-div"></div>
          <h1 className="home-h1">HEY, I AM ARIF</h1>
          <h1 className="home-h1">A DEVLOPER</h1>
        </div>

        <div className="about">
          <p>
            I use MongoDB, Express.js, React.js, and Node.js to create
            cutting-edge, responsive online apps. From clear user interface to
            backend logic, my goal is to create experiences that are quick, easy
            to use, and functional. To keep up with the latest technological
            advancements, I also strive to enhance my knowledge of data
            structures and algorithms and investigate the potential of
            artificial intelligence and machine learning.
          </p>
        </div>
      </div>
    </>
  );
};

export default Landing;
