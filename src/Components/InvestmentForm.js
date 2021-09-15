import React from 'react';

import { useState } from 'react';
import { useCallback } from 'react';

const InvestmentForm = (props) => {

    const [investment, setInvestment] = useState({
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
    });

    const [tickerSymbol, setTickerSymbol]   = useState(""),
        [costPerShare, setCostPerShare]   = useState(""),
        [shares, setShares]               = useState("")
    ;


    // Functions
    const addInvestment = (event) => {
        console.log("Adding Investment", props);
        
        // Search Investments for the investment I am adding
        let foundInvestmentObj = props.investments.find( obj => {
            console.log("Investment Found:", obj.tickerSymbol === tickerSymbol);
            return obj.tickerSymbol === tickerSymbol;
        });

        // If found, add to that object
        // Else Create a new object

        

        event.preventDefault();
    }

    // EVENT FUNCTIONS
    const onTickerChange = useCallback((event) => {
        console.log( "Ticker Symbol", event.target.value );
        setTickerSymbol(event.target.value.toUpperCase()) }
        , []);

    

    return (
        <React.Fragment>
            {/* Form to add an Investment */}
            <form action="" className="row" onSubmit={addInvestment}>
                
                {/* Ticker Symbol */}
                <div className="col">
                    <label htmlFor="ticketSymbol" className="form-label">Ticker Symbol</label>
                    <input id="tickerSymbol" onChange={onTickerChange} type="text" className="form-control" />
                </div>

                {/* Cost Per Share */}
                <div className="col">
                    <label htmlFor="costPerShare" className="form-label">Price Per Share</label>
                    <input id="costPerShare"  type="text" className="form-control" />
                </div>

                {/* Shares */}
                <div className="col">
                    <label htmlFor="shares" className="form-label">Shares</label>
                    <input id="shares"  type="text" className="form-control" />
                </div>

                {/* Shares */}
                <div className="col">
                    <label htmlFor="" className="form-label">&nbsp;</label>
                    <button className="form-control btn btn-primary">Add Investment</button>
                </div>
            </form>
        </React.Fragment>
    );
}

export default InvestmentForm;