import React from "react";
import PropTypes from "prop-types";

import "./Conspiracy.css";

const Conspiracy = ({ title, owner, description, imageUrl }) => {
  return (
    <div className="conspiracy-container">
      <div className="conspiracy-left">
        <h3 className="conspiracy-title">{title}</h3>
        <label>
          CoNSPIRACY Theorist: <h4 className="conspiracy-owner">{owner}</h4>
        </label>
        <p className="conspiracy-description">{description}</p>
      </div>
      <div className="conspiracy-right">
        <img className="conspiracy-image" alt='conspiracy' src={imageUrl}></img>
      </div>
    </div>
  );
};

Conspiracy.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

Conspiracy.defaultProps = {
  title: "",
  owner: "",
  description: "",
  imageUrl: process.env.PUBLIC_URL + '/assets/placeholder.svg',
};

export default Conspiracy;