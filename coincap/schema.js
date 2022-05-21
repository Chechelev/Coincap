const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt } = require('graphql');

const axios = require('axios');

const coinTypes = new GraphQLObjectType({
  name: 'Coins',
  fields: () => ({
    data: { type: new GraphQLList(dataType) }
  })
});

const coinId = new GraphQLObjectType({
  name: 'CoinId',
  fields: () => ({
    data: { type: (dataType) }
  })
});

const dataType = new GraphQLObjectType({
  name: 'Coin',
  fields: () => ({
    id: { type: GraphQLID },
    rank: { type: GraphQLString },
    name: { type: GraphQLString },
    priceUsd: { type: GraphQLString },
    supply: { type: GraphQLString },
    marketCapUsd: { type: GraphQLString },
    volumeUsd24Hr: { type: GraphQLString },
    changePercent24Hr: { type: GraphQLString },
    vwap24Hr: { type: GraphQLString },
  })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    coins: {
      type: (coinTypes),
      resolve(parents, args) {
        return axios
          .get('https://api.coincap.io/v2/assets')
          .then(res => res.data);
      }
    },

    coinsPagination: {
      type: coinTypes,
      args: {
        offset: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.coincap.io/v2/assets?offset=${args.offset}&limit=20`)
          .then(res => res.data);
      }
    },
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});