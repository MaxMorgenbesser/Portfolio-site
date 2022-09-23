import "../src/About.css";
import '../src/App.css'
// import { useNavigate } from "react-router-dom";

export default function About() {
    // const navigate= useNavigate()
  return (
    <div id="aboutdiv">
      <div id="abt-text">
        <h3>Contact Me</h3>
         maxwellmorgenbesser@gmail.com
        <br/>
       (631) 404-5493
        <h1>About Me</h1>
        <p>
          I am a graduate of Florida Southern College where I studied Biology. I
          loved my time in school. I made many great friends and learned a lot
          about biology. Although I still maintain my passion for biology, I
          enrolled in Boca Code's Software Engineering Career
          Course and graduated in September 2022. I am looking forward to starting my career in tech as a junior
          developer
        </p>
        <h2>My Resume</h2>
        <a  target="blank" href="https://firebasestorage.googleapis.com/v0/b/cat-blog-mm.appspot.com/o/MaxMorgenbesser_Resume_2022-1.pdf?alt=media&token=fc8d0f55-6f40-42b8-95c3-a3f2efbe9555">
       <button className="button" >See my resume!</button>
       </a>
        <h2 className="subheaders">Frelance Projects</h2>
        <h3 className="subheaders">IntelliRisk MVP (In Progress)</h3>
        <h5 className="subheaders">
          Live:
          <a  target="blank" href="https://intellirisk-mvp.firebaseapp.com">
            https://intellirisk-mvp.firebaseapp.com
          </a>
        </h5>
        <br/>
        <h5>
          Description: As the sole developer, built a full stack web application
          which takes in documents and predicts the insurance needs of the
          customer based on keywords.
        </h5>
        <ul className="subheaders">
            <li>
                Built conditional login, allowing users with proper credentials to see submitted documents.
            </li>
            <br/>
          <li>
            Built and deployed backend using node.js, express, mongoDB and
            Firebase
          </li>
          <br />
          <li>Built and deployed front-end utilizing React and Firebase</li>
        </ul>
        <h3 className="subheaders"> Web-Scraper</h3>
        <h5 className="subheaders">Description: Collaborated with a senior developer to obtain useful and plentiful information for a neural network</h5>
        <ul className="subheaders">
          <li>
           Utilized the python web-scraping library, "Scrapy" to efficiently scrape sites for specific information.
          </li>
          <br/>
          <li>Connected to and stored data using sqlite3.</li>
        </ul>
        <h2>Personal Projects</h2>
        <ul>
            <li>Resu-mii: <a target="blank" href="https://final-mm-fe.web.app ">https://final-mm-fe.web.app </a></li>
        </ul>
      </div>
    </div>
  );
}
