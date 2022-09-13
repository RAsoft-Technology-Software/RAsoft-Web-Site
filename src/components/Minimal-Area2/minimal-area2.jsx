/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Link from "next/link";
import { thumparallaxDown } from "../../common/thumparallax";

const MinimalArea2 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/min-area-demo.jpg" /* TODO resim değiştir */
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <h4 className="color-font">Siz yalnızca hayat edin.</h4>
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  Başarıya odaklanmış bir ekip ve müşterilerine daima daha iyiyi
                  sunmaya odaklanmış bir anlayışla dijital ihtiyaçlarınıza çözüm
                  üretiyoruz. 
                  <br></br>Bizi biz yapan ilkelerimizle müşterilerimiz için
                  hazırladığımız projelerde titizlik, kalite ve özgünlük
                  ilkelerinden asla taviz vermiyoruz.
                </p>
              </Split>
             
              <Link href={`/iletisim`}>
                <a
                  className="butn bord curve mt-40 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <span>İletişim</span>
                </a>
              </Link>

              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea2;
