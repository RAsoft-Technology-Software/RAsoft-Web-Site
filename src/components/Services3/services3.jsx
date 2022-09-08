import React from "react";
import Link from "next/link";
import cardMouseEffect from "../../common/cardMouseEffect";

const Services3 = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
  }, []);
  return (
    <section className="feat sub-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Çalışma Alanlarımız
              </h6>
              <h3 className="wow color-font">
                Size özel stratejilerle, özgün ve entegre çözümler üretiyoruz.
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 items md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-monitor"></i>
              </span>
              <h5>Web Uygulamaları Geliştirme</h5>
              <p>
                Web sitenizi kurumsal kimliğinize uygun, mobil ve SEO
                kriterlerine uyumlu olarak özgün bir şekilde tasarlıyoruz.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items active md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-bolt-outline"></i>
              </span>
              <h5>Mobil Uygulama Geliştirme</h5>
              <p>
                RAsoft olarak, konumdan bağımsız işlem yapabilme, ürün ve
                hizmetlere 7/24 erişebilme özgürlüğü sağlıyoruz.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items sm-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-cube"></i>
              </span>
              <h5>Dijital Pazarlama</h5>
              <p>
                Markanızın itibarını yükseltecek, mesajını daha kaliteli bir
                şekilde iletmesini sağlayacak marka kimliği tasarımı ile hemen
                harekete geçin!
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-color-wand"></i>
              </span>
              <h5>Microsoft Çözümleri</h5>
              <p>
                Altyapılarınızı güçlendiriyor, doğru şekilde
                yönetmenizi sağlıyor, güvenlik açıklarını kapatıyor ve
                danışmanlık hizmetleri veriyoruz.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services3;
