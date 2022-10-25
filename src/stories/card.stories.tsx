import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from '../components/card';
import { Text } from '../components/text';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>;

const commonProps = {
  className: 'p-4',
  children: (
    <>
      <Text variant="2xl" as={'h1'} className="mb-2">
        What is Lorem Ipsum?
      </Text>
      <Text as={'p'}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Text>
    </>
  ),
};

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...commonProps,
};

export const Clickable = Template.bind({});
Clickable.args = {
  ...commonProps,
  clickable: true,
};

export const Bordered = Template.bind({});
Bordered.args = {
  ...commonProps,
  bordered: true,
};

export const BorderedWithoutBackground = Template.bind({});
BorderedWithoutBackground.args = {
  ...commonProps,
  bordered: true,
  withBackground: false,
};
