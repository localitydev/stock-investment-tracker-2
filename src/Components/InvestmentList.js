import React from 'react';

import InvestmentCard from './InvestmentCard';

const InvestmentList = (props) => {

	return(
    <div id="InvestmentList">
      <div className="row mt-5">
        <div className="col">
          <h2>Investments</h2>
        </div>
      </div>

      {/* List of stocks HEADER */}
      <div className="row mt-3" >
          <div className="col-4">Investment</div>
          <div className="col text-end">Shares</div>
          <div className="col text-end">Total Cost</div>
          <div className="col text-end">Avg Per Share</div>
          <div className="col text-end">Gains</div>
      </div>

      {/* Card List of Investments */}
      <div className="container-fluid">

        {props.investments.map( (investment, key) => {
          return (<InvestmentCard investment={investment} key={key} />)
        } )}

      </div>
    </div>
	);
}

export default InvestmentList;