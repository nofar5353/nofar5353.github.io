import React, { useState, useEffect } from "react";
import "../CSS/ProjectsSection.css";
import Project from "./Project";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper";
import { Virtual } from "swiper";
import toBeeLogo from "../images/beeLogo.png";
import bingAddictLogo from "../images/bingAddictLogo.png";
import tweetFluentLogo from "../images/tweetFluentLogo.png";
import toBeeImg from "../images/beeAppImg.png";
import bingAddictImg from "../images/bingAddictImg.png";
import tweetfluentImg from "../images/tweefluentImg.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/virtual";
import "swiper/css/effect-coverflow";

const projectsArray = [
  {
    id: 1,
    name: "ToBee",
    description: `Groups tasks app, users can create new groups and invite other users to join.
      In each group, each user can create or assign to tasks, chat and more…
      In addition, each user has a profile page, in which each user can manage his own to do list.
      `,
    imgUrl: toBeeImg,
    logoUrl: toBeeLogo,
    color: "#FDCB2C",
    Languages: "C# .NET   React Native   MS SQL   Firebase",
    link: "",
  },
  {
    id: 2,
    name: "BingAddict",
    description: `A social network and information provider for TV series based on TMDB API,
     Users can search series or choose series from “Popular series” list or from "Recommended for you" list which based on users with shared series.
     In each series users can comment and express their opinion on the series, add a series or actors to favorites list, live chat and more…`,
    imgUrl: bingAddictImg,
    logoUrl: bingAddictLogo,
    color: "#FF66C4",
    Languages: "JavaScript jQuery C#  MS SQL   Firebase ",
    link: "",
  },
  {
    id: 3,
    name: "TweetFluent",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae optio quis, earum ea at eaque voluptatem repudiandae illum aut est non nesciunt omnis molestiae doloremque aliquid dolores cum nobis laboriosam!",
    imgUrl: tweetfluentImg,
    logoUrl: tweetFluentLogo,
    color: "#31A4F1",
    Languages: "Python Tensorflow keras Tweepy",
    link: "",
  },
];

function ProjectsSection() {
  const swiper = useSwiper();

  return (
    <div className="projectsContainer">
      <h1>Some of my projects</h1>

      <div className="projectContant">
        <>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            // loop={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 1000,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
          >
            {projectsArray.map((p, index) => (
              <SwiperSlide>
                {({ isActive }) => (
                  <Project
                    key={p.id}
                    name={p.name}
                    description={p.description}
                    imgUrl={p.imgUrl}
                    logoUrl={p.logoUrl}
                    link={p.link}
                    Languages={p.Languages}
                    color={p.color}
                    isActive={isActive}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </>
        {/* <Swiper
          modules={[Virtual, Navigation, Pagination]}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          virtual
          effect="fade"
          style={{
            height: "70%",
            width: "50%",
            paddingLeft: "15vh",
            paddingRight: "15vh",
            paddingBottom: "2vh",
            paddingTop: "2vh",
          }}
        >
          {projectsArray.map((p, index) => (
            <SwiperSlide key={p.id} virtualIndex={index}>
              {({ isActive }) => (
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <Project
                    key={p.id}
                    name={p.name}
                    discription={p.discription}
                    imgUrl={p.imgUrl}
                    link={p.link}
                    isActive={isActive}
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
    </div>
  );
}

export default ProjectsSection;
