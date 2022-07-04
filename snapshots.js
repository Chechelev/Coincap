module.exports = {
  "__version": "9.5.4",
  "The CoinCap main page": {
    "opens modal window of the wallet without coins": {
      "1": "<div data-testid=\"user-wallet\"\n  class=\"user-wallet\">\n  <div data-testid=\"user-wallet__current-cost\"\n    class=\"user-wallet__current\">0.00 $</div>\n  <div data-testid=\"user-wallet__different-cost-test\"\n    class=\"user-wallet__different-cost\">0.00</div>\n  <div data-testid=\"user-wallet__different-cost-percent\"\n    class=\"user-wallet__different-cost-percent\">0%</div><i\n    class=\"fa-solid fa-briefcase\"></i>\n</div>"
    },
    "closes buy-coin modal window": {
      "1": "<a class=\"close\"\n  data-cypress-el=\"true\">×</a>"
    },
    "checks components of the modal window": {
      "1": "<div class=\"modal modal-active\">\n  <div class=\"modal__dialog\">\n    <div class=\"modal__content\">\n      <div class=\"modal-header\"\n        style=\"background: linear-gradient(90deg, rgba(59, 58, 153, 0.957) 18%, rgba(2, 0, 176, 0.957) 53%, rgba(120, 198, 191, 0.81) 100%);\">\n        <h3 class=\"modal-header__title\">Buy Coins</h3><a class=\"close\">×</a>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"modal-body__titles\">\n          <div class=\"modal-body__titles-name\">Name</div>\n          <div class=\"modal-body__titles-amount\">Amount</div>\n          <div class=\"modal-body__titles-total-price\">Total Sum</div>\n        </div>\n        <hr>\n        <div class=\"modal-body__item\">\n          <div data-testid=\"modalBodyItemNameTest\"\n            class=\"modal-body__item-name\">Bitcoin</div><input\n            class=\"modal-body__item-amount\"\n            data-testid=\"modalInputTest\"\n            type=\"number\"\n            min=\"0.000001\"\n            max=\"1000\"\n            step=\"0.1\"\n            required=\"\"\n            value=\"\">\n          <div data-testid=\"modalBodyPriceTest\"\n            class=\"modal-body__item-total-price\">0.00$</div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <div class=\"modal-footer__btn-container\"><button\n            data-testid=\"modalFooterBtnTest \"\n            class=\"modal-footer__btn\"\n            type=\"submit\"\n            style=\"background: linear-gradient(90deg, rgba(59, 58, 153, 0.957) 18%, rgba(2, 0, 176, 0.957) 53%, rgba(120, 198, 191, 0.81) 100%);\">buy</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"
    }
  }
}
