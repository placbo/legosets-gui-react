import React from "react";
import PropTypes from "prop-types";
import "./Set.css";

function Set(props) {
    return (
        <div className="set">
            <img alt="legoimage" src="https://via.placeholder.com/100"/>
            <div>{props.setid}</div>
        </div>
    );
}

Set.propTypes = {
    setid: PropTypes.string.isRequired
};

export default Set;
