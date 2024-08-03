import React from "react";
import PropTypes from "prop-types";
import "./GadgetsList.css"; // Можна створити окремий CSS файл для стилів

const GadgetsList = ({ gadgets }) => {
  return (
    <ul className="brawler-gadgets">
      {gadgets && gadgets.length > 0 ? (
        gadgets.map((gadgets) => (
          <li key={gadgets.id}>
            <div className="brawler-gadgets-content">
              <img src={gadgets.imageUrl} alt="Not found" />
              {gadgets.name}
            </div>
            {gadgets.description}
          </li>
        ))
      ) : (
        <p>No gadgets available</p>
      )}
    </ul>
  );
};

GadgetsList.propTypes = {
  gadgets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default GadgetsList;
