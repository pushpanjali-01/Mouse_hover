import React from "react";
import "../Css/Details.css";
import "../Css/Age_rating.css";
import "../Css/HDbutton.css";
import Duration from "./Duration";
import HDbutton from "./HDbutton";

const Title = ({ item }) => {
    return (
        <div>
            <p className="details">81% Match <span className="age_rating">{item.age_rating}</span></p>
            <Duration item={item} />
            <HDbutton item={item} />
        </div>
    )
}
export default Title;