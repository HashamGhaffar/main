"use client";
import { useRef } from "react";
import Image from "next/image";

import FirstCard from "../common/firstCard";
import Hedding from "../common/hedding";
import Carousel from "../common/slider";
import AvailablePropertyCard from "../common/AvailablePropertyCard";
import { pngs, svgs } from "@/app/_constants/assets";

export default function AvailableProperties() {
  const sliderRef = useRef(null);
  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const carouselSettings = {
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 865,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section>
        <div className="flex flex-wrap md:flex-nowrap gap-y-[30px] sm:gap-x-[40px] lg:gap-x-[9%] pb-[80px]">
          <FirstCard
            img={pngs.buyAndSell}
            hedding="Buy & Sell of Properties"
            typography="If you are looking to invest your money in a plot, pre-made houses, or commercial shops we have extensive plans for our customers for all their needs. We also help them with personalized investment plans."
          />
          <FirstCard
            img={pngs.overseasClients}
            hedding="Overseas Clients"
            typography="We are offering our services to our overseas customers who are looking forward to investing in Pakistan. We provide services as well as we have a dedicated office in London, to personally deal with all your queries."
          />
          <FirstCard
            img={pngs.investmentPlans}
            hedding="Investment Plans"
            typography="We are offering our services to our overseas customers who are looking forward to investing in Pakistan. We provide services as well as we have a dedicated office in London, to personally deal with all your queries."
          />
        </div>
        <div className="mb-[60px]">
          <Hedding hedding="Properties Available in" span="Lahore" />
        </div>
        <div>
          <div className="slider-container relative space-x-4">
            <Carousel sliderRef={sliderRef} settings={carouselSettings}>
              <AvailablePropertyCard
                typography="Houses for Rent"
                bgimg={pngs.availableProperty1}
              />
              <AvailablePropertyCard
                typography="Houses for Sale"
                bgimg={pngs.availableProperty2}
              />
              <AvailablePropertyCard
                typography="Plot For Sale"
                bgimg={pngs.availableProperty3}
              />
            </Carousel>
            <div
              className="bg-[#ffffff] h-[43px] w-[43px] rounded-[50%] absolute top-[39%] right-[5px]"
              onClick={nextSlide}
            >
              <Image
                src={svgs.rightArrow}
                alt="RightArrow"
                height={24}
                width={24}
                className="mt-[13px] ml-[10px]"
              />
            </div>
            <div
              className="bg-[#ffffff] h-[43px] w-[43px] rounded-[50%] absolute top-[39%] left-[-10px]	"
              onClick={prevSlide}
            >
              <Image
                src={svgs.LeftArrow}
                alt="RightArrow"
                height={24}
                width={24}
                className="mt-[13px] ml-[10px]"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-[6px] mt-[30px]">
          <div className="h-[13px] w-[13px] rounded-[50%] bg-[#FF9D00]"></div>
          <div className="h-[13px] w-[13px] rounded-[50%] bg-[#D9D9D9]"></div>
        </div>
      </section>
    </>
  );
}
