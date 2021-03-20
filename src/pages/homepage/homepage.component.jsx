import React from "react";
import "./homepage.styles.scss";

import { Link } from "react-router-dom";

import { Header } from "../../components/header/header.component";

import Header_image from "../../assets/home.jpg";

const Homepage = () => (
  <div className="homepage">
    <Header Header_image={Header_image}>
      <h1
        style={{ color: "white", fontSize: "50px" }}
        data-aos="fade-up"
        data-aos-duration="700"
      >
        Welcome to ProjectG our Graphics Project,
      </h1>
      <p
        style={{ fontSize: "40px", textAlign: "center" }}
        data-aos="fade-up"
        data-aos-duration="900"
      >
        We are working on a GAME !!!
      </p>
      <br></br>
      <div align="right" data-aos="fade-up" data-aos-duration="1100">
        <Link className="button" to="/about">
          Learn About Us!!!
        </Link>
      </div>
    </Header>
    <div className="main-heading" data-aos="fade-up" data-aos-duration="700">
      <h1>What's the Game About ?</h1>
    </div>
    <div className="features">
      <div className="blocks">
        <div className="para" data-aos="slide-right" data-aos-duration="500">
          <h1>What kind of Game?</h1>
          <p>
            We are working on a 2D game which is similar to Mario but with GUNS
            WEAPONS and SUPERPOWERS!!!
          </p>
          <div className="forScroll">
            <a href="#coins" className="scroll button">
              Learn About Platforms
            </a>
          </div>
        </div>
        <img
          src={require("../../assets/home-mario.jpg")}
          alt="why"
          data-aos="slide-left"
          data-aos-duration="500"
        />
      </div>
      <div className="blocks">
        <img
          src={require("../../assets/home-super.jpg")}
          alt="why"
          data-aos="slide-right"
          data-aos-duration="500"
        />
        <div className="para" data-aos="slide-left" data-aos-duration="500">
          <h1>What will the game contain ?</h1>
          <p>
            The game will feature 2 or 3 levels with variety of enemies and
            powers.
          </p>
          <div className="forScroll"></div>
        </div>
      </div>
      <div className="blocks">
        <div className="para" data-aos="slide-right" data-aos-duration="500">
          <h1>Why Choose a Game as project ?</h1>
          <p>
            Firstly this is an interesting project which piqued everyones
            interest in team. Secondly while designing this game we will be able
            to learn a lot of new things like latest frameworks and new
            laguages.
          </p>
        </div>
        <img
          src={require("../../assets/home-why.jpg")}
          alt="why"
          data-aos="slide-left"
          data-aos-duration="500"
        />
      </div>
    </div>
    <div
      className="main-heading"
      style={{ backgroundColor: "rgb(198, 253, 196)" }}
      data-aos="fade-up"
      data-aos-duration="700"
    >
      <h1>How to track our game's progress ?</h1>
    </div>
    <div className="features">
      <div className="blocks">
        <img
          src={require("../../assets/home-github.jpg")}
          alt="why"
          data-aos="slide-right"
          data-aos-duration="500"
        />
        <div className="para" data-aos="slide-left" data-aos-duration="500">
          <h1>Github</h1>
          <p>
            You can easily track our progress as well as the contribution of
            each member through our github repository the link to which is
            available in the About section you can navigate to it using the
            button on your top right.
          </p>
        </div>
      </div>
      <div className="blocks">
        <div className="para" data-aos="slide-right" data-aos-duration="500">
          <h1>Why Github?</h1>
          <p>
            Github is a platform which helps us to collaborate and share our
            code with each other just as if we are coding it on the same
            machine. It helps us to easily resolve the conflicts we might have
            in our code and is an overall developer friendly website.
          </p>
        </div>
        <img
          src={require("../../assets/home-whygit.png")}
          alt="why"
          data-aos="slide-left"
          data-aos-duration="500"
        />
      </div>
    </div>
    <div
      id="coins"
      className="main-heading"
      style={{ backgroundColor: "rgb(255, 208, 208)" }}
      data-aos="fade-up"
      data-aos-duration="700"
    >
      <h1>Platforms we are gonna use ?</h1>
    </div>
    <div className="features">
      <div className="blocks">
        <img
          src={require("../../assets/home-react.jpg")}
          alt="why"
          data-aos="slide-right"
          data-aos-duration="500"
        />
        <div className="para" data-aos="slide-left" data-aos-duration="500">
          <h1>React</h1>
          <p>
            The website you are on is developed in React as we are using React
            framework for the designing of our website. React is one of the well
            known frameworks for web development which is developed by Facebook
            and has a very big community.
          </p>
        </div>
      </div>
      <div className="blocks">
        <div className="para" data-aos="slide-right" data-aos-duration="500">
          <h1>Unity.</h1>
          <p>
            For the development of the game we have decided to choose unity as
            our main framework. It is an excellent framework which also supports
            cross-platform development and is also well known and has a big
            community to back it up.
          </p>
        </div>
        <img
          src={require("../../assets/home-unity.jpg")}
          alt="why"
          data-aos="slide-left"
          data-aos-duration="500"
        />
      </div>
      <div className="blocks">
        <img
          src={require("../../assets/home-C.jpg")}
          alt="why"
          data-aos="slide-right"
          data-aos-duration="500"
        />
        <div className="para" data-aos="slide-left" data-aos-duration="500">
          <h1>C#</h1>
          <p>
            Along with unity we are going to be using C# as our programming
            language. C# will be used to design the movements and other
            interactions for out game.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;
