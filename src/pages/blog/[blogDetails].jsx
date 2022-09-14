import React from "react";
//import blog3Data from "../data/blog3.json";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";
import PageHeader from "../../components/Page-header/page-header";
import Footer from "../../components/Footer/footer";
import dynamic from "next/dynamic";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";

const BlogDetailsDark = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const router = useRouter()
  const page = router.query.blogDetails
  console.log(page)

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

  /* BAŞARISIZ DENEME
  const myblog = ""
  if(page) {
    myblog = dynamic(() => import(`../../components/Blog-details/${page}`))
  }
  */


  const BlogDetails1 = dynamic(() => import("../../components/Blog-details/01-dijital-pazarlama"))
  const BlogDetails2 = dynamic(() => import("../../components/Blog-details/02-google-adwords"))
  const BlogDetails3 = dynamic(() => import("../../components/Blog-details/03-e-ticarette-seo"))
  const BlogDetails4 = dynamic(() => import("../../components/Blog-details/04-responsive-web"))
  const BlogDetails5 = dynamic(() => import("../../components/Blog-details/05-sosyal-medya-yonetimi"))           

  const blogComponents = {
    "dijital-pazarlama": <BlogDetails1 blog={"blog"} />,
    "google-adwords-ve-firmalara-katkilari": <BlogDetails2 blog={"blog"} />,
    "e-ticarette-seo-nun-onemi": <BlogDetails3 blog={"blog"} />,
    "responsive-web-sitesinin-musteriler-uzerindeki-etkisi": <BlogDetails4 blog={"blog"} />,
    "sosyal-medya-yonetimi-nasil-olmalidir": <BlogDetails5 blog={"blog"} />,
  }


  return (
    <DarkTheme>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} />
      <PageHeader
        title="Blog Details."
        paragraph="All the most current news and events of our creative team."
      />
      {/*<BlogDetails blog={"blog"} />*/}
      {blogComponents[page]}
      <Footer />
    </DarkTheme>
  );
};

export default BlogDetailsDark;
