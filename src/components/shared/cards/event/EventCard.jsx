import { FiLink } from "react-icons/fi";
import { IoMdArrowUp } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import "./EventCard.scss";

const EventCard = ({ regulation }) => {
  return (
    <div className="eventcard_parent">
      <h1>{regulation.title}</h1>
      <p>{regulation.shortDescription}</p>
      {/* т.с.с */}
    </div>
  );
};


export default EventCard;
