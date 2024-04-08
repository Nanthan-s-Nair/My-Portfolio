import React from "react";
import Link from "next/link";
import Image from "next/image";
import giticon from "/Users/nanthansnair/porto/public/images/skills/github-icon.svg";
import linkin from "/Users/nanthansnair/porto/public/images/skills/linkedin-icon.svg";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>Created By Nanthan😄</span>
        <p className="text-slate-600">contact @ <a href="mailto:" target="_blank" rel="noopener noreferrer">nanthan.snair4@gmail.com</a></p>
        <Link href=" https://github.com/Nanthan-s-Nair" target="_blank" rel="noopener noreferrer">
            <Image src={giticon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/nanthan-s-nair-0681b3278/" target="_blank" rel="noopener noreferrer">
            <Image src={linkin} alt="Linkedin Icon" />
          </Link>
      </div>
    </footer>
  );
};

export default Footer;