import React, { useState } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Header from "./components/Header";
import ConspiracyForm from "./components/ConspiracyForm";
import ConspiracyList from "./components/ConspiracyList";
import { uuid } from "uuidv4";

function App({ initialState }) {
  const [state, setState] = useState(initialState);
  const { conspiracies } = state;
  const handleSubmitForm = (newConspiracy) => {
    setState({
      ...state,
      conspiracies: [...conspiracies, { ...newConspiracy, id: uuid() }],
    });
  };
  return (
    <div className="conspiracy-app">
      <Header numberOfConspiracies={conspiracies.length} />
      <ConspiracyList conspiracies={conspiracies} />
      <ConspiracyForm handleSubmitForm={handleSubmitForm} />
    </div>
  );
}

App.propTypes = {
  initialState: PropTypes.shape({
    conspiracies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

App.defaultProps = {
  initialState: {
    conspiracies: [],
  },
};

export default App;
