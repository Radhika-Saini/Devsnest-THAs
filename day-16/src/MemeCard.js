import React from 'react';
import './MemeCard.css';

function MemeCard({meme,source,text}){
    return(
        <div className="meme-card">
            <h1>{meme}</h1>
            <img src={source} alt="img"/>
            <h2>{text}</h2>
        </div>
    );
}
export default MemeCard;