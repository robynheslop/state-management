import React from "react";
import PropTypes from "prop-types";
import Conspiracy from "./Conspiracy";
import "./ConspiracyList.css";

const ConspiracyList = ({ conspiracies }) => {
  return (
    <div className="conspiracy-list-container">
      {conspiracies.length > 0 ? (
        conspiracies.map((conspiracy) => (
          <Conspiracy {...{ ...conspiracy, key: conspiracy.id }} />
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
};

ConspiracyList.defaultProps = {
  conspiracies: [],
};

export default ConspiracyList;
