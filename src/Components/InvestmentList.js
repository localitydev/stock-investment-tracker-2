import React from 'react';
import { useState , useEffect } from 'react';

import InvestmentRow from './InvestmentRow';

const InvestmentList = (props) => {

  // AirTable CONSTANTS
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: process.env.REACT_APP_AIRTABLE_API_KEY}).base(process.env.REACT_APP_AIRTABLE_BASE);

  const [investments, setInvestments] = useState([]);

  // FETCH INVESTMENTS
  // OnMounting this component, get current investments.
  useEffect(() => {
    let tempList = [];

    base('investments').select({
      // Selecting the first 3 records in Grid view:
      maxRecords: -1,
      view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.
  
      records.map(function(record) {
        console.log("Records.forEach:", record.fields);
        tempList.push(record.fields);
      });
  
      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
  
    }, function done(err) {
        if (err) { console.error(err); return; }

        setInvestments(tempList);
    });

  }, [])

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
          <div className="col text-end">Total Price</div>
          <div className="col text-end">Avg Per Share</div>
          {/* <div className="col text-end">Gains</div> */}
      </div>

      {/* Card List of Investments */}
      <div className="container-fluid">

        {investments.map( (investment, key) => {
          return (<InvestmentRow investment={investment} key={key} />);
        })}

      </div>
    </div>
	);
}

export default InvestmentList;