import React from "react";

const ProjectIntroduction = ({ projectIntroductionData }) => {
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h5>
                <span>01 </span> Neler Sunuyoruz ?
              </h5>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text js-scroll__content">
              <p className="large-text">
                {projectIntroductionData.content}
              </p>
              <br />
              <p className="large-text">
                {projectIntroductionData.content2}
              </p>
              <br />
              <p className="large-text">
                {projectIntroductionData.content3}
              </p>
              {/*<ul className="smp-list mt-30">
                {projectIntroductionData.spmList.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
                </ul>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectIntroduction;
