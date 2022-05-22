import { gql } from "@apollo/client";

export const coinInfoQuery = gql`
 query CoinQuery($offset: Int!) {
  coinsPagination (offset: $offset){
     data {
      id
      rank
      name
      priceUsd 
      marketCapUsd
      vwap24Hr 
      supply
      volumeUsd24Hr 
      changePercent24Hr
     }
   }
 }
`;
