import React from "react";
import axios from "axios";
import "./Set.css";

function Set(props) {

    function deleteSet(e) {
        e.preventDefault();
        axios.delete("https://mylegosets-api.herokuapp.com/api/sets/" + props.setData._id)
            .then(result => {
                console.log("Set with id " + props.setData._id + " deleted");
            })
            .catch(err => {
                console.error(err);
            });
    }

    return (
        <div className="set">
            {"setDataFromRebrickable" in props.setData ? (
                <a target="_blank" rel="noopener noreferrer" href={props.setData.setDataFromRebrickable.set_url}>
                    <img alt="legoimage" src={props.setData.setDataFromRebrickable.set_img_url}/>
                </a>
            ) : (
                <img alt="legoimage" src="https://via.placeholder.com/100"/>
            )}
            <div>{props.setData.setid}</div>
            <a href="#/" onClick={deleteSet}>Delete</a>
        </div>
    );
}

export default Set;
