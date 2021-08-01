import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ numberOfConspiracies }) => {
  return (
    <div className="header">
      <h1>CoVID CoNSPIRACIES</h1>
      {numberOfConspiracies === 0 ? (
        <h2>
          There are no CoNSPIRACIES here. The government has CoNSPIRED against
          the submission of CoNSPIRACIES. Get to work fixing this!!
        </h2>
      ) : (
        <h2>
          {numberOfConspiracies}{" "}
          {numberOfConspiracies === 1 ? "CoNSPIRACY" : "CoNSPIRACIES"} and
          counting...
        </h2>
      )}
    </div>
  );
};

Header.propTypes = {
  numberOfConspiracies: PropTypes.number.isRequired,
};

Header.defaultProps = {
  numberOfConspiracies: 0,
};

export default Header;
