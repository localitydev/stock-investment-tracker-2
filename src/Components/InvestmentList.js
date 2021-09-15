import React from 'react';

import InvestmentRow from './InvestmentRow';

const InvestmentList = (props) => {

	return(
    <div id="InvestmentList">
    {/* Furture Development */}
      {/* <h2>Portfolio</h2>

      <table className="table table-striped">
          <thead>
              <tr>
                  <th>Ticket Symbol</th>
                  <th className="text-end">Shares</th>
                  <th className="text-end">Current Value</th>
                  <th className="text-end">Total Investment</th>
                  <th className="text-end">Profit/Loss</th>
                  <th className="text-end">Percent Growth</th>
              </tr>
          </thead>

          <tbody>
              <tr>
                  <td>AMC</td>
                  <td className="text-end">10</td>
                  <td className="text-end">$100.00</td>
                  <td className="text-end">$500.00</td>
                  <td className="text-end">$118.42</td>
                  <td className="text-end">5.93%</td>
              </tr>
          </tbody>
      </table> */}

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
          {/* <div className="col text-end">Gains</div> */}
      </div>

      {/* Card List of Investments */}
      <div className="container-fluid">

        {props.investments.map( (stock, key) => {
          return (<InvestmentRow stock={stock} key={key} />)
        })}

      </div>
    </div>
	);
}

export default InvestmentList;