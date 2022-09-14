/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProjectGallery = () => {
  return (
    <section className="projdtal">
      <div className="popup-img">
        <div className="row">
          <a href="#" className="col-md-3 popimg">
            <img alt="" src="/img/portfolio/project2/it/veeam.jpg" />
          </a>
          <a href="#" className="col-md-3 popimg">
            <img alt="" src="/img/portfolio/project2/it/vmware.jpg" />
          </a>
          <a href="#" className="col-md-3 popimg">
            <img alt="" src="/img/portfolio/project2/it/azure.jpg" />
          </a>
          <a href="#" className="col-md-3 popimg">
            <img alt="" src="/img/portfolio/project2/it/hpe.jpg" />
          </a>
          {/*<a href="#" className="col-md-12 popimg">
            <img alt="" src="/img/portfolio/project2/it/7.jpg" />
          </a>*/}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
