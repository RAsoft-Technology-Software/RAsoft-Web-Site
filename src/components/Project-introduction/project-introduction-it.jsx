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
            <b className="large-text">
                {projectIntroductionData.title}
              </b>
              <br />
              <p className="large-text">
                {projectIntroductionData.contentp1}
              </p>
              <br />
              <p className="large-text">
                {projectIntroductionData.contentp2}
              </p>
              <br />
              <p className="large-text">
                {projectIntroductionData.contentp3}
              </p>
              <br />
              <b className="large-text">
                {projectIntroductionData.title2}
              </b>
              <br />
              <b className="large-text">
                {projectIntroductionData.contentp4}
              </b>
              <br />
              <p className="large-text">
                {projectIntroductionData.contentp5}
              </p>
              <br />
              <p className="large-text">
                {projectIntroductionData.contentp6}
              </p>
              <br />
              <p className="large-text">
                {projectIntroductionData.contentp7}
              </p>
              <br />
              <b className="large-text">
                {projectIntroductionData.title3}
              </b>
              <p className="large-text">
                {projectIntroductionData.contentp8}
              </p>
              <br />
              <b className="large-text">
                {projectIntroductionData.title4}
              </b>
              <p className="large-text">
                {projectIntroductionData.contentp9}
              </p>
              <br />
              <p className="large-text">
                {projectIntroductionData.contentp10}
              </p>
              <br />
              <b className="large-text">
                {projectIntroductionData.title5}
              </b>
              <br />
              <p className="large-text">
                {projectIntroductionData.contentp11}
              </p>
              <br />
              <b className="large-text">
                {projectIntroductionData.title6}
              </b>
              <p className="large-text">
                {projectIntroductionData.contentp12}
              </p>
              <br />
              <b className="large-text">
                {projectIntroductionData.title7}
              </b>
              <p className="large-text">
                {projectIntroductionData.contentp13}
              </p>
              <br />
              <p className="large-text">
                {projectIntroductionData.contentp14}
              </p>
              <br />
              <p className="large-text">
                {projectIntroductionData.contentp15}
              </p>
              <br />
              <p className="large-text">
                {projectIntroductionData.contentp16}
              </p>
              <br />

















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
