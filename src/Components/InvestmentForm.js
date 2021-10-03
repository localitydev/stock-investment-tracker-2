import React from 'react';

import { useState } from 'react';
import { useCallback } from 'react';

const InvestmentForm = (props) => {

    const   [ticker, setTicker]                 = useState(""),
            [pricePerShare, setPricePerShare]   = useState(""),
            [shares, setShares]                 = useState(""),
            [purchaseDate, setPurchaseDate]     = useState("")
    ;


    const addInvestment = (event) => {
        console.log("Adding Investment");
        
        
        event.preventDefault();
    }

    // EVENT FUNCTIONS
    const onTickerChange = useCallback((event) => {
        console.log( "Ticker Change:", event.target.value );
        setTicker(event.target.value.toUpperCase());
    }, []);

    const onPricePerShareChange = useCallback((event) => {
        console.log( "Price Per Share Change:", event.target.value );
        setPricePerShare(event.target.value.toUpperCase());
    }, []);

    const onShareChange = useCallback((event) => {
        console.log( "Share Change:", event.target.value );
        setShares(event.target.value.toUpperCase());
    }, []);

    const onDateChange = useCallback((event) => {
        console.log( "Share Change:", event.target.value );
        setPurchaseDate(event.target.value.toUpperCase());
    }, []);


    return (
        <React.Fragment>
            {/* Form to add an Investment */}
            <form action="" className="row" onSubmit={addInvestment}>

                {/*DatePicker*/}
                <div className="col">
                    <label htmlFor="ticketSymbol" className="form-label">Ticker</label>
                    <input id="purchaseDate" onChange={onDateChange} type="date" className="form-control" />
                </div>
                
                {/* Ticker */}
                <div className="col">
                    <label htmlFor="ticketSymbol" className="form-label">Ticker</label>
                    <input id="ticker" onChange={onTickerChange} type="text" className="form-control" />
                </div>

                {/* Price Per Share */}
                <div className="col">
                    <label htmlFor="costPerShare" className="form-label">Price Per Share</label>
                    <input id="costPerShare" onChange={onPricePerShareChange} type="text" className="form-control" />
                </div>

                {/* Shares */}
                <div className="col">
                    <label htmlFor="shares" className="form-label">Shares</label>
                    <input id="shares" onChange={onShareChange} type="text" className="form-control" />
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