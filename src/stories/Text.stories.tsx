import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '../components/text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {},
} as ComponentMeta<typeof Text>;

const commonProps = {
  children: 'I Can Do This All Day',
  fallback: '-',
  as: 'span',
};

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Label = Template.bind({});
Label.args = {
  variant: 'label',
  ...commonProps,
};

export const LabelThin = Template.bind({});
LabelThin.args = {
  variant: 'label-thin',
  ...commonProps,
};

export const XXSmall = Template.bind({});
XXSmall.args = {
  variant: 'xxs',
  ...commonProps,
};

export const XSmall = Template.bind({});
XSmall.args = {
  variant: 'xs',
  ...commonProps,
};

export const Small = Template.bind({});
Small.args = {
  variant: 'sm',
  ...commonProps,
};

export const Base = Template.bind({});
Base.args = {
  variant: 'base',
  ...commonProps,
};

export const Large = Template.bind({});
Large.args = {
  variant: 'lg',
  ...commonProps,
};

export const XLarge = Template.bind({});
XLarge.args = {
  variant: 'xl',
  ...commonProps,
};

export const TwoXLarge = Template.bind({});
TwoXLarge.args = {
  variant: '2xl',
  ...commonProps,
};

export const ThreeXLarge = Template.bind({});
ThreeXLarge.args = {
  variant: '3xl',
  ...commonProps,
};

export const FourXLarge = Template.bind({});
FourXLarge.args = {
  variant: '4xl',
  ...commonProps,
};

export const FiveXLarge = Template.bind({});
FiveXLarge.args = {
  variant: '5xl',
  ...commonProps,
};

export const SixXLarge = Template.bind({});
SixXLarge.args = {
  variant: '6xl',
  ...commonProps,
};

export const SevenXLarge = Template.bind({});
SevenXLarge.args = {
  variant: '7xl',
  ...commonProps,
};

export const EightXLarge = Template.bind({});
EightXLarge.args = {
  variant: '8xl',
  ...commonProps,
};

export const NineXLarge = Template.bind({});
NineXLarge.args = {
  variant: '9xl',
  ...commonProps,
};

export const MobileVariant = Template.bind({});
MobileVariant.args = {
  variant: '2xl md:3xl lg:4xl',
  ...commonProps,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  variant: '4xl',
  className: 'text-pink-500 dark:text-green-500',
  ...commonProps,
};
