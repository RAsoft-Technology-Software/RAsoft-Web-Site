/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import DarkTheme from "../layouts/Dark";
import ContactHeader from "../components/Contact-header/contact-header";
import ContactForm from "../components/Contact-form/contact-form";

const İletisim = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    document.querySelector("body").classList.add("contact-page");

    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
    return () => {
      document.querySelector("body").classList.remove("contact-page");
    };
  }, [navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <ContactHeader />
      <div className="main-content">
        <ContactForm />
        <div className="map" id="ieatmaps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12044.937488922546!2d29.1314023!3d40.9982431!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x76fee8f6808ea727!2sMira%20Tower!5e0!3m2!1str!2str!4v1659889303252!5m2!1str!2str"
            loading="lazy"
          ></iframe>
        </div>

        <Footer hideBGCOLOR />
      </div>
    </DarkTheme>
  );
};

export default İletisim;
