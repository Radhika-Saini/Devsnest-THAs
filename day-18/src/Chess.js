import React from "react";

const box1={
    height: "60px",
    width: "60px",
    backgroundColor: "white"
}

const box2={
    height: "60px",
    width: "60px",
    backgroundColor: "black"
}

const chess={
    border: "15px solid red",
    width: "480px",
    margin: "auto",
    marginTop: "20px"
}

function Box1(){
    return (<div style={box1}></div>);
};

function Box2(){
    return (<div style={box2}></div>);
};

var arr1=[];
for(let i=0;i<4;i++){
    arr1.push(<Box1 />);
    arr1.push(<Box2 />)
}

var arr2=[];
for(let i=0;i<4;i++){
    arr2.push(<Box2 />);
    arr2.push(<Box1 />)
}

function Row1(){
    return (<div style={{display:"flex"}}>{arr1}</div>);
}

function Row2(){
    return (<div style={{display:"flex"}}>{arr2}</div>);
}

var arr=[];
for(let i=0;i<4;i++){
    arr.push(<Row1 />);
    arr.push(<Row2 />);
}

function Chess(){
    return(<div style={chess}>{arr}</div>);
}
export default Chess;