export class CoincapService {

  _apiBase = 'https://api.coincap.io/v2';

  constructor() {
    localStorage.setItem('page', 1);
  }

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

  getCoin = async (id) => {
    const coin = await this.getResource(`/assets/${id}`);
    return this._transformCoin(coin);
  }

  getCoinsPerPage = async (currentPage = +localStorage.getItem('page')) => {
    let res = '';

    switch (currentPage) {
      case 1:
        res = await this.getResource(`/assets?offset=${0}&limit=20`);
        return res.data;
      case 2:
        res = await this.getResource(`/assets?offset=${currentPage}0&limit=20`);
        return res.data;
      case 3:
        res = await this.getResource(`/assets?offset=${currentPage + 1}0&limit=20`);
        return res.data;
      case 4:
        res = await this.getResource(`/assets?offset=${currentPage + 2}0&limit=20`);
        return res.data;
      case 5:
        res = await this.getResource(`/assets?offset=${currentPage + 3}0&limit=20`);
        return res.data;
    }
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
