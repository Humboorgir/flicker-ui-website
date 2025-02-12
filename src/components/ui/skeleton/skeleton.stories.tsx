import type { Meta, StoryObj } from "@storybook/react";

import Skeleton from "./skeleton";

const meta = {
  title: "UI/skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SkeletonComponent: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-2">
        <h2>Loading skeletons!</h2>
        <h2 className="font-bold text-xl">
          <Skeleton />
        </h2>
        <p>
          {[1, 2, 3, 4, 5].map(() => {
            return <Skeleton></Skeleton>;
          })}
        </p>
      </div>
    );
  },
};
