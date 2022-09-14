/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProjectGallery = () => {
  return (
    <section className="projdtal">
      <div className="popup-img">
        <div className="row">
          <a href="#" className="col-md-3 popimg">
            <img alt="" src="/img/portfolio/project2/mobil/mobil-app-1.jpg" />
          </a>
          <a href="#" className="col-md-3 popimg">
            <img alt="" src="/img/portfolio/project2/mobil/mobil-app-2.jpg" />
          </a>
          <a href="#" className="col-md-3 popimg">
            <img alt="" src="/img/portfolio/project2/mobil/mobil-app-3.jpg" />
          </a>
          <a href="#" className="col-md-3 popimg">
            <img alt="" src="/img/portfolio/project2/mobil/mobil-app-4.jpg" />
          </a>
          {/*<a href="#" className="col-md-12 popimg">
            <img alt="" src="/img/portfolio/project2/mobil/7.jpg" />
          </a>*/}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
