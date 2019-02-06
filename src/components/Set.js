import React from "react";
import "./Set.css";

function Set(props) {
    // const hasRebrickableData = "setDataFromRebrickable" in props.setData;
    return (
        <div className="set">
            {"setDataFromRebrickable" in props.setData ? (
                <a target="_blank" href={props.setData.setDataFromRebrickable.set_url}>
                    <img alt="legoimage" src={props.setData.setDataFromRebrickable.set_img_url}/>
                </a>
            ) : (
                <img alt="legoimage" src="https://via.placeholder.com/100"/>
            )}
            <div>{props.setData.setid}</div>
        </div>
    );
}

export default Set;
