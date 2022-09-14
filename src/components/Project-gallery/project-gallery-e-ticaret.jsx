/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProjectGallery = () => {
  return (
    <section className="projdtal">
      <div className="popup-img">
        <div className="row">
          <a href="#" className="col-md-3 popimg">
            <img alt="" src="/img/portfolio/project2/eticaret/amazon.jpg" />
          </a>
          <a href="#" className="col-md-3 popimg">
            <img alt="" src="/img/portfolio/project2/eticaret/trendyol.jpg" />
          </a>
          <a href="#" className="col-md-3 popimg">
            <img alt="" src="/img/portfolio/project2/eticaret/hepsiburada.jpg" />
          </a>
          <a href="#" className="col-md-3 popimg">
            <img alt="" src="/img/portfolio/project2/eticaret/n11.jpg" />
          </a>
          {/*
          <a href="#" className="col-md-12 popimg">
            <img alt="" src="/img/portfolio/project2/eticaret/7.jpg" />
  </a>*/}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
