import {
  useQuery,
  gql
} from "@apollo/client";

export const coinInfoQuery = gql`
 {
   coins {
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
