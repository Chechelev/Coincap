import React from 'react';
import { RenderCryptoTable } from './render-crypto-table';

export default {
  component: RenderCryptoTable,
  title: 'Table',

  argTypes: {
    tableCoinList: {
      description: 'Data for a table row',
      type: 'array',
      control: 'object',
    },

    color: {
      description: 'Appearance option',
      type: 'string',
      defaultValue: '#343450',
      control: { type: 'color', presetColors: ['red', 'green'] }
    },

    pagination: {
      description: 'Pagination of the table',
      type: 'boolean',
      defaultValue: false,
      control: { type: 'boolean' },
    },

  },
};

const Template = args => <RenderCryptoTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  tableCoinList: [{
    id: '1',
    rank: '1',
    name: 'Bitcoin',
    priceUsd: '41596.123',
    marketCapUsd: '783487895456',
    vwap24Hr: '82736.12',
    supply: '18273648.345',
    volumeUsd24Hr: '2364289656.12435',
    changePercent24Hr: '1.2',
  }],

  state: 'primary',
};

export const Hover = Template.bind({});
Hover.args = {
  tableCoinList: [{
    id: '1',
    rank: '1',
    name: 'Bitcoin',
    priceUsd: '41596.123',
    marketCapUsd: '783487895456',
    vwap24Hr: '82736.12',
    supply: '18273648.345',
    volumeUsd24Hr: '2364289656.12435',
    changePercent24Hr: '1.2',
  }],
  color: "#6699ff",
};

export const Color = Template.bind({});
Color.args = {
  tableCoinList: [{
    id: '1',
    rank: '1',
    name: 'Bitcoin',
    priceUsd: '41596.123',
    marketCapUsd: '783487895456',
    vwap24Hr: '82736.12',
    supply: '18273648.345',
    volumeUsd24Hr: '2364289656.12435',
    changePercent24Hr: '1.2',
  }],

  color: "#343450"
};

export const Pagination = Template.bind({});
Pagination.args = {
  tableCoinList: [{
    id: '1',
    rank: '1',
    name: 'Bitcoin',
    priceUsd: '41596.123',
    marketCapUsd: '783487895456',
    vwap24Hr: '82736.12',
    supply: '18273648.345',
    volumeUsd24Hr: '2364289656.12435',
    changePercent24Hr: '1.2',
  }],

  pagination: 'true'
};


