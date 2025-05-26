import React from "react";
import "./DetailedEvent.scss";

const DetailedEvent = ({ regulation, onClose }) => {
  if (!regulation) return null;

  return (
    <div
      className="detailed-regulation-overlay"
      onClick={onClose} // Сыртын басқанда жабылады
    >
      <div
        className="detailed-regulation-content"
        onClick={(e) => e.stopPropagation()} // Ішін басқанда жабылмайды
      >
        {/* "X" батырмасын modal ішінде қалдырамыз */}
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{regulation.title}</h2>
        <div
          className="detailed-regulation-text"
          dangerouslySetInnerHTML={{ __html: regulation.fullContent }}
        />
      </div>
    </div>
  );
};

export default DetailedEvent;
