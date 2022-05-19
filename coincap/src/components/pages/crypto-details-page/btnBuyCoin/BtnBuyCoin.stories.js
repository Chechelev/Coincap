import React from 'react';

import BuyBtn from './btn-buy-coin';

export default {
  component: BuyBtn,
  title: 'Buy Button',
  parameters: { controls: { sort: ['Default', 'Hover', 'Active', 'Media'] } },
  argTypes: {
    text: {
      description: 'Button text',
      type: 'string',
      name: 'label',
      defaultValue: 'Buy'
    },

    state: {
      description: 'Appearance option',
      type: 'string',
      defaultValue: 'primary',
      options: ['primary', 'hover', 'active'],
      control: { type: 'radio' },
    },

    size: {
      description: 'Button size and appearance for mobile-devices ',
      type: 'string',
      defaultValue: 'primary',
      options: ['primary', 'small'],
      control: { type: 'radio' },
    },

    type: {
      description: 'Button type',
      type: 'string',
      name: 'type',
      defaultValue: 'button',
      options: ['button'],
      control: { type: 'radio' },
    },
  },
}

const Template = args => <BuyBtn {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Buy',
  state: 'primary',
};

export const Hover = Template.bind({});
Hover.args = {
  text: 'Buy',
  state: 'hover',
};

export const Active = Template.bind({});
Active.args = {
  text: 'Buy',
  state: 'active',
};

export const Media = Template.bind({});
Media.args = {
  text: 'Buy',
  size: 'small'
};

