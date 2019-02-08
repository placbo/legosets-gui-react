import React from "react";
//import axios from "axios";
import "./Set.css";

function Set(props) {

/*    function deleteSet(e) {
        e.preventDefault();
        axios.delete("https://mylegosets-api.herokuapp.com/api/sets/" + props.setData._id)
            .then(result => {
                console.log("Set with id " + props.setData._id + " deleted");
                //delete from sets as well
            })
            .catch(err => {
                console.error(err);
            });
    }*/

    return (
        <div className="set">
            <a href="#/">
                <div className="menu">...</div>
            </a>
            {process.env.SHOW_IMAGES ? (
                <img alt="legoimage" src={"https://images.brickset.com/sets/small/" + props.setData.setid + "-1.jpg"}/>
            ) : (
                <img alt=" legoimage" src=" https://via.placeholder.com/100"/>
            )}
            <div className="container">
                <div className="setNumber">{props.setData.setid}</div>
                {/*<a href="#/" onClick={deleteSet}>Delete</a>*/}
                <br/>
                <a href={"https://brickset.com/sets/" + props.setData.setid + "-1"}>Brickset</a><br/>
                <a href={"https://rebrickable.com/sets/" + props.setData.setid + "-1"}>Rebrickable</a>
            </div>
        </div>
    );
}

export default Set;
