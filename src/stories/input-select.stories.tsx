import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputSelect } from '../components/input-select';

export default {
  title: 'Components/InputSelect',
  component: InputSelect,
  argTypes: {},
} as ComponentMeta<typeof InputSelect>;

const Template: ComponentStory<typeof InputSelect> = (args) => (
  <form className="w-80">
    <InputSelect {...args} />
  </form>
);

const defaultProps = {
  options: [
    {
      value: '',
      label: 'Choose a Hero',
      isPlaceholder: true,
    },
    { value: 'green-arrow', label: 'Oliver Queen' },
    { value: 'black-canary', label: 'Laurel Lance' },
    { value: 'white-canary', label: 'Sara Lance' },
    { value: 'speedy', label: 'Thea Queen' },
    { value: 'dark-archer', label: 'Malcolm Merlyn' },
  ],
};

export const Idle = Template.bind({});
Idle.args = {
  ...defaultProps,
  defaultValue: '',
};

export const Filled = Template.bind({});
Filled.args = {
  ...defaultProps,
  defaultValue: 'green-arrow',
};

export const Error = Template.bind({});
Error.args = {
  ...defaultProps,
  error: true,
};

export const ErrorWithMessage = Template.bind({});
ErrorWithMessage.args = {
  ...defaultProps,
  error: 'You must choose an hero',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  ...defaultProps,
  id: 'hero',
  label: 'Your Favorite Hero',
};
