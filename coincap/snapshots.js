module.exports = {
  "__version": "9.5.4",
  "The CoinCap main page": {
    "opens modal window of the table": {
      "1": "<td class=\"crypto-add\"><i class=\"fa-solid fa-plus\"></i></td>"
    },
    "closes buy-coin modal window": {
      "1": "<a class=\"close\"\n  data-cypress-el=\"true\">×</a>"
    },
    "opens modal window of the wallet without coins": {
      "1": "<div class=\"user-wallet-info\">\n  <div class=\"user-wallet__current-cost\">0.00 $</div>\n  <div class=\"user-wallet__different-cost\">0.00</div>\n  <div class=\"user-wallet__different-cost-percent\">0%</div><i\n    class=\"fa-solid fa-briefcase\"></i>\n</div>"
    },
    "buys coin from the table": {
      "1": "<div class=\"user-wallet-info\">\n  <div class=\"user-wallet__current-cost\">39672.09 $</div>\n  <div class=\"user-wallet__different-cost\">-1.66</div>\n  <div class=\"user-wallet__different-cost-percent\">-0.00%</div><i\n    class=\"fa-solid fa-briefcase\"></i>\n</div>"
    },
    "loads successfully": {
      "1": "<header class=\"header\">\n  <div class=\"container\">\n    <div class=\"container__inner\">\n      <div class=\"logo\"><a href=\"/\"><img\n            src=\"/static/media/logo.c7be6b4702fe054d8f3ab1720e2ef43c.svg\"\n            alt=\"Coincap\"></a></div>\n      <div class=\"top-coins\">\n        <div class=\"top-coins__item\">\n          <div class=\"top-coins__item-name\">Bitcoin</div>\n          <div class=\"top-coins__item-price\">39660.789$</div>\n        </div>\n        <div class=\"top-coins__item\">\n          <div class=\"top-coins__item-name\">Ethereum</div>\n          <div class=\"top-coins__item-price\">2924.384$</div>\n        </div>\n        <div class=\"top-coins__item\">\n          <div class=\"top-coins__item-name\">Tether</div>\n          <div class=\"top-coins__item-price\">1.001$</div>\n        </div>\n      </div>\n      <div class=\"user-wallet-info\">\n        <div class=\"user-wallet__current-cost\">0.00 $</div>\n        <div class=\"user-wallet__different-cost\">0.00</div>\n        <div class=\"user-wallet__different-cost-percent\">0%</div><i\n          class=\"fa-solid fa-briefcase\"></i>\n      </div>\n    </div>\n  </div>\n</header>"
    },
    "checks components of the modal window": {
      "1": "<div class=\"modal modal-active\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\"\n        style=\"background: linear-gradient(90deg, rgba(59, 58, 153, 0.957) 18%, rgba(2, 0, 176, 0.957) 53%, rgba(120, 198, 191, 0.81) 100%);\">\n        <h3 class=\"modal-header__title\">Buy Coins</h3><a class=\"close\">×</a>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"modal-body__titles\">\n          <div class=\"modal-body__titles-name\">Name</div>\n          <div class=\"modal-body__titles-amount\">Amount</div>\n          <div class=\"modal-body__titles-total-price\">Total Sum</div>\n        </div>\n        <hr>\n        <div class=\"modal-body__item\">\n          <div class=\"modal-body__item-name\">Bitcoin</div><input\n            class=\"modal-body__item-amount\"\n            type=\"number\"\n            min=\"0.000001\"\n            max=\"1000\"\n            step=\"0.1\"\n            required=\"\">\n          <div class=\"modal-body__item-total-price\">0.00$</div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <div class=\"modal-footer__btn-container\"><button\n            class=\"modal-footer__btn\"\n            type=\"submit\"\n            style=\"background: linear-gradient(90deg, rgba(59, 58, 153, 0.957) 18%, rgba(2, 0, 176, 0.957) 53%, rgba(120, 198, 191, 0.81) 100%);\">buy</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"
    }
  }
}
