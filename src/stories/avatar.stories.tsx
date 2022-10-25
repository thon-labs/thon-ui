import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from '../components/avatar';
import avatarProfilePicture from './assets/images/avatar.jpeg';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {},
} as ComponentMeta<typeof Avatar>;

const commonProps = {};

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Small = Template.bind({});
Small.args = {
  ...commonProps,
  src: avatarProfilePicture,
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  ...commonProps,
  src: avatarProfilePicture,
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  ...commonProps,
  src: avatarProfilePicture,
  size: 'large',
};

export const Grayscale = Template.bind({});
Grayscale.args = {
  ...commonProps,
  src: avatarProfilePicture,
  size: 'medium',
  grayscale: true,
};

export const WithHover = Template.bind({});
WithHover.args = {
  ...commonProps,
  size: 'medium',
  src: avatarProfilePicture,
  withHover: true,
};

export const WithInitials = Template.bind({});
WithInitials.args = {
  ...commonProps,
  size: 'medium',
  name: 'Thon Labs',
  withHover: true,
};
