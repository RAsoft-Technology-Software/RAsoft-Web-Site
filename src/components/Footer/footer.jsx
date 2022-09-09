/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { useState } from "react";

const Footer = ({ hideBGCOLOR }) => {
  const [mail, setMail] = useState('');

  const aboneOl = (e) => {
    e.preventDefault()

    console.log("abone olduk ", mail)
    //alert("Abone oldunuz!");
  }

  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Bize Ulaşın</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Adres</h6>
                    <p>Tatlısu Mah. Şenol Güneş Bul. Şerifali No:2/A, Ümraniye, İSTANBUL</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email</h6>
                    <p>bilgi@rasoft.com.tr</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Telefon</h6>
                    <p>+90 541 356 64 34</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Blog{/*Recent News*/}</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <img src="/img/blog/1.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <p>
                          The Start-Up Ultimate Guide to Make Your WordPress
                          Journal.
                        </p>
                      </a>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <a>
                        <span className="date">14 sep 2022</span>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <img src="/img/blog/2.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <p>
                          The Start-Up Ultimate Guide to Make Your WordPress
                          Journal.
                        </p>
                      </a>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <a>
                        <span className="date">14 sep 2022</span>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="subscribe">
                    <input type="text" id="email" name="email" onChange={e => setMail(e.target.value)} placeholder="Emailinizi Giriniz" />
                    <button className="subs pe-7s-paper-plane" onClick={aboneOl}></button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
                <a href="https://wa.me/905413566434" className="icon">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://www.facebook.com/rasoft.sosyal/" className="icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/" className="icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/company/rasoft-sosyal/" className="icon">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              <div className="copy-right">
                  <p>
                  © 2022, RAsoft. Made with lots of&nbsp;
                  <img draggable="false" role="img" className="emoji" alt="❤" src="https://s.w.org/images/core/emoji/14.0.0/svg/2764.svg"/>
                    &nbsp;and&nbsp;
                  <img draggable="false" role="img" className="emoji" alt="☕" src="https://s.w.org/images/core/emoji/14.0.0/svg/2615.svg"/>
                    &nbsp;in&nbsp;
                  <Link
                    href="https://goo.gl/maps/gtXGgojg7591dFfy6"
                  >
                    <a target="_blank">Istanbul, TURKEY</a>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
