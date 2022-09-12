/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import initFullNavbarMenu from "../../common/initFullNavbarMenu";

const NavbarFullMenu = ({ theme }) => {
  React.useEffect(() => {
    initFullNavbarMenu()
  }, [])
  return (
    <>
      <div
        id="navi"
        className={`topnav ${theme ? (theme === "light" ? "light" : "") : ""}`}
      >
        <div className="container-fluid">
          <div className="logo">
            <a href="/">
              {theme ? (
                theme === "light" ? (
                  <img src={appData.darkLogo} alt="logo" />
                ) : (
                  <img src={appData.lightLogo} alt="logo" />
                )
              ) : (
                <img src={appData.lightLogo} alt="logo" />
              )}
            </a>
          </div>
          <div className="menu-icon">
            <span className="icon">
              <i></i>
              <i></i>
            </span>
            <span className="text" data-splitting>
              <span className="menu-text word">Menü</span>
            </span>
          </div>
        </div>
      </div>

      <div className="hamenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <div className="menu-links">
                <ul className="main-menu">
                  <li>
                    <div className="o-hidden">
                      <span className="link dmenu">
                        <span className="nm">01.</span>Çalışma Alanımız
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Geri
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/web-uygulamalari-gelistirme`}>
                              <a className="sub-link">
                                <span className="nm">01.</span>Web Uygulamaları Geliştirme
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/mobil-uygulama-gelistirme`}>
                              <a className="sub-link">
                                <span className="nm">02.</span>Mobil Uygulama Geliştirme
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/e-ticaret-entegrasyon-sistemleri`}>
                              <a className="sub-link">
                                <span className="nm">03.</span>E-Ticaret Entegrasyon Sistemleri
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/dijital-pazarlama`}>
                              <a className="sub-link">
                                <span className="nm">04.</span>Dijital Pazarlama
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/microsoft-cozumleri`}>
                              <a className="sub-link">
                                <span className="nm">05.</span>Microsoft Çözümleri
                              </a>
                            </Link>
                          </div>
                        </li>

                        <li>
                          <div className="o-hidden">
                            <Link href={`/powerbi-powerapps`}>
                              <a className="sub-link">
                                <span className="nm">06.</span>Power BI & PowerApps
                              </a>
                            </Link>
                          </div>
                        </li>
                    
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href={`/hakkimizda`}>
                        <a className="link">
                          <span className="nm">02.</span>Hakkımızda
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                    <Link href={`/projelerimiz`}>
                        <a className="link">
                          <span className="nm">03.</span>Projelerimiz
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                    <Link href={`/blog`}>
                        <a className="link">
                          <span className="nm">04.</span>Blog
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href={`/iletisim`}>
                        <a className="link">
                          <span className="nm">05.</span>İletişim
                        </a>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="cont-info">
                <div className="item">
                  <h6>Tel :</h6>
                  <a href="tel:+905413566434">+90 541 356 64 34</a>
                </div>
                <div className="item">
                  <h6>Adres :</h6>
                  <a href="https://goo.gl/maps/ifFkUfUokGgViwqQ9" target="_blank">
                    Tatlısu Mah. Şenol Güneş Bul. Şerifali No:2/A Ümraniye - İSTANBUL</a>
                </div>
                <div className="item">
                  <h6>E-Posta :</h6>
                  <p>
                    <a href="mailto:bilgi@rasoft.com.tr">bilgi@rasoft.com.tr</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarFullMenu;
