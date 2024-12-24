import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="container">
      <div className="grid md:grid-cols-3 pb-20 pt-5">
        <div className="py-8 px-4">
          <a
            href="#"
            className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
          >
            Eshop
          </a>
          <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
            Baderdine is a full stack web developer with a passion for creating innovative and scalable web solutions.
            </p>
          <p className="text-gray-500 mt-4">Made with 💖 by Baderdinedev</p>
          <a
            href="https://www.linkedin.com/in/baderdine-ben-ibrahim-057607240/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full"
          >
            Linkedin
          </a>
        </div>
        <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
          <div className="py-8 px-4">
            <h1 className="text-xl font-bold sm:text-left mb-3">Important Links</h1>
            <ul className="space-y-3">
              <li>
                <a
                  href="/#"
                  className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/#blog"
                  className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="py-8 px-4">
            <h1 className="text-xl font-bold sm:text-left mb-3">Quick Links</h1>
            <ul className="space-y-3">
              <li>
                <a
                  href="/#"
                  className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/#blog"
                  className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="py-8 px-4 col-span-2 sm:col-auto">
            <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
            <div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt />
                <p>Tunis, sousse</p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <FaPhone />
                <p>+216 55239397</p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaFacebook className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-primary duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
