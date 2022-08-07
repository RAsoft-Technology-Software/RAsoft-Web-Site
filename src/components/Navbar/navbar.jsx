/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                <img ref={lr} src={appData.darkLogo} alt="logo" />
              ) : (
                <img ref={lr} src={appData.lightLogo} alt="logo" />
              )
            ) : (
              <img ref={lr} src={appData.lightLogo} alt="logo" />
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">

            <li className="nav-item">
              <Link href={`/about/about-dark`}>
                <a className="nav-link">Hakkımızda</a>
              </Link>
            </li>
            
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Çalışma Alanımız
              </span>
              <div className="dropdown-menu">
                <Link href={`/web-uygulamalari-gelistirme`}>
                  <a className="dropdown-item">Web Uygulamaları Geliştirme</a>
                </Link>
                <Link href={`/mobil-uygulama-gelistirme`}>
                  <a className="dropdown-item">Mobil Uygulama Geliştirme</a>
                </Link>
                <Link href={`/e-ticaret-entegrasyon-sistemleri`}>
                  <a className="dropdown-item">E-Ticaret Entegrasyon Sistemleri</a>
                </Link>
                <Link href={`/dijital-pazarlama`}>
                  <a className="dropdown-item">Dijital Pazarlama</a>
                </Link>
                <Link href={`/microsoft-cozumleri`}>
                  <a className="dropdown-item">Microsoft Çözümleri</a>
                </Link>
                <Link href={`/powerbi-powerapps`}>
                  <a className="dropdown-item">Power BI & PowerApps</a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href={`/projelerimiz`}>
                <a className="nav-link">Projelerimiz</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={`/blog`}>
                <a className="nav-link">Blog</a>
              </Link>
            </li>
            
            <li className="nav-item">
              <Link href={`/iletisim`}>
                <a className="nav-link">İletişim</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
