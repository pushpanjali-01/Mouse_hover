import React, { useState } from "react";
import "../Css/ButtonGroup.css";
import Button from "./Button";

const ButtonGroup = ({ buttons }) => {
    
    return (
        
        <div className="buttongrp">
            {
                
                buttons.map((cta) => (
                    
                    <Button icon={<i className={cta} />} />
                    
                ))
                
            }
           
        </div>
    )
}

export default ButtonGroup;