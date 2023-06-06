import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import back from "../../assets/photo_5999151787694733785_w_topaz_denoise_enhance_faceai_sharpen.jpeg";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div className="h_bg-image order-1 order-lg-2 h-100 ">
            <div
              style={{
                background: `linear-gradient(0.25turn, rgba(0,0,0,1), rgba(0,0,0,0))`,
                width: "80vw",
                height: "100vh",
                transform: "translateX(-700px)",
                position: "absolute",
                zIndex: "50",
              }}
            ></div>
            <img
              style={{
                height: "100vh",
                transform: "translateX(-200px)",
              }}
              src={back}
              alt=""
            ></img>
          </div>
          <div
            style={{ zIndex: "100" }}
            className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center"
          >
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">Javier Herández</h2>
                <hr />
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      Mi Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contactame!
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
