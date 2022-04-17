export function BuyBtn(props) {
  const buyCoin = props.buyCoin
  return (
    <div className="crypto-details__right">
      <button className="btn__buy-coin" type="button" onClick={buyCoin}>Buy</button>
    </div>
  );
};