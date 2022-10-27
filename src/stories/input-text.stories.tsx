import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputText } from '../components/input-text';

export default {
  title: 'Components/InputText',
  component: InputText,
  argTypes: {},
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => (
  <form className="w-80">
    <InputText {...args} />
  </form>
);

export const Idle = Template.bind({});
Idle.args = {
  placeholder: 'e.g.: example@thonlabs.io',
};

export const Filled = Template.bind({});
Filled.args = {
  value: 'example@thonlabs.io',
  placeholder: 'e.g.: example@thonlabs.io',
};

export const Error = Template.bind({});
Error.args = {
  placeholder: 'e.g.: example@thonlabs.io',
  error: true,
};

export const ErrorWithMessage = Template.bind({});
ErrorWithMessage.args = {
  placeholder: 'e.g.: example@thonlabs.io',
  error: 'This field should be an email',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  id: 'email',
  label: 'Your Best Email',
  placeholder: 'e.g.: example@thonlabs.io',
};
