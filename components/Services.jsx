import React from 'react';

import design from "./services.module.css"

const ServicePage = () => {
  return (





    <section id="services">
        <div>
        <div className={design.services}><h1>Services</h1>
        <h5>what i offer</h5></div>
        </div>
        <div className={design.serviceContainer}>
      <div className={design.service}>
        <h2>UI-UX</h2>
        <br />
        <p>Beautiful and user-friendly interfaces for your applications.</p>
      </div>

      <div className={design.service}>
        <h2>Frontend</h2>
        <br />
        <p>High-quality frontend development using the latest technologies.</p>
      </div>

      <div className={design.service}>
        <h2>Web Marketing</h2>
        <br />
        <p>Effective web marketing strategies to boost your online presence.</p>
      </div>
    </div>
    </section>
  );
};

export default ServicePage;
