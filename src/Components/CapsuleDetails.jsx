import { useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import image from "../assets/rocket.jpg";
import SearchContext from "./DataProvider";
import { useContext } from "react";

const CapsuleDetails = () => {
  const location = useLocation();
  const cardDetail = location.state?.item;

  const { searching } = useContext(SearchContext);

  return (
    <>
      <Navbar />
      {searching && (
        <div
          className="detials h-screen w-full flex flex-col justify-center gap-[30px] px-[50px]  bg-[center_center] bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${image})` }}
        >
          <h1
            className="font-bold text-xl text-[white] mt-[40px]"
            style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)" }}
          >
            Capsule Serial:
            <span className="ml-5 font-medium">
              {cardDetail?.capsule_serial}
            </span>
          </h1>
          <h1
            className="font-bold text-xl text-[white]"
            style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)" }}
          >
            Capsule ID:
            <span className="ml-5 font-medium">{cardDetail?.capsule_id}</span>
          </h1>
          <h1
            className="font-bold text-xl text-[white]"
            style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)" }}
          >
            Capsule status:
            <span className="ml-5 font-medium">{cardDetail?.status}</span>
          </h1>
          <h1
            className="font-bold text-xl text-[white]"
            style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)" }}
          >
            Type:
            <span className="ml-5 font-medium">
              {cardDetail?.type || "Not registered"}
            </span>
          </h1>
          <h1
            className="font-bold text-xl text-[white]"
            style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)" }}
          >
            Details:
            <span className="ml-5 font-medium">
              {cardDetail?.details || "Not registered"}
            </span>
          </h1>
        </div>
      )}
      <Footer />
    </>
  );
};

export default CapsuleDetails;
