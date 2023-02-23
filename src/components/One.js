import React from "react";
import slide1 from "../images/slide01.jpg";
import styled from "styled-components";

const One = () => {
  const OneSection = styled.section`
    padding-bottom: 0;

    #one .slider .viewer {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: 0;
    }

    #one .slider .slide img {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  `;

  return (
    <OneSection id="one" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>Lorem ipsum dolor</h2>
          <p>
            Ipsum dolor tempus commodo turpis adipiscing adipiscing in tempor
            placerat
            <br />
            sed amet accumsan enim lorem sem turpis ut. Massa amet erat accumsan
            curae
            <br />
            blandit porttitor faucibus in nisl nisi volutpat massa mi non
            nascetur.
          </p>
        </header>
        <div className="slider">
          <span className="nav-previous"></span>
          <div className="viewer">
            <div className="reel">
              <div className="slide">
                <img src={slide1} alt="" />
              </div>
            </div>
          </div>
          <span className="nav-next"></span>
        </div>
      </div>
    </OneSection>
  );
};

export default One;
