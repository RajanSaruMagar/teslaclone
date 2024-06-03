"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="px-64 pt-20">
        <video autoPlay muted width="1344" height="576" controls preload="none">
          <source src="/Models/1stcarosuel.webm" type="video/webm" />
        </video>
        <div className="px-[25%] pt-10">
          <p className="text-[20px] text-white font-semibold">
            Cinematic Experience
          </p>
          <div className="text-white text-[12px]">
            <p>
              A 17” touchscreen with left-right tilt offers 2200 x 1300
              resolution, true colors and{" "}
            </p>
            <p>exceptional responsiveness for gaming, movies and more.</p>
          </div>
        </div>
      </div>

      <div className="px-64 pt-20">
        <video autoPlay muted width="1344" height="576" controls preload="none">
          <source src="/Models/2ndcarosuel.mp4" type="video/mp4" />
        </video>
        <div className="px-[25%] pt-10">
          <p className="text-[20px] text-white font-semibold">Yoke Steering</p>
          <div className="text-white text-[12px]">
            <p>
              A bold new approach gives you a true connection to Model S,
              offering better steering{" "}
            </p>
            <p>
              feel and unobstructed views of your dash and the road ahead. Tap
              the brake and Model S
            </p>
            <p>
              automatically selects the correct direction to start your trip
            </p>
          </div>
        </div>
      </div>
      <div className="px-64 pt-20">
        <video autoPlay muted width="1344" height="576" controls preload="none">
          <source src="/Models/3rdcarosuel.webm" type="video/webm" />
        </video>
        <div className="px-[25%] pt-10">
          <p className="text-[20px] text-white font-semibold">
            Perfect Environment
          </p>
          <div className="text-white text-[12px]">
            <p>
              Air vents are hidden throughout the cabin, while tri-zone
              temperature controls, ventilated
            </p>
            <p>seats and HEPA filtration deliver the perfect environment.</p>
          </div>
        </div>
      </div>
      <div className="px-64 pt-20">
        <video autoPlay muted width="1344" height="576" controls preload="none">
          <source src="/Models/4thcarosuel.webm" type="video/webm" />
        </video>
        <div className="px-[25%] pt-10">
          <p className="text-[20px] text-white font-semibold">
            Redesigned Second Row
          </p>
          <div className="text-white text-[12px]">
            <p>
              Seating for three adults, with extra legroom, headroom and a
              stowable armrest with
            </p>
            <p>integrated storage and wireless charging.</p>
          </div>
        </div>
      </div>
      <div className="px-64 pt-10 h-[100px]">
        <video autoPlay muted width="1344" height="576" controls preload="none">
          <source src="/Models/5thcarosuel.webm" type="video/webm" />
        </video>
        <div className="px-[25%] pt-10">
          <p className="text-[20px] text-white font-semibold">Tesla Arcade</p>
          <p className="text-white text-[12px]">
            Play games on your in-car touchscreens.
          </p>
        </div>
      </div>
    </Slider>
  );
};

export default VideoCarousel;
