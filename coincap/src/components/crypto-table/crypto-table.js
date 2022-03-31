import React, { Component } from 'react';
import './crypto-table.scss';
import { Link } from 'react-router-dom';
import { CoincapService } from '../../services/coincap-service';
import { Spinner } from '../spinner/spinner';
import ReactPaginate from 'react-paginate';

export class CryptoTable extends Component {

  coincapService = new CoincapService();

  state = {
    tableCoinList: null,
  };


  componentDidMount() {
    this.updateData();
    this.interval = setInterval(() => this.setState(this.updateData), 10000);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  };

  updateData = () => {
    this.coincapService
      .getCoinsPerPage()
      .then((tableCoinList) => {
        this.setState({
          tableCoinList
        });
      })
  };

  handlePageClick = (data) => {
    localStorage.setItem('page', data.selected + 1);
    this.coincapService
      .getCoinsPerPage(data.selected + 1)
      .then((tableCoinList) => {
        this.setState({
          tableCoinList
        });
      })
  };

  renderItems(arr) {
    return arr.map(({ id, rank, name, priceUsd, marketCapUsd, vwap24Hr, supply, volumeUsd24Hr, changePercent24Hr }) => {
      return (
        <tr key={id}>
          <td>{rank}</td>
          <td>{name}</td>
          <td>{`${parseFloat(priceUsd).toFixed(3)}$`}</td>
          <td>{`${parseFloat(marketCapUsd / 1000000000).toFixed(2)}$ b.`}</td>
          <td>{`${parseFloat(vwap24Hr).toFixed(2)}$`}</td>
          <td>{`${parseFloat(supply / 1000000).toFixed(2)}m.`}</td>
          <td>{`${parseFloat(volumeUsd24Hr / 1000000).toFixed(2)}m.`}</td>
          <td>{`${parseFloat(changePercent24Hr).toFixed(2)}%`}</td>
          <td className="crypto-details" onClick={() => this.props.onItemSelected(id)}>
            <div className='crypto-add'><Link to="/details">More..</Link></div>
          </td>
        </tr>
      );
    });
  };

  render() {
    const { tableCoinList } = this.state;

    if (!tableCoinList) {
      return <Spinner />;
    }

    const items = this.renderItems(tableCoinList)

    return (
      <React.Fragment>
        <ReactPaginate
          nextLabel=""
          onPageChange={this.handlePageClick}
          pageCount={5}
          previousLabel=""
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageClassName='page-item'
          pageLinkClassName='page-link'
          activeClassName='active'>
        </ReactPaginate>
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Price</th>
                <th>Marcet Cap</th>
                <th>VWAP (24Hr)</th>
                <th>Supply</th>
                <th>Volume (24Hr)</th>
                <th>Change (24Hr)</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    )
  }
} 