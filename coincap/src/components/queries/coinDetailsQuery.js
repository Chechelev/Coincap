import { gql } from "@apollo/client";

export const coinDetailsQuery = gql`
 query CoinDetailsQuery($id: String!) {
  coin (id: $id){
     data {
      id
      rank
      symbol
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
