import React from 'react';
import './style.css'

function About() {
    return (
    <div className="proj row col-12" style={{backgroundImage: "/../../images/java.jpg"}}>
    <div className="One">
        <a name="about-me"><h2>About Me</h2></a>
        <br />
        <ul>
          <li>Born and Raised in Los Angeles</li> <br />
          <li>Experienced in the tech field</li> <br />
          <li>Interested in all aspects of programming, software development and website design</li> <br />
          <li><a href="assets/images/Tim Morse Resume.pdf" target="_blank" style={{color: "white"}}><b>Resume Link</b></a></li> <br />
        </ul>
      <a href="https://github.com/timmorse13" target="_blank"><button className="button">Github Profile</button></a>
      
    </div>
    <div className="Two">
            <a name="contact-info"><h2>Contact Info</h2></a>
            <br />
            <ul>
            <li>Phone Number: (661) 645-1607</li>
            <br />
            <li><a href="mailto: timmorse13@gmail.com" target="_blank">Timmorse13@gmail.com</a></li>
            <br />
            </ul>
            <p><a href="https://www.linkedin.com/in/tim-morse-57158519a/" target="_blank"><button className="button">LinkedIn Profile</button></a></p>
        </div>

</div>
    )
}

export default About