import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import "./Home.css";

const Home = () => {

  return (
    <div className="home-container">
      <h1>Welcome to FilmConnect</h1>
      <p>Connecting Screenwriters with Filmmakers & Investors</p>
      <button>Get Started</button>

      <section className="about-us">
        <h2>About Us</h2>
        <p>
          We are a platform that connects filmmakers (investors) with talented
          screenwriters to create the next big cinematic masterpiece. Our goal
          is to provide a space for creatives to find the resources and
          collaborators they need to bring their ideas to life. Join us today and
          be part of the future of filmmaking!
        </p>
      </section>
      <footer className="social-media">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="social-icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="social-icon" />
        </a>
      </footer>
    </div>
  );
};

export default Home;
