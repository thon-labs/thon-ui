import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Spinner } from '../components/spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {},
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const Idle = Template.bind({});
Idle.args = {
  variant: 'ring',
  size: 'small',
  oppositeColor: true,
  hidden: false,
};
