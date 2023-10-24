import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import design from "./firstPage.module.css";
import myImage from "./images/me1.JPG"; // Import the image file

const FirstPage = () => {
  return (
    <section id='firstPage'>
    <div id={design.firstPage}>
      <div className={design.links}>
        <a href="https://github.com/muhammedthasleem" className={design.iconLink}>
          <FontAwesomeIcon icon={faGithub} className={design.icon} />
        </a>
        <a href="https://linkedin.com/in/muhammed-thasleem" className={design.iconLink}>
          <FontAwesomeIcon icon={faLinkedin} className={design.icon} />
        </a>
      </div>
      <div className={`${design.names} ${design.imageContainer}`}>
        <h1>Hi, I'm Muhammed Thasleem</h1>
        <h4>Full Stack Developer</h4>
        <h6>High-level experience in web design and development, producing quality work.</h6>
      </div>
      <div className={design.imageContainer}>
        <img src={myImage} alt="My Image" className={design.myImage} />
      </div>
    </div>
    </section>
  );
};

export default FirstPage;
