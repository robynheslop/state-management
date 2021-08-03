import React, { useReducer } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Header from "./components/Header";
import ConspiracyForm from "./components/ConspiracyForm";
import ConspiracyList from "./components/ConspiracyList";
import reducerFunction from "./reducer-function";
import { addConspiracyAction, deleteConspiracyAction } from "./actions";
function App({ initialState }) {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const { conspiracies } = state;
  const handleDelete = (id) => dispatch(deleteConspiracyAction(id));
  const handleSubmitForm = (conspiracy) =>
    dispatch(addConspiracyAction(conspiracy));

  return (
    <div className="conspiracy-app">
      <Header numberOfConspiracies={conspiracies.length} />
      <ConspiracyList conspiracies={conspiracies} handleDelete={handleDelete} />
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
