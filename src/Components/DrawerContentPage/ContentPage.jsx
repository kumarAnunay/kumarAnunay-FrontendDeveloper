import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ContentPage = ({ image }) => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex justify-center items-center bg-[palevioletred]">
        <img src={image} alt="image" className="w-full h-full" />
      </div>
      <Footer />
    </>
  );
};

export default ContentPage;
