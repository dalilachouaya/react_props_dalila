import React, { Component } from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
class Footer extends Component {
  
  render() {
    const myStylea={
      paddingLeft: "5px",
      fontSize:"22px",
      textDecoration: "none",
      };

      const styleImg={
        borderStyle: "hidden",
        borderRadius:"5px",
        width:"40px",
        height:"40px",
      }
    return (
      <div className="container-1"style={{
        color: "#f1f1f1",
        textAlign: "center",
        fontFamily: "'Saira Semi Condensed', sans-serif",
        fontSize: "16px",
        backgroundImage: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
      }}>
        <img
          id="contactimg"
          src="/images/contactlogo.png"
          width="180px"
          height="180px"
          alt="contactlogo" style={{ borderStyle: "hidden",backgroundColor: "#f1f1f1", borderRadius: "90px",textTransform: "uppercase"}}
        />
        <h3>
          <strong>Dalila Chouaya</strong>
        </h3>
        <h4> Local : Main Street </h4>
        <h4>Email Id: aliladch2015@gmail.com</h4>
        <a
          id="mail"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=aliladch2015@gmail.com"
        style={myStylea}>
          <img src="/images/mailmeimg.png" alt="mail me" style={styleImg} />
          Click Here To Send Mail
        </a>
        <h4>Contant Info: +22169205854/+2169839902</h4>

        <a href="https://www.facebook.com/Dalila Abdallah" style={myStylea}>
          <span style={{ color: "antiquewhite" }}>
            <FaFacebook />
          </span>
        </a>
        <a href="https://twitter.com/techstud101" style={myStylea}>
          <span
            className="icon fa fa-twitter"
            style={{ color: "antiquewhite" }}
          >
            <FaTwitter />
          </span>
        </a>
        <a href="https://github.com/abhishek305" style={myStylea}>
          <span className="icon fa fa-github" style={{ color: "antiquewhite" }}>
            <FaGithub />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/abhishek-ezhava-477286146/" style={myStylea}>
          <span
            className="icon fa fa-linkedin-square"
            style={{ color: "antiquewhite" }}
          >
            <FaLinkedin />
          </span>
        </a>
        <a href="https://www.youtube.com/" style={myStylea}>
          <span style={{ color: "antiquewhite" }}>
            <FaYoutube />
          </span>
        </a>
      </div>
    )
  }}

export default Footer;
