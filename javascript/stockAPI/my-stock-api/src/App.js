import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    // selectedStock: null
  };

  // handleStockSelected = stock => {
  //   this.setState({
  //     selectedStock: stock
  //   });
  // };



  componentDidMount() {
    fetch('https://api-v2.intrinio.com/companies?has_stock_prices=true&api_key=OmNkZWQyZGQxNDc5NWZjMTQ3NWI3NjJhZjljOThkMzQ2')

      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load');
        }
        return response.json();
      })
      .then(stocks => {
        this.setState({
          stocks: stocks
        });
      })
      .catch(err => {
        console.error(err);
      });
  }














  render() {
    const { stocks } = this.state;
    return (
      <>
        {stocks &&
          stocks.map(stock =>
            <div>{stock}</div>)}
      </>
    );
    // <div>
    //   {/* <Header/> */}
    //   <hr />
    //   <StockList onStockSelected={this.handleStockSelected} />
    //   <hr />
    //   {this.state.selectedStock && <Stock stock={this.state.selectedStock} />}
    // </div>
    // );
  }
}

export default App;
