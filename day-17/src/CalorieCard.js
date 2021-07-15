import React from "react";
import './CalorieCard.css';

function CalorieCard({title,source,text}){
    return(
        <div className="calorie-card">
            <h2>{title}</h2>
            <img src={source} alt=""/>
            <h3>{text}</h3>
        </div>
    )
}

export default CalorieCard;