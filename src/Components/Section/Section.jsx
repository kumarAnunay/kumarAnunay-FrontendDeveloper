import { useState } from "react";
import { useContext } from "react";
import SearchContext from "../DataProvider";
import space from "../../assets/space.jpg";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Modal } from "../Modal/Modal";
import { useNavigate } from "react-router-dom";
import "./Section.css";

const Section = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 6;

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

  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;

  const currentPageData = data.slice(startIndex, endIndex);
  const totalPage = Math.ceil(data.length / limit);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
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
      {loading ? (
        <div className="loaderContainer">
          <div className="loader"></div>
        </div>
      ) : (
        <div className=" cardContainer w-full h-auto grid grid-cols-3 gap-[50px] p-[80px] bg-[#F1EFEF]">
          {currentPageData?.map((item, index) => {
            return (
              <div
                key={index}
                className="card border-2 border-solid border-[grey] rounded shadow-[1px_1px_3px_rgba(0,0,0,0.7)]"
              >
                <img
                  src={space}
                  alt="Rocket"
                  className="h-[50%] cursor-[pointer]"
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
      <div className="w-full flex justify-center gap-5  bg-[#F1EFEF] p-[20px]">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="arrowBtn"
          title="prev"
        >
          <KeyboardDoubleArrowLeftIcon />
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPage}
          className="arrowBtn"
          title="next"
        >
          <KeyboardDoubleArrowRightIcon />
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} card={selectedCard} />
    </>
  );
};

export default Section;
