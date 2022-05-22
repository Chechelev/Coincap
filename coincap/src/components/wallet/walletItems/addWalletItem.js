export const addWalletItem = (coin) => {
  let existingEntries = JSON.parse(localStorage.getItem("walletData"));
  if (existingEntries == null) existingEntries = [];
  console.log(coin.coin.data)
  const newItem = {
    id: coin.coin.data.id,
    name: coin.coin.data.name,
    price: coin.coin.data.priceUsd,
    amount: localStorage.getItem('submit'),
  };

  localStorage.setItem('wallet', JSON.stringify(newItem));
  existingEntries.push(newItem);
  localStorage.setItem("walletData", JSON.stringify(existingEntries));
};