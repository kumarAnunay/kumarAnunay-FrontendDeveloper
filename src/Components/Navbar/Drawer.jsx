import React from "react";
import { Close } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import "./Navbar.css";

const Drawer = ({ isOpen, closeDrawer }) => {
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
                  onClick={() => window.alert("Mission")}
                >
                  Mission
                </span>
              </li>
              <li className="w-full flex justify-end border-b-2 border-b-[#252525] border-solid pb-[5px]">
                <span
                  className=" cursor-[pointer]"
                  onClick={() => window.alert("Launches")}
                >
                  Launches
                </span>
              </li>
              <li className="w-full flex justify-end border-b-2 border-b-[#252525] border-solid pb-[5px]">
                <span
                  className=" cursor-[pointer]"
                  onClick={() => window.alert("Carrers")}
                >
                  Carrers
                </span>
              </li>
              <li className="w-full flex justify-end border-b-2 border-b-[#252525] border-solid pb-[5px]">
                <span
                  className=" cursor-[pointer]"
                  onClick={() => window.alert("Updates")}
                >
                  Updates
                </span>
              </li>
              <li className="w-full flex justify-end border-b-2 border-b-[#252525] border-solid pb-[5px]">
                <span
                  className=" cursor-[pointer]"
                  onClick={() => window.alert("Shop")}
                >
                  Shop
                </span>
              </li>
              <li className="w-full flex justify-end border-b-2 border-b-[#252525] border-solid pb-[5px]">
                <span
                  className=" cursor-[pointer]"
                  onClick={() => window.alert("About us")}
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
