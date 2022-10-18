import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components/button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const commonProps = {
  children: 'My Button',
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
  ...commonProps,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  ...commonProps,
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  ...commonProps,
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  ...commonProps,
};
