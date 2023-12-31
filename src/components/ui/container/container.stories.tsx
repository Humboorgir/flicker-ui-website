import type { Meta, StoryObj } from "@storybook/react";

import Container from "./container";

const meta = {
  title: "UI/Container",
  component: Container,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ContainerComponent: Story = {
  args: {
    className: "bg-yellow-400",
    children: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consequuntur dolorum aliquid fugiat
        voluptate id est labore tempora ipsum repellat, temporibus alias nobis a magnam velit facilis,
        doloremque nulla quasi sint fugit commodi! Mollitia illo nihil itaque natus autem? Soluta accusamus
        iure temporibus ullam tempore magnam fugit voluptatem facere pariatur. Laudantium quibusdam sed quae
        nobis, eveniet vero eius temporibus ducimus, quis fugiat iusto amet. Illum reprehenderit molestias
        molestiae commodi unde explicabo aliquid dolore, quae facilis ut maxime dignissimos, aspernatur natus
        minima cumque aliquam cum dolorem qui adipisci consectetur quis sapiente, atque impedit. Assumenda
        vitae quaerat, minus facilis eius aspernatur consectetur fugiat ex, est at perspiciatis hic. Esse
        totam earum aspernatur quaerat aliquam reiciendis explicabo sed, enim reprehenderit est facere
        accusantium aliquid suscipit distinctio blanditiis omnis amet, assumenda laborum. Dolor assumenda
        aspernatur deleniti culpa ut voluptate debitis beatae hic, quos porro perspiciatis ullam odio totam,
        obcaecati consectetur ducimus! Modi excepturi molestias eveniet laboriosam suscipit eum, ullam aut
        earum nisi possimus at eius eligendi doloremque nobis minus illo aliquid. Saepe quidem quibusdam natus
        laboriosam harum hic quasi, voluptas quo, nesciunt molestiae in. Architecto ea porro, officia est
        distinctio natus ullam laboriosam quae aliquid? Necessitatibus nihil architecto fugiat labore
        accusantium tempora sit quidem.
      </>
    ),
  },
};
