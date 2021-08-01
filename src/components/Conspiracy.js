import React from "react";
import PropTypes from "prop-types";

import "./Conspiracy.css";

const Conspiracy = ({ id, title, owner, description, imageUrl, handleDelete }) => {
  const onDelete = () => handleDelete(id)
  return (
    <div className="conspiracy-container">
      <div className="conspiracy-left">
        <button
        className="conspiracy-is-trash"
        onClick={onDelete}
        >🚮</button>
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
  handleDelete: PropTypes.func.isRequired,
};

Conspiracy.defaultProps = {
  title: "",
  owner: "",
  description: "",
  imageUrl: process.env.PUBLIC_URL + '/assets/placeholder.svg',
  handleDelete: () => {}
};

export default Conspiracy;