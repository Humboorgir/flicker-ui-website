import type { Meta, StoryObj } from "@storybook/react";

import Typography from "./typography";
import Container from "../container";

const meta = {
  title: "UI/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TypographyComponent: Story = {
  render: () => (
    <Container>
      <Typography className="mb-2" variant="h1">
        Hello there!
      </Typography>
      <Typography className="mb-2" variant="h2">
        Hello there!
      </Typography>
      <Typography className="mb-2" variant="h3">
        Hello there!
      </Typography>
      <Typography className="mb-2" variant="h4">
        Hello there!
      </Typography>
      <Typography className="mb-2" variant="h5">
        Hello there!
      </Typography>
      <Typography variant="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consequuntur dolorum aliquid fugiat
        voluptate id est labore tempora ipsum repellat, temporibus alias nobis a magnam velit facilis,
        doloremque nulla quasi sint fugit commodi! Mollitia illo nihil itaque natus autem? Soluta accusamus
        iure temporibus ullam tempore magnam fugit voluptatem facere pariatur. Laudantium quibusdam sed quae
        nobis, eveniet vero eius temporibus ducimus, quis fugiat iusto amet. Illum reprehenderit molestias
        molestiae commodi unde explicabo aliquid dolore, quae facilis ut maxime dignissimos, aspernatur natus{" "}
      </Typography>
    </Container>
  ),
};
