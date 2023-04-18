import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Welcome() {
  const imageData = [
    {
      label: "Image 1",
      alt: "image1",
      url: "/src/assets/dock.jpg",
    },
    {
      label: "Image 2",
      alt: "image2",
      url: "/src/assets/dock 2.jpg",
    },
  ];

  const textData = [
    {
      id: "text1",
      text1: "Trade",
      text2: "Without Border",
      text3:
        "Nothing should impede you to grow your business. Let the world hear about your product, and grow without border.",
    },
    {
      id: "text2",
      text1: "Shipping",
      text2: "Without Border",
      text3:
        "It’s easier now to expand your business without border. Backed with our digital platform, you can easily ship to hundreds of cities and ports around the world.",
    },
  ];

  const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
      <img src={image.url} alt={image.alt} />
    </div>
  ));

  const renderText = textData.map((text) => (
    <div key={text.alt} className="flex flex-col p-20 text-left pt-96 gap-y-2">
      <p className="text-white font-bold text-4xl">{text.text1}</p>
      <p className="font-bold text-white text-6xl">{text.text2}</p>
      <p className="text-white">{text.text3}</p>
    </div>
  ));

  return (
    <div className="w-full min-h-screen">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        className="absolute z-0"
      >
        {renderSlides}
      </Carousel>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        className="absolute z-0"
      >
        {renderText}
      </Carousel>
      <div className="absolute z-10 w-full min-h-screen">
        <nav className="flex flex-row top-0 justify-between px-20 py-5">
          <img src="/src/assets/logo_andalin.jpg" />
          <a href="/" className="text-white">
            Welcome
          </a>
          <a href="/login" className="text-white">
            Login
          </a>
        </nav>
        {/* <div className="flex flex-col p-20 text-left pt-96 gap-y-2">
          <p className="text-white font-bold text-4xl">Trade</p>
          <p className="font-bold text-white text-6xl">Without Border</p>
          <p className="text-white">
            Nothing should impede you to grow your business. Let the world hear
            about your product, and grow without border.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Welcome;
