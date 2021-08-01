import React from "react";
import PropTypes from "prop-types";
import Conspiracy from "./Conspiracy";
import "./ConspiracyList.css";

const ConspiracyList = ({ conspiracies, handleDelete }) => {
  return (
    <div className="conspiracy-list-container">
      {conspiracies.length > 0 ? (
        conspiracies.map((conspiracy) => (
          <Conspiracy {...{ ...conspiracy, key: conspiracy.id, handleDelete}} />
        ))
      ) : (
        <div className="conspiracy-list-empty">
          No CoNSPIRACIES found... Its a RUSSIAN CoNSPIRACY 🤔
        </div>
      )}
    </div>
  );
};

ConspiracyList.propTypes = {
  conspiracies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

ConspiracyList.defaultProps = {
  conspiracies: [],
  handleDelete: () => {},
};

export default ConspiracyList;
