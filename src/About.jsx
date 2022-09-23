import "../src/About.css"
import Resume from "./Resume";

export default function About() {
  return (
    <div id="aboutdiv">
        <div id="abt-text">
      <h1>About Me</h1>
      <p>I am a graduate of Florida Southern College where I 
        studied Biology. I loved my time in school, I made many great 
        friends and learned a lot about biology. Although, I still maintain
        my passion for biology, I have decided to enroll in Boca Codes
        Software Engineering Career Course. I am looking forward to starting my career in tech as a junior developer
      </p>
      <h2>My Resume</h2>
      <Resume/>
      <h2 className="subheaders">Frelance Projects</h2>
      <h4 className="subheaders">
      IntelliRisk MVP (In Progress)
      </h4>
      <h5 className="subheaders" >
        Live: <a href="https://intellirisk-mvp.firebaseapp.com">https://intellirisk-mvp.firebaseapp.com</a>
        </h5>
        <br/>
        <h5>
        Description: As the sole developer, built a full stack web application which takes in documents and predicts the insurance needs of the customer based on keywords.
        </h5>
        <ul>
        <li>Built and deployed backend using node.js, express, mongoDB and Firebase
        </li>
        <br/>
        <li>
         Built and deployed front-end utilizing React and Firebase
         </li>
        </ul>
      </div>
    </div>
  );
}
