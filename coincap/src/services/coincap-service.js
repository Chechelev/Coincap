export class CoincapService {

  _apiBase = 'https://api.coincap.io/v2';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      //document.body.innerText = 'not found';
      throw new Error(`Could not fetch ${this._apiBase}${url}, received ${res.status}`);
    }

    const body = await res.json();
    console.log(body)
    return body;
  };

  getAllCoins = async () => {
    const res = await this.getResource(`/assets`);
    return res.data;
  }

  getCoinc = async (id) => {
    const coin = await this.getResource(`/assets/${id}`);
    return this._transformCoin(coin);
  }

  _transformCoin = (coin) => {
    return {
      id: coin.data.id,
      rank: coin.data.rank,
      symbol: coin.data.symbol,
      name: coin.data.name,
      supply: coin.data.supply,
      maxSupply: coin.data.maxSupply,
      marketCapUsd: coin.data.marketCapUsd,
      volumeUsd24Hr: coin.data.volumeUsd24Hr,
      priceUsd: coin.data.priceUsd,
      changePercent24Hr: coin.data.changePercent24Hr,
      vwap24Hr: coin.data.vwap24Hr,
    };
  };

}
