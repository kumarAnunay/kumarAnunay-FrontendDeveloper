import Navbar from "./Navbar/Navbar";
import Header from "./Banner/Header";
import Section from "./Section/Section";
import Footer from "./Footer/Footer";
import SearchContext from "./DataProvider";
import { useContext } from "react";

const Home = () => {
  const { searching } = useContext(SearchContext);

  return (
    <>
      <Navbar />
      {searching && (
        <>
          <Header />
          <Section />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
