import React from "react";
import PropTypes from "prop-types";
import "./Set.css";

function Set(props) {
  return (
    <div className="set">
      <span>{props.setid}</span>
    </div>
  );
}

Set.propTypes = {
  setid: PropTypes.string.isRequired
};

export default Set;
