"use client";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  const [active, setActive] = useState("collapseOne");
  const handelClick = (e) => setActive(active == e ? null : e);
  return (
    <div className="faq_area">
      <Accordion className="accordion" defaultActiveKey="collapseOne">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <Accordion.Toggle
              as={"button"}
              className={`accordion-button ${
                active == "collapseOne" ? "" : "collapsed"
              }`}
              eventKey="collapseOne"
              data-bs-toggle="collapse"
              onClick={() => handelClick("collapseOne")}
            >
              What are project-based rates?
            </Accordion.Toggle>
          </h2>
          <Accordion.Collapse eventKey="collapseOne">
            <div className="accordion-body">
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatems sequi nesciunt. neque porro quisquam est, qui
                dolorem ipsum quia dolor consectetur adipisci velit, sed quia
                non numquam eius modi tempora
              </p>
            </div>
          </Accordion.Collapse>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <Accordion.Toggle
              as={"button"}
              className={`accordion-button ${
                active == "collapseTwo" ? "" : "collapsed"
              }`}
              eventKey="collapseTwo"
              onClick={() => handelClick("collapseTwo")}
            >
              Developing core web applications
            </Accordion.Toggle>
          </h2>
          <Accordion.Collapse eventKey="collapseTwo">
            <div className="accordion-body">
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatems sequi nesciunt. neque porro quisquam est, qui
                dolorem ipsum quia dolor consectetur adipisci velit, sed quia
                non numquam eius modi tempora
              </p>
            </div>
          </Accordion.Collapse>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <Accordion.Toggle
              as={"button"}
              className={`accordion-button ${
                active == "collapseThree" ? "" : "collapsed"
              }`}
              eventKey="collapseThree"
              onClick={() => handelClick("collapseThree")}
            >
              Design should enrich our day
            </Accordion.Toggle>
          </h2>
          <Accordion.Collapse eventKey="collapseThree">
            <div className="accordion-body">
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatems sequi nesciunt. neque porro quisquam est, qui
                dolorem ipsum quia dolor consectetur adipisci velit, sed quia
                non numquam eius modi tempora
              </p>
            </div>
          </Accordion.Collapse>
        </div>
      </Accordion>
    </div>
  );
};
export default Faq;
