import PropTypes from "prop-types";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo copy.png";
const Footer = () => {
  const ListItem = ({ text }) => (
    <li>
      <Link className="transition hover:cursor-pointer hover:text-custom-color">
        {text}
      </Link>
    </li>
  );
  return (
    <footer className="bg-custom-color-2 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          {/* logo */}
          <div className="flex items-center gap-2">
            <img className="w-20" src={logo} alt="" />
            <h1 className="text-3xl font-bold">
              STAY <span className="text-custom-color">FINDER</span>
            </h1>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            {/* latest news */}
            <div className="col-span-2">
              <div>
                <h2 className="text-2xl font-bold">Get the latest news!</h2>
                <p className="mt-4">
                  Discover your perfect stay with Stay Finder – the ultimate
                  hotel booking app designed to make your travel experience
                  seamless and memorable.
                </p>
              </div>
            </div>
            {/* subscribe email */}
            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  Email
                </label>

                <div className="border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="john@rhcp.com"
                    className="w-full py-2 px-4 border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                  />

                  <button className="mt-1 w-full bg-custom-color px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium">Services</p>

              <ul className="mt-6 space-y-4 text-sm">
                <ListItem text="1on1 Coaching" />
                <ListItem text="Company Review" />
                <ListItem text="Accounts Review" />
                <ListItem text="HR Consulting" />
                <ListItem text="SEO Optimization" />
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                <ListItem text="About" />
                <ListItem text="Meet the Team" />
                <ListItem text="Accounts Review" />
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium">Helpful Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                <ListItem text="Contact" />
                <ListItem text="FAQs" />
                <ListItem text="Live Chat" />
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium">Legal</p>

              <ul className="mt-6 space-y-4 text-sm">
                <ListItem text="Accessibility" />
                <ListItem text="Returns Policy" />
                <ListItem text="Refund Policy" />
                <ListItem text="Hiring Statistics" />
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium">Downloads</p>

              <ul className="mt-6 space-y-4 text-sm">
                <ListItem text="Marketing Calendar" />
                <ListItem text="SEO Infographics" />
              </ul>
            </div>

            <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
              <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className=" transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>
                  <FaFacebook className="text-2xl" />
                </a>
              </li>

              <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className=" transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>

                  <FaInstagram className="text-2xl" />
                </a>
              </li>

              <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className=" transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>

                  <FaTwitter className="text-2xl" />
                </a>
              </li>

              <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className=" transition hover:opacity-75"
                >
                  <span className="sr-only">Whatsapp</span>

                  <FaWhatsapp className="text-2xl" />
                </a>
              </li>

              <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className=" transition hover:opacity-75"
                >
                  <span className="sr-only">YouTube</span>

                  <FaYoutube className="text-2xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs ">
              &copy; 2024.
              <span className="text-custom-color">Stay Finder</span> . All
              rights reserved.
            </p>

            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              <li>
                <a className=" transition hover:opacity-75">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a className=" transition hover:opacity-75"> Privacy Policy </a>
              </li>

              <li>
                <a className=" transition hover:opacity-75"> Cookies </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  text: PropTypes.string,
};
export default Footer;
