import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components/button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const commonProps = {
  size: 'medium',
  as: 'button',
  loading: false,
  locked: false,
  disabled: false,
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'My Primary Button',
  ...commonProps,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'My Secondary Button',
  ...commonProps,
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  children: 'My Ghost Button',
  ...commonProps,
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  children: 'My Delete Button',
  ...commonProps,
};
