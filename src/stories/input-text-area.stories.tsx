import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputTextArea } from '../components/input-text-area';

export default {
  title: 'Components/InputTextArea',
  component: InputTextArea,
  argTypes: {},
} as ComponentMeta<typeof InputTextArea>;

const Template: ComponentStory<typeof InputTextArea> = (args) => (
  <form>
    <InputTextArea {...args} />
  </form>
);

const defaultProps = {
  placeholder: 'Your Notes Here',
  rows: 4,
  cols: 50,
};

export const Idle = Template.bind({});
Idle.args = {
  ...defaultProps,
};

export const Filled = Template.bind({});
Filled.args = {
  ...defaultProps,
  value: 'My Notes',
};

export const Error = Template.bind({});
Error.args = {
  ...defaultProps,
  error: true,
};

export const ErrorWithMessage = Template.bind({});
ErrorWithMessage.args = {
  ...defaultProps,
  error: 'This field should be filled',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  ...defaultProps,
  id: 'notes',
  label: 'What Do You Think?',
};

export const WithInputClassName = Template.bind({});
WithInputClassName.args = {
  ...defaultProps,
  inputClassName: 'w-full h-48',
};
