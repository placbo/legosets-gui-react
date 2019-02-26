import React from "react";
import axios from "axios";
import "./Set.css";

import {FaRegTrashAlt} from 'react-icons/fa';

function Set(props) {


    function errorHandler(error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            //TODO: forward to login
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the
            // browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);

    }

    function deleteSet(e) {
        e.preventDefault();
        let shouldDelete = window.confirm("Really delete ?");
        if (shouldDelete) {
            axios.delete("https://mylegosets-api.herokuapp.com/api/sets/" + props.setData._id)
                .then(result => {
                    console.log("Set with id " + props.setData._id + " deleted");
                    //TODO: delete from sets as well
                })
                .catch(error => {
                    errorHandler(error);
                });
        }
    }

    return (
        <div className="set">
            <a href="#/" onClick={deleteSet}>
                <div className="menu">
                    <div className="actionIcon"><FaRegTrashAlt/></div>
                </div>
            </a>
            {process.env.NODE_ENV === "production" ? (
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
