"use client";
import { Fragment } from "react";
import Marquee from "react-fast-marquee";

const HeadingMarquee = ({ text = "Awards", length = 8, headingType = 0 }) => {
  const createArrayWithIndex = (length) => {
    let newArray = [];
    for (let i = 0; i < length; i++) {
      newArray.push(i);
    }
    return newArray;
  };
  return (
    <div className={`section_heading section_heading_${headingType}`}>
      <div className="container-fluid">
        <h2>
          <Marquee>
            {createArrayWithIndex(length).map((t, i) => (
              <Fragment key={i}>
                {i % 2 != 1 ? text : <span>{text}</span>}
              </Fragment>
            ))}
          </Marquee>
        </h2>
        {/* <h2>
          Awards<span>Awards</span>Awards<span>Awards</span>
        </h2> */}
      </div>
    </div>
  );
};
export default HeadingMarquee;
