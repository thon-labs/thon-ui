import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Badge } from '../components/badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {},
} as ComponentMeta<typeof Badge>;

const commonProps = {
  size: 'medium',
};

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Badge Value',
  ...commonProps,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Badge Value',
  ...commonProps,
};

export const Red = Template.bind({});
Red.args = {
  variant: 'red',
  children: 'Badge Value',
  ...commonProps,
};
