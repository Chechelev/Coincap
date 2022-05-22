import React from 'react';

import Modal from './addCoinModal';
import '../../wallet/wallet-modal-window/wallet-modal-window.scss';

export default {
  component: Modal,
  title: 'Modal window',

  argTypes: {
    color: {
      description: 'Appearance option',
      type: 'string',
      defaultValue: 'linear-gradient(90deg, rgba(59, 58, 153, 0.958421) 18%, rgba(2, 0, 176, 0.958421) 53%, rgba(120, 198, 191, 0.809961) 100%)',
      control: { type: 'color', presetColors: ['radial-gradient(circle, rgba(252,0,255,1) 0%, rgba(103,149,255,1) 80%)', 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'] }
    },

    show: {
      description: 'Open or close window',
      type: 'boolean',
      control: { type: 'boolean' },
    },

    children: {
      description: 'Data about chosen token',
      type: 'array',
      defaultValue: [],
      control: 'array',
    },
  },
}

const Template = args => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  show: false,
  children: ['Coin name', 0]
};

export const OpenWindow = Template.bind({});
OpenWindow.args = {
  show: true,
  children: ['Litecoin', '80.16']
};

export const Color = Template.bind({});
Color.args = {
  show: true,
  children: ['Litecoin', '80.16'],
  color: 'linear-gradient(90deg, rgba(59, 58, 153, 0.958421) 18%, rgba(2, 0, 176, 0.958421) 53%, rgba(120, 198, 191, 0.809961) 100%)'
};



