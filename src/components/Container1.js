import React from "react";

const Container1 = ({ heading }) => {
  return (
    <div className="container1">
      <div
        style={{ width: "20px", height: "100%", backgroundColor: "#B5A8F0" }}
      ></div>
      <div>
        <h5 style={{margin:"10px"}}>{heading}</h5>
        <p style={{margin:"10px"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar nisl
          ipsum morbi diam scelerisque pulvinar elementum, viverra.
        </p>
        <div style={{width:"100%",textAlign:"end"}}>
        <i className="fa-solid fa-star mr-10"></i>
        <i className="fa-solid fa-eye mr-10"></i>
        <i className="fa-solid fa-share-nodes mr-10"></i>
        </div>
      </div>
    </div>
  );
};

export default Container1;
