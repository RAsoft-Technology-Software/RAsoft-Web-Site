/* eslint-disable @next/next/no-img-element */
import React from "react";
import cardMouseEffect from "../../common/cardMouseEffect";
import { thumparallaxDown } from "../../common/thumparallax";

const MinimalArea = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg valign">
            <div className="content pt-0">
              <h4 className="wow color-font">Çalışma Standartlarımız</h4>
              <p className="wow txt" data-splitting>
              </p>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> Yüksek Kalite
                  </h6>
                  <p>
                    Akılda kalıcı {/*ve kullanıcıyı etkileyecek bir görsellik ortaya koyuyoruz,*/}
                  </p>
                </li>

                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> Hızlı
                  </h6>
                  <p>
                    Kullanıcıların en {/*çok dikkat ettiği konu olan sayfa yüklenme hızında harikalar yaratıyoruz,*/}
                  </p>
                </li>

                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> Özgün
                  </h6>
                  <p>
                    Markanızın mesajını {/*net bir şekilde aktarıyor ve sadeliği ön planda çıkarmaya özen gösteriyoruz,*/}
                  </p>
                </li>

                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>4</span> Responsive
                  </h6>
                  <p>
                    Kullanıcı deneyimini {/*iyileştirecek çözümleri ön plana çıkarırken Responsive Tasarım özelliğini de sizlere sunuyoruz,*/}
                  </p>
                </li>

                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <i className="icomoon-fontawesome-16x16-code" />
                    <span>5</span> Garanti ve Destek
                  </h6>
                  <p>
                    Sizlerden gelecek özel {/*taleplere göre şekillendirdiğimiz web tasarımı kusursuz bir şekilde sizlere teslim ediyoruz!*/}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
