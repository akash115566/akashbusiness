import React from "react";
import "../Style/trade.css";
import InternationalTrade from "./InternationalTrade";

const Trade = () => {
  return (
    <>
 
    <div className="trade-container">
      
      {/* Heading */}
      <h1 className="trade-heading">
        international trade operations
      </h1>

      {/* Content */}
      <div className="trade-content">
        <p>
          International Trade Operations involves the management of global
          import and export activities, including documentation, logistics,
          compliance, and communication between international buyers and
          sellers. It plays a crucial role in ensuring smooth business
          transactions across countries.
        </p>
      </div>

    </div>

    <InternationalTrade />
       </>
  );
};

export default Trade;