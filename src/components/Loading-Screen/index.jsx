import React from "react";
import Script from "next/script";
import loadingPace from "../../common/loadingPace";
import appData from "../../data/app.json";

const LoadingScreen = () => {
  React.useEffect(() => {
    let bodyEl = document.querySelector("body");
    if (appData.showLoading) {
      loadingPace();
      
      if (bodyEl.classList.contains("hideX")) {
        bodyEl.classList.remove("hideX");
      }
    } else {
      bodyEl.classList.add("hideX");
    }
  });
  return (
    <>
      <div className={`${appData.showLoading === true ? "showX" : "hideX"}`}>
        <div className="loading">
          <span>Y</span>
          <span>Ü</span>
          <span>K</span>
          <span>L</span>
          <span>E</span>
          <span>N</span>
          <span>İ</span>
          <span>Y</span>
          <span>O</span>
          <span>R</span>
        </div>
        <div id="preloader"></div>
      </div>
      {appData.showLoading ? (
        <Script
          id="pace"
          strategy="beforeInteractive"
          src="/js/pace.min.js"
        ></Script>
      ) : (
        ""
      )}
    </>
  );
};

export default LoadingScreen;
