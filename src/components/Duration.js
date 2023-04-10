import React from "react";
import "../Css/Duration.css";
import moment from "moment";

const Duration = ({ item }) => {
    let dateForm = (arg) => {
        return moment.unix(arg).utc().format("H[h] m[m]");
    };
    return (
        <p className="duration">{dateForm(item.duration)}</p>
    )
}
export default Duration;