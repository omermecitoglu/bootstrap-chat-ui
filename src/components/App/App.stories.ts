import Component from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "App",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const App: Story = {};
