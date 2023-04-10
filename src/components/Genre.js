import React from "react";
import "../Css/Genre.css";

const Genre = ({ item }) => {
    console.log(item.genres);
    return (
        <div>
            {
                item.genres.map((G) => {
                    return (
                        <li className="genre">{G.value}</li>
                    )
                })
            }
        </div>
    )
}
export default Genre;