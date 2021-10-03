import React from 'react';
import { useState , useEffect } from 'react';

// Components
import InvestmentList from './InvestmentList';
import InvestmentForm from './InvestmentForm';

import '../Styles/App.css';

function App(props) {

  // AirTable CONSTANTS
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: process.env.REACT_APP_AIRTABLE_API_KEY}).base(process.env.REACT_APP_AIRTABLE_BASE);

  const [investments, setInvestments] = useState([
    {
      "tickerSymbol": "AMC",
      "company": "AMC Entertainment",
      "avgSharePrice": 54.92,
      "pnl": 42.21,
      "totalGrowth": 12.4,
      "totalShares": 15.4673325,
      "totalInvestment": 1223.63,
      "investments": [
          {
              "purchaseDate": "",
              "shares": 1.667468,
              "sharePrice": 49.96,
              "investmentTotal": 83.30
          }
      ]
  }]);

  // FETCH INVESTMENTS
  // OnMounting this component, get current investments.
  useEffect(() => {
    
    base('investments').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 3,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
            console.log('Retrieved', record.get('investment_id'));
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();

    }, function done(err) {
        if (err) { console.error(err); return; }
    });

  }, [])

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Stock Investments</span>
        </div>
      </nav>

      {/* Application Container */}
      <div className="container mt-5">
        
        {/* Section Title */}
        <div className="row">
          <div className="col">
            <h1 className="display-5">Add a Stock Investment</h1>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <InvestmentForm investments={investments} setInvestments={setInvestments} />
          </div>
        </div>
      
        <hr /> 

        <InvestmentList investments={ investments }/>

      </div>

    </div>
  );
}

export default App;