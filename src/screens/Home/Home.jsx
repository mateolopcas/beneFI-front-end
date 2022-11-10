import React from "react";
import "./Home.css";


function Index() {
  

  return (
    <div className="container-center-horizontal">
      <div className="index screen">
        <div className="overlap-group1">
          
          <div className="wrapper">
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <div className="static-txt">gifting</div>
            <ul className="dynamic-txts">
              <li><span>Crypto</span></li>
              <li><span>Bitcoin</span></li>
              <li><span>Ethereum</span></li>
              <li><span>Binance</span></li>
              

            </ul>
            <div className= "text">made simple.</div>
            
          </div>
         
          <img
            className="bitcoin-logo1"
            src="https://i.postimg.cc/ZnXkzhfm/bene-Fi-Final.gif"
            alt="bitcoin-logo"
          />
          
        </div>
      </div>
    </div>
  );
}

export default Index;
