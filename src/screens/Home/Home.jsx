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
              <li><span>Bitcoin</span></li>
              <li><span>Ethereum</span></li>
              <li><span>Binance</span></li>
              

            </ul>
            <div className= "text">made simple</div>
            
          </div>
         
          <img
            className="bitcoin-logo1"
            src="https://i.postimg.cc/3wT0jhf6/iphone-Test.gif"
            alt="bitcoin-logo"
          />
          
        </div>
      </div>
    </div>
  );
}

export default Index;
