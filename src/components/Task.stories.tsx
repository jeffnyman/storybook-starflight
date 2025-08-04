import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/internal/test";

import Task from "./Task";

export const ActionsData = {
  onArchiveTask: fn(),
  onPinTask: fn(),
};

/*
The `meta` object will be the default export that describes
the metadata for the component.
*/

const meta = {
  component: Task,
  title: "Tasker/Task",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
} satisfies Meta<typeof Task>;

export default meta;

/*
The following are named exports that describe the stories
for the component. A story describes the rendered state
of a UI component. Any story will describe a particular
state that the component can support. Thus, a story is a
permutation of a component. Each exported object will be
a component in a given state and that means tehse stories
serve as a form of test case.
*/

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
    },
  },
};

export const Pinned: Story = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED",
    },
  },
};

export const Archived: Story = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED",
    },
  },
};
