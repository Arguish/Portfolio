import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Col className="mb-5 mt-3 pt-md-3">
          <Row lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Row>
        </Col>
        <>
          <div
            style={{ display: "flex", flexWrap: "wrap" }}
            className=" po_items_ho"
          >
            {dataportfolio.map((data, i) => {
              return (
                <div key={i} className="po_item" style={{ width: 300 }}>
                  <img style={{ objectFit: "cover" }} src={data.img} alt="" />
                  <div style={{ color: "black", display: "flex" }}>
                    {data.tech &&
                      data.tech.map((a, i) => {
                        return (
                          <h6
                            style={{
                              margin: "1px auto",
                              background: "gray",
                              padding: "2px 7px",
                              borderRadius: "25px",
                            }}
                            key={i}
                          >
                            {a}
                          </h6>
                        );
                      })}
                  </div>
                  <div className="content">
                    <p>{data.description}</p>
                    <a href={data.link1}>Live Project</a>
                    <hr />
                    <a href={data.link2}>Git Repository</a>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      </Container>
    </HelmetProvider>
  );
};
