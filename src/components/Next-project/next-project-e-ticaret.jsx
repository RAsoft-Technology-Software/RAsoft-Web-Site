import React from "react";
import Link from "next/Link";

const NextProject = () => {
  return (
    <section className="next-prog section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="box">
              <div
                className="bg-img valign"
                style={{
                  backgroundImage: "url(/img/portfolio/project2/6.jpg)",
                }}
                data-overlay-dark="4"
              >
                <div className="caption ontop valign">
                  <div className="o-hidden full-width">
                    <h1>
                      <Link href="/dijital-pazarlama">
                      <a>
                        <div className="stroke">Dijital Pazarlama > </div>
                      </a></Link>
                    </h1>
                  </div>
                </div>
                <div className="copy-cap valign">
                  <div className="cap full-width">
                    <h1>
                      <a href="">
                        <span></span>
                      </a>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextProject;
