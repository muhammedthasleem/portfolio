import React, { useState } from "react";
import design from "./contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarker } from "@fortawesome/free-solid-svg-icons";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");



  const handleCall = () => {
    window.location.href = "tel:+917034176901";
  };

  const handleEmail = () => {
    window.location.href = "mailto:muhammedthasleem14@gmail.com";
  };

  const handleLocation = () => {
    window.location.href = "https://goo.gl/maps/cqEPv8ixQz1jFYug8";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    
    setEmail("");
    setMessage("");
  };

  return (
    <section id='contact'>
    <div id={design.contact}>
  <h1>Contact Admin</h1>

  <form onSubmit={handleSubmit}>
    <table>
      <tbody>
        <tr>
          <td><label htmlFor="name">Name:</label></td>
          <td>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </td>
        </tr>
        <tr>
          <td><label htmlFor="email">Email:</label></td>
          <td>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </td>
        </tr>
        <tr>
          <td><label htmlFor="message">Message:</label></td>
          <td>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button type="submit">Submit</button>
          </td>
        </tr>
      </tbody>
    </table>
  </form>
  <div className={design.buttons}>
      <button className={design.button} onClick={handleCall}>
        <FontAwesomeIcon icon={faPhone} className={design.icon} />
        Call
      </button>
      <button className={design.button} onClick={handleEmail}>
        <FontAwesomeIcon icon={faEnvelope} className={design.icon} />
        Email
      </button>
      <button className={design.button} onClick={handleLocation}>
        <FontAwesomeIcon icon={faMapMarker} className={design.icon} />
        Location
      </button>
    </div>
</div>
</section>

  );
};

export default Contact;
