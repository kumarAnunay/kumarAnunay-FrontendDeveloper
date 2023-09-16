import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer w-full bg-[#000] p-[20px] flex justify-between items-center">
      <h2 className="text-[white]">&copy; Brainstorm Assignment</h2>
      <div className="footerSectionIcons">
        <FacebookIcon className="footerIcons fbIcon" />
        <InstagramIcon className="footerIcons instaIcon" />
        <TwitterIcon className="footerIcons twitterIcon" />
        <YouTubeIcon className="footerIcons ytIcon" />
      </div>
    </footer>
  );
};

export default Footer;
