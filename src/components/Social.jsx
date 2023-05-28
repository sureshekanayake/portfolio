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

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
