import "./header.css";
import image1 from "../../assets/section1.jpg";
import image2 from "../../assets/section2.jpg";
import image3 from "../../assets/section3.jpg";
import { useEffect, useState } from "react";

const bannerImage = [
  {
    image: image1,
    pTag: "Upcoimg Launch",
    hTag: "StarkLink Mission",
  },
  {
    image: image2,
    pTag: "Completed Mission",
    hTag: "Dragon and CREW-6 return to earth",
  },
  {
    image: image3,
    pTag: "",
    hTag: "starship flight test",
  },
];

const Section1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeoutId;

    const changeMovieRandomly = () => {
      const randomIndex = Math.floor(Math.random() * bannerImage.length);
      setCurrentIndex(randomIndex);
      timeoutId = setTimeout(changeMovieRandomly, 5000);
    };

    changeMovieRandomly();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const alertHandler = (text) => {
    window.alert(text.toUpperCase());
  };

  return (
    <div className="w-full h-screen relative">
      <div
        className="h-full bg-[center_center] bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bannerImage[currentIndex].image})` }}
      ></div>
      <div className="sectionContent text-left absolute bottom-[15%]">
        <p className="pTag">{bannerImage[currentIndex].pTag}</p>
        <h1 className="hTag">{bannerImage[currentIndex].hTag}</h1>
        <button
          className="bttn"
          onClick={() => alertHandler(bannerImage[currentIndex].hTag)}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Section1;
