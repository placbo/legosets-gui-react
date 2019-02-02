import React from "react";
import PropTypes from "prop-types";

// import the Set component
import Set from "./Set";

function SetList(props) {
  return (
    <div>{props.sets.map(c => <Set key={c.id} setid={c.setid} />)}</div>
  );
}

SetList.propTypes = {
  sets: PropTypes.array.isRequired
};

export default SetList;
