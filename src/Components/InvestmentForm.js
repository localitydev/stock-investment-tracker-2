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

    const   [ticker, setTicker]                 = useState(""),
            [pricePerShare, setPricePerShare]   = useState(""),
            [shares, setShares]                 = useState("")
    ;


    // Functions

    /**
     * [Add $investment to AirTable]
     *
     * @param   {[type]}  event  [event description]
     *
     * @return  {[type]}         [return description]
     */
    const addInvestment = (event) => {
        console.log("Adding Investment", props);
        
        // If found, add to that object
        // Else Create a new object

        

        event.preventDefault();
    }

    // EVENT FUNCTIONS
    const onTickerChange = useCallback((event) => {
        console.log( "Ticker Change:", event.target.value );
        setTicker(event.target.value.toUpperCase())
    }, []);

    // EVENT FUNCTIONS
    const onPricePerShareChange = useCallback((event) => {
        console.log( "Price Per Share Change:", event.target.value );
        setTicker(event.target.value.toUpperCase())
    }, []);

    // EVENT FUNCTIONS
    const onShareChange = useCallback((event) => {
        console.log( "Share Change:", event.target.value );
        setTicker(event.target.value.toUpperCase())
    }, []);


    return (
        <React.Fragment>
            {/* Form to add an Investment */}
            <form action="" className="row" onSubmit={addInvestment}>
                
                {/* Ticker */}
                <div className="col">
                    <label htmlFor="ticketSymbol" className="form-label">Ticker</label>
                    <input id="ticker" onChange={onTickerChange} type="text" className="form-control" />
                </div>

                {/* Price Per Share */}
                <div className="col">
                    <label htmlFor="costPerShare" className="form-label">Price Per Share</label>
                    <input id="costPerShare"  type="text" className="form-control" />
                </div>

                {/* Shares */}
                <div className="col">
                    <label htmlFor="shares" className="form-label">Shares</label>
                    <input id="shares"  type="text" className="form-control" />
                </div>

                {/* Submit Investment */}
                <div className="col">
                    <label htmlFor="" className="form-label">&nbsp;</label>
                    <button className="form-control btn btn-primary">Add Investment</button>
                </div>
            </form> 
        </React.Fragment>
    );
}

export default InvestmentForm;