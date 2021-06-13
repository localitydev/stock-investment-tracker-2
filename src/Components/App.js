// import logo from './logo.svg';
import { useState } from 'react';

// Components
import InvestmentList from './InvestmentList';

import '../Styles/App.css';

function App(props) {

  const [investments, setInvestments]     = useState([]),
        [tickerSymbol, setTickerSymbol]   = useState(""),
        [costPerShare, setCostPerShare]   = useState(""),
        [shares, setShares]               = useState("")
  ;


  // Functions
  const test = (event) => {
    console.log("This is a test function.");

    event.preventDefault();
  }

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

        {/* Form to add an Investment */}
        <form action="" className="row" onSubmit={test}>
          
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
      
        <hr />

        <InvestmentList investments={ investments }/>

      </div>
      
      

      
    </div>
  );
}

export default App;