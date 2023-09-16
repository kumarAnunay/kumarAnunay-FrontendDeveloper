import { useContext, useEffect, useRef, useState } from "react";
import SearchContext from "../DataProvider";
import logo from "../../assets/logo.png";
import space from "../../assets/space.jpg";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "./Drawer";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";
import { Modal } from "../Modal/Modal";

const Navbar = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [nav, setNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [searchInput, setSearchInput] = useState("");
  const [searchInputVisible, setSearchInputVisible] = useState(false);
  const seachIconRef = useRef(null);
  const searchContainerRef = useRef(null);
  const [searchData, setSearchData] = useState([]);

  const [selectedCard, setSelectedCard] = useState(null);

  const { setSearching, data } = useContext(SearchContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedFilter, setSelectedFilter] = useState("status");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > scrollY) {
        setNav(true);
        setIsOpen(false);
      } else {
        setNav(false);
      }
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  const toggleDrawer = () => {
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  const searchInputVisibleHandler = () => {
    setSearchInputVisible(!searchInputVisible);
    seachIconRef.current.style.display = "none";
  };

  const filterData = () => {
    if (selectedFilter) {
      const searchResult = data.filter((item) => {
        return item[selectedFilter]
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setSearchData(searchResult);
    }
  };

  const inputValueHandler = (event) => {
    setSearchInput(event.target.value);
    filterData();
    if (event.target.value.length > 1) {
      searchContainerRef.current.style.display = "block";
      setSearching(false);
      if (searchInput.length() >= 2) {
        filterData();
      }
    } else {
      searchContainerRef.current.style.display = "none";
      setSearchData([]);
      setSearching(true);
    }
  };

  const openModal = (item) => {
    setSelectedCard(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <nav
        className="fixed w-full flex justify-between items-center px-[15px] z-[1]"
        style={{
          visibility: nav ? "hidden" : "visible",
        }}
      >
        <div className="flex">
          <img
            src={logo}
            alt="spacex"
            className="navLogo w-[120px] h-[90px]  cursor-[pointer]"
            onClick={() => navigate("/")}
          />
          <ul
            type="none"
            className="list navList flex items-center gap-8 text-[white] font-[700] cursor-[pointer]"
          >
            <li
              onClick={() => {
                navigate("/");
                window.location.reload();
              }}
            >
              Home
            </li>
            <li onClick={() => window.location.reload()}>Capsules</li>
          </ul>
        </div>
        <div className=" rightList flex gap-5 items-center">
          {searchInputVisible && (
            <div className=" searchBox pt-[30px]">
              <div className="searchContainer">
                <input
                  type="text"
                  id="search"
                  value={searchInput}
                  className="searchInput"
                  onChange={inputValueHandler}
                  placeholder="Search"
                />
                <CloseIcon
                  className="searchIcon closeSearchIcon"
                  onClick={() => {
                    setSearchInputVisible(false);
                    seachIconRef.current.style.display = "block";
                    searchContainerRef.current.style.display = "none";
                    setSearchInput("");
                    setSearching(true);
                  }}
                />
              </div>
              <div>
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="searchDropdown"
                >
                  <option value="status">Status</option>
                  <option value="type">Type</option>
                  <option value="capsule_id">Capsule Id</option>
                </select>
              </div>
            </div>
          )}
          <SearchIcon
            className="search"
            onClick={searchInputVisibleHandler}
            ref={seachIconRef}
          />
          <div>
            <button onClick={toggleDrawer} className="text-[white]">
              <MenuIcon className="menuIcon" />
            </button>
            <Drawer isOpen={isOpen} closeDrawer={closeDrawer} />
          </div>
        </div>
      </nav>

      <div className="hidden" ref={searchContainerRef}>
        <div className="cardBox searchSuggestionsContainer">
          {searchData && searchData.length > 0 ? (
            searchData.map((item) => (
              <div
                key={item?.capsule_serial}
                className="card border-2 border-solid border-[grey] rounded shadow-[1px_1px_3px_rgba(0,0,0,0.7)]"
              >
                <img src={space} alt="Rocket" className="h-[50%] w-[100%]" />
                <div className="p-[20px] flex flex-col gap-1.5 font-semibold">
                  <h1>
                    Status:
                    <span className="ml-1.5 font-medium">{item?.status}</span>
                  </h1>
                  <h1>
                    Type:
                    <span className="ml-1.5 font-medium">{item?.type}</span>
                  </h1>
                  <h1>
                    Capsule Id:
                    <span className="ml-1.5 font-medium">
                      {item?.capsule_id || "unknown"}
                    </span>
                  </h1>
                </div>
                <button className="knowMore" onClick={() => openModal(item)}>
                  Know more
                </button>
              </div>
            ))
          ) : (
            <p className="block m-auto w-full text-[black] text-xl font-[700] text-center">
              No Result Found !!
            </p>
          )}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} card={selectedCard} />
    </>
  );
};

export default Navbar;
