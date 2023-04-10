import React from "react";
import { useState } from "react";
import "../Css/Home.css";
import Title from "./Details";
import Genre from "./Genre";
import ButtonGroup from "./ButtonGroup";
import "../Css/Volumebutton.css"
import Button from "./Button";

const Tumbnail = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <React.Fragment>
            <div className="thumbnail"
                onMouseOver={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <img src={item.image_url.cover} alt="" />
                {isHovered &&
                    <div className="volumebutton">
                        <Button classes="volumebtn" icon={<i className="fa fa-volume-up" />} />
                    </div>
                }
                {isHovered && (
                    <div className="hovercontent  m-2">
                        <ButtonGroup buttons={["fa fa-play", "fa fa-plus", "fa fa-thumbs-o-up"]} />
                        <div>
                            <Button classes="angledown" icon={<i className="fa fa-angle-down" />} />
                        </div>
                        <Title item={item} />
                        <Genre item={item} />
                    </div>
                )}
            </div>
        </React.Fragment>
    )
}
export default Tumbnail;

