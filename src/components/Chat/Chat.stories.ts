import { exampleMessages, getContactAvatar, getContactName } from "~/example";
import Component from "./Template";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Chat",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Template: Story = {
  args: {
    originUserId: "d51a780b-90ed-4a42-b6f1-df031f1411b5",
    initialMessages: exampleMessages,
    getContactAvatar,
    getContactName: id => getContactName(id, "Unknown"),
  },
};
