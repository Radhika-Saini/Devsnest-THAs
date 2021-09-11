import React from "react";
import './CalorieCard.css';

function CalorieCard({title,source,text,index,calories,setCalories}){
    return(
        <div className="calorie-card">
            <div style={{marginTop:"10px",display:"flex",justifyContent:"space-evenly"}}>            <h2>{title}</h2>
            <button
            onClick={()=>{
                const newItems=calories.filter((el,i)=>i!==index);
                setCalories(newItems);
            }}>Delete</button>
        </div>
            <img src={source} alt=""/>
            <h3>{text}</h3>
        </div>
    )
}

export default CalorieCard;