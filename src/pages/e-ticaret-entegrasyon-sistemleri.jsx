import React from "react";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import DarkTheme from "../layouts/Dark";
import ProjectDetails2Header from "../components/Project-details2-header/project-details2-header-e-ticaret";
import ProjectDate from "../data/project-details2-e-ticaret.json";
import ProjectIntroduction from "../components/Project-introduction/project-introduction-e-ticaret";
import ProjectGallery from "../components/Project-gallery/project-gallery-e-ticaret";
import ProjectDescription from "../components/Project-description/project-description";
import ProjectVideo from "../components/Project-video/project-video";
import NextProject from "../components/Next-project/next-project";

const ETicaretEntegrasyonSitemleri = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
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
  }, [navbarRef]);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <div className="wrapper">
        <ProjectDetails2Header projectHeaderData={ProjectDate} />
        <ProjectIntroduction projectIntroductionData={ProjectDate.intro} />
        {/*<ProjectDescription projectDescriptionData={ProjectDate.description} />*/}
        <ProjectGallery />
        {/*<ProjectVideo projectVideoDate={ProjectDate} />*/}
        <NextProject />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default ETicaretEntegrasyonSitemleri;
