import React, { useState, useEffect } from "react";
import './App.css';


const StockChooser = props => {


  return (
    <>
      Find a stock: <input placeholder="Search.." onChange={e => props.onCompanyChange(e)}></input>
      {/* <button>Search</button> */}
      <button type="submit" onClick={e => props.onSubmit(e)}><i className="fa fa-search"></i></button>
    </>
  )
}

const StockDisplay = ({ tickerSymbolState, search }) => {
  // const [tickerSymbolState, setTickerSymbolState] = useState([...props.tickerSymbolState]);
  const [companyInfoState, setcompanyInfoState] = useState({});
  const [stockPriceState, setStockPriceState] = useState({});
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch('https://api-v2.intrinio.com/companies?api_key=OmNkZWQyZGQxNDc5NWZjMTQ3NWI3NjJhZjljOThkMzQ2')
      .then(r => {
        if (!r.ok) {
          throw new Error('failed to fetch');
        }
        return r.json()
      })
      .then(result => {
        setCompanies(result)
        // console.log(companies)
      })
      .catch(err => {
        console.error(err.message);
      });

  }, []);

  useEffect(() => {
    // setInterval(() => {
    console.log('tickerSymbolState', search, 'companies', companies.length);

    if (companies.length > 0) {

      const found = companies.some(company => company.ticker === search);

      if (found) {
        fetch(`https://api-v2.intrinio.com/companies/${search}?api_key=OmNkZWQyZGQxNDc5NWZjMTQ3NWI3NjJhZjljOThkMzQ2`)
          .then(r => {
            if (!r.ok) {
              throw new Error('failed to fetch');
            }
            return r.json()
          })
          .then(result => {
            setcompanyInfoState(result)
          })
          .catch(err => {
            console.error(err.message);
          });

        const getPrice = () => {
          fetch(`https://api-v2.intrinio.com/securities/${search}/prices/realtime?api_key=OmNkZWQyZGQxNDc5NWZjMTQ3NWI3NjJhZjljOThkMzQ2`)
            .then(r => {
              if (!r.ok) {
                throw new Error('failed to fetch');
              }
              return r.json()
            })
            .then(result => {
              setStockPriceState(result)
            })
            .catch(err => {
              console.error(err.message);
            });
        }

        getPrice();
        const interval = setInterval(() => {
          getPrice()
        }, 10000);
        return () => clearInterval(interval);
      }
    }

  }, [search]);

  console.log(companies);

  return (
    <>
      {tickerSymbolState}
      <div>
        <h2>Price Info</h2>
        last price: {stockPriceState.last_price}<br></br>
      last time: {stockPriceState.last_time}

      </div>
      <div>
        <h2>Company Info</h2>
        address: {companyInfoState.business_address}<br></br>
        phone: {companyInfoState.business_phone_no}<br></br>
        ceo: {companyInfoState.ceo}
      </div>
      <div>
        {/* {companies.map(company => { <h1>{company}</h1> })} */}
      </div>
    </>
  )
}


const App = () => {
  const [tickerSymbolState, setTickerSymbolState] = useState('');
  const [search, setSearch] = useState('');

  const handleCompanyChange = event => {
    setTickerSymbolState(event.target.value);
  };

  const handleSubmit = event => {
    setSearch(tickerSymbolState);
  };

  return (
    <>
      <StockChooser onCompanyChange={handleCompanyChange} onSubmit={handleSubmit} />
      <StockDisplay tickerSymbolState={tickerSymbolState} search={search} />
      {tickerSymbolState}
    </>
  );
}

export default App;
