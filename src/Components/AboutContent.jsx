import React from "react";
import styled from "styled-components";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { AiOutlineFile } from "react-icons/ai";

function AboutContent() {
  const openGit = () => {
    window.open("https://github.com/nofar5353", "_blank");
  };

  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/nofar-levy-58bb631bb/", "_blank");
  };
  return (
    <Container>
      <div>
        <h1>About me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, neque
          placeat. Voluptates reiciendis similique nisi quas enim cupiditate
          quibusdam explicabo, quo eos harum non consequatur atque quis mollitia
          esse voluptatum.
        </p>
        <BtnsUl>
          <li>
            <FiGithub className="iconStyle" onClick={openGit} />
            Github
          </li>
          <li>
            <FiLinkedin className="iconStyle" onClick={openLinkedin} />
            Linkedin
          </li>
          <li>
            <AiOutlineFile className="iconStyle" onClick={openGit} />
            Resume
          </li>
        </BtnsUl>
      </div>
      <ImgDiv>
        <img src={require("../images/me.png")} />
      </ImgDiv>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 70%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80vh;

  & > div:nth-of-type(1) {
    flex: 3;
    align-items: center;
    height: 100%;
  }
  & > div:nth-of-type(2) {
    flex: 1;
    align-items: flex-start;
    height: 100%;
  }
`;

const BtnsUl = styled.ul`
  list-style-type: none;

  & li {
    display: inline;
    margin: 1em;
  }
`;
const ImgDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  border-top: 1px solid #00ffbb;
  border-left: 1px solid #00ffbb;
  & > img {
    width: 80%;
    margin-top: 1em;
    margin-left: 1em;
    opacity: 0.6;
    border-top: 1px solid #00ffbb;
    border-left: 1px solid #00ffbb 50%;
  }

  & ::before {
    content: "";
    position: absolute;
    left: 0;
    z-index: 100;
    top: 0;
    width: 3px;
    height: 50%;
    background: #ffffff;
  }
`;
export default AboutContent;
