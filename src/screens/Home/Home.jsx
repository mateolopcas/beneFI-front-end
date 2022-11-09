import React from "react";
import "./Home.css";

function Index() {
  

  return (
    <div className="container-center-horizontal">
      <div className="index screen">
        <div className="overlap-group1">
          
          <div className= "wrapper">
            <div className="static-txt">Gifting</div>
            <ul className="dynamic-txts">
              <li><span>Crypto</span></li>
              <li><span> Bitcoin</span></li>
              <li><span>Ethereum</span></li>
              <li><span>Dogecoin</span></li>

            </ul>
            <div className= "text">made simple</div>
            
          </div>
          <img
            className="bitcoin-logo"
            src="https://anima-uploads.s3.amazonaws.com/projects/6369f3950c4381d09f8127f4/releases/6369f3a12e9e4aba1410aa37/img/bitcoin-logo@2x.svg"
            alt="bitcoin-logo"
          />
          
        </div>
      </div>
    </div>
  );
}

export default Index;
