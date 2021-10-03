import React from 'react';

import { useState } from 'react';
import { useCallback } from 'react';

const InvestmentForm = (props) => {

    const   [ticker, setTicker]                 = useState(""),
            [pricePerShare, setPricePerShare]   = useState(""),
            [shares, setShares]                 = useState(""),
            [purchaseDate, setPurchaseDate]     = useState("")
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
        console.log("Adding Investment");
        
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'key5zCnOJlaW1bsmL'}).base('appzgacf8InjioTH3');

        base('investments').create([
        {
            "fields": {
                "price_per_share": pricePerShare,
                "shares": shares,
                "ticker_symbol": ticker,
                "purchase_date": purchaseDate
            }
        }
        ], function(err, records) {
            if (err) {
                console.error(err);
                return;
            }
            records.forEach(function (record) {
                console.log(record.getId());
            });
        });

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