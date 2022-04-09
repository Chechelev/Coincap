import React from "react";
import { Spinner } from "../../../common/spinner/spinner";
import TradingViewWidget from 'react-tradingview-widget';
import Modal from "../../../common/add-coin-modal-window/addCoinModal";

export function RenderCryptoDetails(props) {

  const { symbol, name, priceUsd, marketCapUsd, vwap24Hr, changePercent24Hr, volumeUsd24Hr, supply } = props.coin;
  let date = new Date().toDateString();
  let windowInnerWidth = window.innerWidth;

  if (!props.coin) {
    return <Spinner />;
  };

  if (windowInnerWidth >= 900) {

    return (
      <div className="crypto-details">
        <div className="container">
          <div className="crypto-details__container">

            <div className="crypto-details__left">
              <div className="crypto-details__name">{name} ({symbol})</div>
              <div className="crypto-details__date">{date}</div>
            </div>

            <div className="crypto-details__middle">
              <div className="crypto-details__change">Change <span className={changePercent24Hr >= 0 ? 'change-green' : 'change-red'}>{`${parseFloat(changePercent24Hr).toFixed(3)}%`}</span></div>
              <div className="crypto-details__price">Price <span>{`${parseFloat(priceUsd).toFixed(3)}$`}</span></div>
            </div>

            <Modal show={props.show} warning={props.warning} handleClose={props.handleClose} handleSubmit={props.handleSubmit}>{[name, priceUsd]}</Modal>

            <div className="crypto-details__right">
              <button className="btn__buy-coin" type="button" onClick={props.showModal}>Buy</button>
            </div>

          </div>

          <div className="crypto-details__graphic">
            <TradingViewWidget
              symbol={`${symbol}USD`}
              autosize={true}
              interval="D"
              timezone="Etc/UTC"
              theme="Light"
              locale='en'
              toolbar_bg="#f1f3f6"
              enable_publishing={false}
              hide_top_toolbar={true}
              save_image={false}
              container_id="tradingview_60d45"
              visual_order={false}
            />
          </div>
        </div>
      </div>
    );
  }

  else if (windowInnerWidth >= 650) {

    return (
      <div className="crypto-details">
        <div className="container">
          <div className="crypto-details__container">

            <div className="crypto-details__left">
              <div className="crypto-details__name">{name} ({symbol})</div>
              <div className="crypto-details__date">{date}</div>
            </div>

            <div className="crypto-details__middle">
              <div className="crypto-details__change">Change <span className={changePercent24Hr >= 0 ? 'change-green' : 'change-red'}>{`${parseFloat(changePercent24Hr).toFixed(3)}%`}</span></div>
              <div className="crypto-details__price">Price <span>{`${parseFloat(priceUsd).toFixed(3)}$`}</span></div>
            </div>

            <Modal show={props.show} warning={props.warning} handleClose={props.handleClose} handleSubmit={props.handleSubmit}>{[name, priceUsd]}</Modal>

            <div className="crypto-details__right">
              <button className="btn__buy-coin" type="button" onClick={props.showModal}>Buy</button>
            </div>

          </div>

          <div className="crypto-details__graphic">
            <TradingViewWidget
              symbol={`${symbol}USD`}
              autosize={true}
              interval="D"
              timezone="Etc/UTC"
              theme="Light"
              locale='en'
              toolbar_bg="#f1f3f6"
              enable_publishing={false}
              hide_top_toolbar={true}
              save_image={false}
              container_id="tradingview_60d45"
              visual_order={false}
            />
          </div>

          <div className="crypto-details__media-container">
            <div className="crypto-details__marketCapUsd">MarketCap <span>{`${parseFloat(marketCapUsd / 1000000000).toFixed(2)}$ b.`}</span></div>
            <div className="crypto-details__vwap24Hr">Vwap <span>{`${parseFloat(vwap24Hr).toFixed(2)}$`}</span></div>
          </div>

        </div>
      </div>
    );
  }

  else if (windowInnerWidth < 650) {

    return (
      <div className="crypto-details">
        <div className="container">
          <div className="crypto-details__container">

            <div className="crypto-details__left">
              <div className="crypto-details__name">{name} ({symbol})</div>
              <div className="crypto-details__date">{date}</div>
            </div>

            <div className="crypto-details__middle">
              <div className="crypto-details__change">Change <span className={changePercent24Hr >= 0 ? 'change-green' : 'change-red'}>{`${parseFloat(changePercent24Hr).toFixed(3)}%`}</span></div>
              <div className="crypto-details__price">Price <span>{`${parseFloat(priceUsd).toFixed(3)}$`}</span></div>
            </div>

            <Modal show={props.show} warning={props.warning} handleClose={props.handleClose} handleSubmit={props.handleSubmit}>{[name, priceUsd]}</Modal>

            <div className="crypto-details__right">
              <button className="btn__buy-coin" type="button" onClick={props.showModal}>Buy</button>
            </div>

          </div>

          <div className="crypto-details__graphic">
            <TradingViewWidget
              symbol={`${symbol}USD`}
              autosize={true}
              interval="D"
              timezone="Etc/UTC"
              theme="Light"
              locale='en'
              toolbar_bg="#f1f3f6"
              enable_publishing={false}
              hide_top_toolbar={true}
              save_image={false}
              container_id="tradingview_60d45"
              visual_order={false}
            />
          </div>
          <div className="crypto-details__media-container">
            <div className="crypto-details__marketCapUsd">MarketCap <span>{`${parseFloat(marketCapUsd / 1000000000).toFixed(2)}$ b.`}</span></div>
            <div className="crypto-details__vwap24Hr">Vwap <span>{`${parseFloat(vwap24Hr).toFixed(2)}$`}</span></div>
            <div className="crypto-details__supply">Supply <span>{`${parseFloat(supply / 1000000).toFixed(2)}m.`}</span></div>
            <div className="crypto-details__volume">Volume <span>{`${parseFloat(volumeUsd24Hr / 1000000).toFixed(2)}m.`}</span></div>
          </div>
        </div>
      </div>
    );
  };
};
