import { gql } from "@apollo/client";

export const coinInfoHeader = gql`
 {
   coins {
     data {
      id
      name
      priceUsd 
     }
   }
 }
`;
