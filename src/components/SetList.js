import React from "react";
import PropTypes from "prop-types";
import "./SetList.css";

// import the Set component
import Set from "./Set";

function SetList(props) {
  return (
    <div className="setlist">{props.sets.map(c => <Set key={c._id} setid={c.setid} />)}</div>
  );
}

SetList.propTypes = {
  sets: PropTypes.array.isRequired
};

export default SetList;
