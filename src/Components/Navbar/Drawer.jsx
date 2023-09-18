import React from "react";
import { Close } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Drawer = ({ isOpen, closeDrawer }) => {
  const navigate = useNavigate();
  return (
    <>
      {isOpen && (
        <div className={`drawer ${isOpen ? "open" : ""}`}>
          <Tooltip title="Close">
            <button className="closeButton" onClick={closeDrawer}>
              <Close />
            </button>
          </Tooltip>
          <div className="drawer-content">
            <ul
              type="none"
              className="list flex flex-col py-[50px] px-[10px] [text-white] gap-5 text-[white] font-[500]"
            >
              <li className="w-full flex justify-end border-b-2 border-b-[#252525] border-solid pb-[5px]">
                <span
                  className=" cursor-[pointer]"
                  onClick={() => navigate("/mission")}
                >
                  Mission
                </span>
              </li>
              <li className="w-full flex justify-end border-b-2 border-b-[#252525] border-solid pb-[5px]">
                <span
                  className=" cursor-[pointer]"
                  onClick={() => navigate("/launches")}
                >
                  Launches
                </span>
              </li>
              <li className="w-full flex justify-end border-b-2 border-b-[#252525] border-solid pb-[5px]">
                <span
                  className=" cursor-[pointer]"
                  onClick={() => navigate("/carrers")}
                >
                  Careers
                </span>
              </li>
              <li className="w-full flex justify-end border-b-2 border-b-[#252525] border-solid pb-[5px]">
                <span
                  className=" cursor-[pointer]"
                  onClick={() => navigate("/updates")}
                >
                  Updates
                </span>
              </li>
              <li className="w-full flex justify-end border-b-2 border-b-[#252525] border-solid pb-[5px]">
                <span
                  className=" cursor-[pointer]"
                  onClick={() => navigate("/shop")}
                >
                  Shop
                </span>
              </li>
              <li className="w-full flex justify-end border-b-2 border-b-[#252525] border-solid pb-[5px]">
                <span
                  className=" cursor-[pointer]"
                  onClick={() => navigate("/about-us")}
                >
                  About us
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Drawer;
