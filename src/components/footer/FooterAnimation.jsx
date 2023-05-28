import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/suresh.ekanayake/" },
  { Social: <FaTwitter />, link: "https://www.linkedin.com/in/suresh-ekanayake-6800bb194/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/sureshekanayake97/" },
  { Social: <FaLinkedinIn />, link: "https://twitter.com/SureshAwantha97s" },
  { Social: <FaPinterestP />, link: "https://www.pinterest.com/sureshawantha97/" },
];

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}

        <div className="col-md-6 my-2 text-center text-md-end">
          <p>
            © {new Date().getFullYear()} Copyright{" "}
            <a
              href=""
              target="_blank"
              rel="noreferrer"
            >
              Suresh Ekanayake.
            </a>{" "}
            All Right Reserved.
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;
