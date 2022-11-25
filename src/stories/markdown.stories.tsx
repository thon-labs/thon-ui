import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RenderMarkdown } from '../components/render-markdown';

const markdownExample = require('./assets/markdown/example.md');

export default {
  title: 'Components/RenderMarkdown',
  component: RenderMarkdown,
  argTypes: {},
} as ComponentMeta<typeof RenderMarkdown>;

const Template: ComponentStory<typeof RenderMarkdown> = (args) => (
  <RenderMarkdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: markdownExample.default,
};
