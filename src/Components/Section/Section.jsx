import axios from "axios";
import { useEffect, useState } from "react";
import gridImage from "../../assets/gridImage.jpg";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Modal } from "../Modal/Modal";
import { Tooltip } from "@mui/material";
import "./Section.css";

const Section = () => {
  const [data, setData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 6;

  const openModal = (item) => {
    setSelectedCard(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setIsModalOpen(false);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.spacexdata.com/v3/capsules/"
      );
      setData(response?.data);
    } catch (error) {
      console.log("API ERROR:-", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  return (
    <>
      <div className=" cardContainer w-full h-auto grid grid-cols-3 gap-[80px] p-[80px] bg-[#F1EFEF]">
        {currentPageData?.map((item, index) => {
          return (
            <div
              key={index}
              className="card border-2 border-solid border-[grey] rounded shadow-[1px_1px_3px_rgba(0,0,0,0.7)]"
            >
              <img src={gridImage} alt="Rocket" className="h-[50%]" />
              <div className="p-[20px] flex flex-col gap-1.5 font-semibold">
                <h1>
                  Capsule Serial:
                  <span className="ml-1.5 font-medium">
                    {item?.capsule_serial}
                  </span>
                </h1>
                <h1>
                  Capsule ID:
                  <span className="ml-1.5 font-medium">{item?.capsule_id}</span>
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
      <div className="w-full flex justify-center gap-5  bg-[#F1EFEF] p-[20px]">
        <Tooltip title="prev">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="arrowBtn"
          >
            <KeyboardDoubleArrowLeftIcon />
          </button>
        </Tooltip>
        <Tooltip title="next">
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPage}
            className="arrowBtn"
          >
            <KeyboardDoubleArrowRightIcon />
          </button>
        </Tooltip>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h1 className="font-bold">
          Capsule Serial:
          <span className="ml-1.5 font-medium">
            {selectedCard?.capsule_serial}
          </span>
        </h1>
        <h1 className="font-bold">
          Capsule ID:
          <span className="ml-1.5 font-medium">{selectedCard?.capsule_id}</span>
        </h1>
        <h1 className="font-bold">
          Capsule status:
          <span className="ml-1.5 font-medium">{selectedCard?.status}</span>
        </h1>
        <h1 className="font-bold">
          Type:
          <span className="ml-1.5 font-medium">
            {selectedCard?.type || "Not registered"}
          </span>
        </h1>
        <h1 className="font-bold">
          Details:
          <span className="ml-1.5 font-medium">
            {selectedCard?.details || "Not registered"}
          </span>
        </h1>
      </Modal>
    </>
  );
};

export default Section;
