import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import LazyLoad from "react-lazy-load";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div className="md:flex items-center justify-center">
      <Helmet>
        <title>Contact | Jhimi</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <div className="w-full md:w-1/2 mx-auto">
        <LazyLoad effect="blur">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232800.3544709276!2d89.56226545220073!3d24.259066981513932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdfb44c7eeadc1%3A0x635d437a356cefa!2sTangail%20Sadar%20Upazila!5e0!3m2!1sen!2sbd!4v1686989048465!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </LazyLoad>
      </div>

      <div className="md:hidden">
        <div className="flex items-center my-4 justify-center">
          <a
            href="https://www.facebook.com/profile.php?id=100070252309405"
            target="_blank"
          >
            {" "}
            <RiFacebookCircleFill className="text-4xl hover:text-indigo-400" />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/jhimi-talukder-801ab227b"
            target="_blank"
          >
            <AiFillLinkedin className="text-4xl hover:text-indigo-400" />
          </a>
          <a href="https://github.com/jhimi01" target="_blank">
            <AiOutlineGithub className="text-4xl hover:text-indigo-400" />
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2 mx-auto md:pl-5">
        <h2 className="text-5xl mb-3">
          Send <span className="text-indigo-500">Email</span>
        </h2>
        <form
          action="https://formspree.io/f/xdovqllq"
          method="POST"
          className="max-w-md mx-auto"
        >
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">UserName</label>
            <input
              style={{ background: "none" }}
              type="text"
              name="name"
              className="
            appearance-none border  w-full py-2 px-3  focus:outline-none text-indigo-500 shadow-lg focus:shadow-indigo-500/50"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Email</label>
            <input
              style={{ background: "none" }}
              type="email"
              name="from_email"
              className="appearance-none border  w-full py-2 px-3  focus:outline-none text-indigo-500 shadow-lg focus:shadow-indigo-500/50"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Message</label>
            <textarea
              style={{ background: "none" }}
              required
              name="message"
              className="appearance-none border  w-full py-2 px-3  focus:outline-none text-indigo-500 shadow-lg focus:shadow-indigo-500/50"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="text-xl flex items-center px-4 py-2 gap-1 font-semibold text-indigo-500 shadow-xl hover:shadow-indigo-500/50"
            >
              Send <FiArrowUpRight />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
