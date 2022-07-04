import { CoincapService } from "../../../../services/CoincapService";

const coincapService = new CoincapService();

export const getLocaleCost = () => {
  let localCostArr = [];
  let sum = 0;

  let existingEntries = JSON.parse(localStorage.getItem("walletData"));
  if (existingEntries == null) existingEntries = [];

  existingEntries.map(el => {
    localCostArr.push(el.price * el.amount)
  });

  for (let i = 0; i < localCostArr.length; i++) {
    sum += +localCostArr[i];
  };

  return sum;
};

export const getCurrentCost = async () => {
  let currentCostArr = [];
  let sum = 0;

  let existingEntries = JSON.parse(localStorage.getItem("walletData"));
  if (existingEntries == null) existingEntries = [];

  await Promise.all(existingEntries.map(async (el) => {
    const coin = await coincapService.getCoin(el.id)
    currentCostArr.push(+coin.priceUsd * +el.amount)
  }));

  for await (const variable of currentCostArr) {
    sum += variable;
  };

  return sum;
};
