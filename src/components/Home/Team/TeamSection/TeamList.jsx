/* eslint-disable react/prop-types */
// TeamItem component
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import business from "../../../../assets/images/business-head.jpg";
import ceo from "../../../../assets/images/ceo.jpg";
import operation from "../../../../assets/images/operation-manager.jpg";
import securityHead from "../../../../assets/images/security head.jpg";
import "./style/style.css";
const TeamItem = ({ imageUrl, name, role, desc }) => {
  return (
    <div>
      <div
        className="team__item bg-cover bg-center relative hover:cursor-pointer"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
        <div className="team__text p-6 absolute bottom-0 left-0 right-0 bg-custom-color-2 bg-opacity-80">
          <div className="team__title mb-2">
            <h4 className="text-lg font-bold">{name}</h4>
            <span className="text-sm">{role}</span>
          </div>
          <p className="text-sm mb-4">{desc}</p>
          <div className="team__social">
            <Link className="mr-2">
              <FaFacebook className="fa fa-facebook" />
            </Link>
            <Link className="mr-2">
              <FaTwitter className="fa fa-twitter" />
            </Link>
            <Link className="mr-2">
              <FaInstagram className="fa fa-instagram" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// TeamList component
const TeamList = () => {
  AOS.init();
  return (
    <div className="container mx-auto px-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 -mx-4">
        {/* Single Starts */}
        <div data-aos="fade-left" data-aos-duration="1000">
          <TeamItem
            imageUrl={ceo}
            name="Ahmed Al-Farsi"
            role="Chief Executive"
            desc="As the Chief Executive, Ahmed Al-Farsi is responsible for overseeing the overall operations and strategic direction of the organization. He sets goals, develops plans, and ensures that the company's resources are effectively utilized to achieve its objectives. Additionally, he represents the company to stakeholders, manages relationships with partners and investors, and ultimately bears responsibility for the company's performance and success."
          />
        </div>
        {/* Single Ends */}
        <div data-aos="fade-left" data-aos-duration="1500">
          <TeamItem
            imageUrl={operation}
            name="Katarzyna Nowak"
            role="Operation Manager"
            desc="Katarzyna Nowak serves as the Operation Manager, where her primary focus is on managing the day-to-day operations of the organization. She oversees various operational processes, ensures efficiency in workflow, and implements strategies to improve productivity and quality. Additionally, she may be involved in resource allocation, staff management, and problem-solving to ensure smooth operations across different departments."
          />
        </div>
        <div data-aos="fade-left" data-aos-duration="2000">
          <TeamItem
            imageUrl={business}
            name="David Raum"
            role="Head of Business and Logistic"
            desc="David Raum holds the position of Head of Business and Logistics, where he leads the business development initiatives and oversees the logistical aspects of the organization. He is responsible for identifying new business opportunities, developing partnerships, and expanding the company's market presence. Furthermore, he manages the logistics chain, including inventory management, transportation, and distribution, to ensure timely delivery of products or services to customers."
          />
        </div>
        <div data-aos="fade-left" data-aos-duration="2500">
          <TeamItem
            imageUrl={securityHead}
            name="Washington Clerk"
            role="Security Head"
            desc=" Washington Clerk serves as the Security Head, responsible for ensuring the safety and security of the organization's assets, personnel, and premises. He designs and implements security protocols, conducts risk assessments, and develops strategies to mitigate potential threats or breaches. Additionally, he may oversee security personnel, coordinate with law enforcement agencies, and stay updated on emerging security technologies and trends to maintain a robust security posture for the organization."
          />
        </div>
      </div>
    </div>
  );
};

export default TeamList;
