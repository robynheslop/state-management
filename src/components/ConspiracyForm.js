import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ConspiracyForm.css";

const ConspiracyForm = ({ handleSubmitForm }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [owner, setOwner] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const onClick = (event) => {
    event.preventDefault();
    handleSubmitForm({title, description, owner, imageUrl});
  };
  return (
    <div>
      <form className="conspiracy-form">
        <fieldset className="conspiracy-field-set">
          <legend>What is the government hiding?</legend>
          <div className="conspiracy-form-field">
            <label
              className="conspiracy-form-label"
              htmlFor="conspiracy-form-title"
            >
              Title
            </label>
            <input
              id="conspiracy-form-title"
              name="conspiracy-form-title"
              className="conspiracy-form-title"
              value={title}
              onChange={({ target: { value } }) => setTitle(value)}
            />
          </div>
          <div className="conspiracy-form-field">
            <label
              className="conspiracy-form-label"
              htmlFor="conspiracy-form-owner"
            >
              Owner
            </label>
            <input
              id="conspiracy-form-owner"
              name="conspiracy-form-owner"
              className="conspiracy-form-owner"
              value={owner}
              onChange={({ target: { value } }) => setOwner(value)}
            />
          </div>
          <div className="conspiracy-form-field">
            <label
              className="conspiracy-form-label"
              htmlFor="conspiracy-form-description"
            >
              Description
            </label>
            <textarea
              rows="4"
              id="conspiracy-form-description"
              name="conspiracy-form-description"
              className="conspiracy-form-description"
              value={description}
              onChange={({ target: { value } }) => setDescription(value)}
            />
          </div>
          <div className="conspiracy-form-field">
            <label
              className="conspiracy-form-label"
              htmlFor="conspiracy-form-image-url"
            >
              Image Url
            </label>
            <input
              id="conspiracy-form-image-url"
              name="conspiracy-form-image-url"
              className="conspiracy-form-image-url"
              value={imageUrl}
              onChange={({ target: { value } }) => setImageUrl(value)}
            />
          </div>
          <div className="conspiracy-form-field">
            <button className="conspiracy-form-button" onClick={onClick}>
                🦠👩‍🔬🧪🧫🔬🧬 CoNTRIBUTE To Science 🦠👩‍🔬🧪🧫🔬🧬
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

ConspiracyForm.propTypes = {
  handleSubmitForm: PropTypes.func,
};

ConspiracyForm.defaultProps = {
  handleSubmitForm: () => {},
};

export default ConspiracyForm;
