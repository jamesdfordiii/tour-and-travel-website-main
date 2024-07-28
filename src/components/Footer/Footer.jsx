import React from "react";
import FooterLogo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import NatureVid from "../../assets/video/footer.mp4";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Best Places",
    link: "/best-places",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];

const Footer = () => {
  return (
    <>
      <div className="dark:bg-gray-950 py-10 relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 h-full w-full object-cover z-[-1]"
        >
          <source src={NatureVid} type="video/mp4" />
        </video>
        <div className="container">
          <div className="grid md:grid-cols-2 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
            <div className="py-8 px-4">
              <h1 className="flex items-center gap-3 text-2xl font-bold">
                <img src={FooterLogo} alt="" className="max-h-[200px]" />
              </h1>
              <p className="text-sm mt-4">
                Tour Travel Haven is your gateway to the most breathtaking and
                luxurious travel experiences around the globe. Our dedicated
                team of travel experts crafts personalized itineraries, ensuring
                every journey is seamless, memorable, and tailored to your
                unique desires.
              </p>
              <br />
              <div className="flex items-center gap-3 mt-4">
                <FaLocationArrow />
                <p>San Francisco, California</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+1 323-452-4443</p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-primary transition-colors duration-300" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl hover:text-primary transition-colors duration-300" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl hover:text-primary transition-colors duration-300" />
                </a>
              </div>
            </div>
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3">Important Links</h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li
                    key={link.title}
                    className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200"
                  >
                    <Link to={link.link} onClick={() => window.scrollTo(0, 0)}>
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white">
            © 2024 Tour Travel Haven. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
