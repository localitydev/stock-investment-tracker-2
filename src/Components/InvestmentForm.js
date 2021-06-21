import React from 'react';

import { useState } from 'react';

const InvestmentForm = (props) => {

    const [tickerSymbol, setTickerSymbol]   = useState(""),
        [costPerShare, setCostPerShare]   = useState(""),
        [shares, setShares]               = useState("")
    ;


    // Functions
    const addInvestment = (event) => {
        console.log("This is a test function.", props.setInvestment([1]));

        // Search Investments for the investment I am adding
        // If found, add to that object
        // Else Create a new object

        event.preventDefault();
    }

    return (
        <React.Fragment>
            {/* Form to add an Investment */}
            <form action="" className="row" onSubmit={addInvestment}>
                
                {/* Ticker Symbol */}
                <div className="col">
                    <label htmlFor="ticketSymbol" className="form-label">Ticker Symbol</label>
                    <input id="tickerSymbol" onChange={(event) => { setTickerSymbol(event.target.value.toUpperCase()) }} type="text" className="form-control" />
                </div>

                {/* Cost Per Share */}
                <div className="col">
                    <label htmlFor="costPerShare" className="form-label">Cost Per Share</label>
                    <input id="costPerShare" value={costPerShare} onChange={setCostPerShare} type="text" className="form-control" />
                </div>

                {/* Shares */}
                <div className="col">
                    <label htmlFor="shares" className="form-label">Shares</label>
                    <input id="shares" value={shares} onChange={setShares} type="text" className="form-control" />
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