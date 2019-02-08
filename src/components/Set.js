import React from "react";
import axios from "axios";
import "./Set.css";

function Set(props) {

    function deleteSet(e) {
        e.preventDefault();
        axios.delete("https://mylegosets-api.herokuapp.com/api/sets/" + props.setData._id)
            .then(result => {
                console.log("Set with id " + props.setData._id + " deleted");
                //delete from sets as well
            })
            .catch(err => {
                console.error(err);
            });
    }

    return (
        <div className="set">
            <img alt="legoimage" src={"https://images.brickset.com/sets/small/" + props.setData.setid + "-1.jpg"}/>
            <div>{props.setData.setid}</div>
            <a href="#/" onClick={deleteSet}>Delete</a><br/>
            <a href={"https://brickset.com/sets/" + props.setData.setid + "-1"}>Brickset</a><br/>
            <a href={"https://rebrickable.com/sets/" + props.setData.setid + "-1"}>Rebrickable</a>
        </div>
    );
}

export default Set;
