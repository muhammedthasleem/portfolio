import React, { useState } from "react";
import design from "./skills.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const [feActive, setFeActive] = useState(false);
  const [beActive, setBeActive] = useState(false);

  const feDropdown = () => {
    setFeActive(!feActive);
  };

  const beDropdown = () => {
    setBeActive(!beActive);
  };

  return (
    <section id='skills'>
    <div id={design.skills}>
      <div className={design.head}>
        <h1>Skills</h1>
        <h5>My technical level</h5>
      </div>
        <div className={design.dropdown}>
      <div className={design.frontend}>
        <button onClick={feDropdown}>Frontend Skills<FontAwesomeIcon icon={faChevronDown} className={design.icon}/></button>
        {feActive && (
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            {/* Add more frontend skills */}
          </ul>
        )}
      </div>

      <div className={design.frontend}>
        <button onClick={beDropdown}>Backend Skills<FontAwesomeIcon icon={faChevronDown} className={design.icon}/></button>
        {beActive && (
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL</li>
            {/* Add more backend skills */}
          </ul>
        )}
      </div>
      </div>
    </div>
    </section>
  );
};

export default Skills;
