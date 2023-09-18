import { useState } from "react";
import { useContext } from "react";
import SearchContext from "./DataProvider";
import space from "../assets/space.jpg";
import { Modal } from "./Modal/Modal";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import image from "../assets/spaceBg.png";
import "./Section/Section.css";

const Capsules = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const { data, loading } = useContext(SearchContext);

  const openModal = (item) => {
    setSelectedCard(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setIsModalOpen(false);
  };

  const openDetails = (item) => {
    navigate("/capsule-detail", {
      state: {
        item,
      },
    });
  };

  return (
    <>
      <Navbar />
      <>
        {loading ? (
          <div className="loaderContainer">
            <div className="loader"></div>
          </div>
        ) : (
          <div
            className=" cardContainer w-full h-auto grid grid-cols-3 gap-[50px] p-[80px]"
            style={{
              backgroundImage: `url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              overflowY: "auto",
              height: "100vh",
            }}
          >
            {data?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="card border-2 border-solid border-[grey] rounded shadow-[1px_1px_3px_rgba(0,0,0,0.7)]"
                >
                  <img
                    src={space}
                    alt="Rocket"
                    className="h-[50%] w-[100%] cursor-[pointer]"
                    onClick={() => openDetails(item)}
                  />
                  <div className="p-[20px] flex flex-col gap-1.5 font-semibold">
                    <h1>
                      Capsule Serial:
                      <span className="ml-1.5 font-medium">
                        {item?.capsule_serial}
                      </span>
                    </h1>
                    <h1>
                      Capsule ID:
                      <span className="ml-1.5 font-medium">
                        {item?.capsule_id}
                      </span>
                    </h1>
                    <h1>
                      Capsule status:
                      <span className="ml-1.5 font-medium">{item?.status}</span>
                    </h1>
                  </div>
                  <button className="knowMore" onClick={() => openModal(item)}>
                    Know more
                  </button>
                </div>
              );
            })}
          </div>
        )}
        <Modal isOpen={isModalOpen} onClose={closeModal} card={selectedCard} />
      </>
      <Footer />
    </>
  );
};

export default Capsules;
