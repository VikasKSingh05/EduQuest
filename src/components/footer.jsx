import React from "react";

function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white p-10 grid grid-cols-1 sm:grid-cols-3 gap-10 pl-50">
  <nav style={{ fontFamily: "regular" }} className="flex flex-col ">
    <div className="footer-title font-extrabold" >Courses</div>
    <a className="link link-hover" href="https://edu-quest-iota.vercel.app/zoo">Nature Detectives</a>
    <a className="link link-hover" href="https://edu-quest-iota.vercel.app/jungle">Eco Heroes In Action</a>
    <a className="link link-hover" href="https://edu-quest-iota.vercel.app/jungle">Our Planet Our Home</a>
  </nav>

    <div style={{fontFamily:'heading'}} className="text-4xl">EDUQUEST</div>
  <nav style={{ fontFamily: "regular" }} className="flex flex-col">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
  </nav>
</footer>

  );
}
export default Footer;
