// src/components/StarPowersList.js
import React from "react";
import PropTypes from "prop-types";
import "./StarPowersList.css"; // Можна створити окремий CSS файл для стилів

const StarPowersList = ({ starPowers }) => {
  return (
    <ul className="brawler-powers">
      {starPowers && starPowers.length > 0 ? (
        starPowers.map((starPower) => (
          <li key={starPower.id}>
            <div className="brawler-powers-content">
              <img src={starPower.imageUrl} alt={starPower.name} />
              {starPower.name}
            </div>
            <p>{starPower.description}</p>
          </li>
        ))
      ) : (
        <p>No star powers available</p>
      )}
    </ul>
  );
};

StarPowersList.propTypes = {
  starPowers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default StarPowersList;
