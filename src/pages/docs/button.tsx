import DocsLayout from "@/layouts/docsLayout";
import PreviewBox from "@/components/docs/previewBox";
import Typography from "@/components/ui/typography";
import Button from "@/components/ui/button";
import Code from "@/components/docs/code";

const Page = () => {
  const displayedCodes = {
    default: `import Button from '@/components/button'
    // variant doesnt necessarily need to be specified here
    <Button variant="default">Button component</Button>`,
    secondary: `import Button from '@/components/button'
    // variant doesnt necessarily need to be specified here
    <Button variant="default">Button component</Button>`,
    outline: `import Button from '@/components/button'
    // variant doesnt necessarily need to be specified here
    <Button variant="default">Button component</Button>`,
    ghost: `import Button from '@/components/button'
    // variant doesnt necessarily need to be specified here
    <Button variant="default">Button component</Button>`,
    link: `import Button from '@/components/button'
    // variant doesnt necessarily need to be specified here
    <Button variant="default">Button component</Button>`,
  };

  return (
    <>
      <Typography variant="h2">Button component</Typography>
      <Typography className="mb-10" variant="p">
        Displays a clickable button; comes with different sizes and variants
      </Typography>

      {/* installation  */}
      <Typography className="mb-0.5" variant="h2">
        Installation
      </Typography>
      <Typography className="mb-1.5" variant="p">
        The following command will add the Button component into your
        <code className="inline mx-1 bg-black/10 p-0.5">components/ui</code> folder
      </Typography>
      <Code className="mb-10" lang="bash">
        $ npx flicker-ui@latest add button
      </Code>

      <Typography className="mb-2" variant="h3">
        Default
      </Typography>

      <PreviewBox displayedCode={displayedCodes.default} className="mb-8">
        <Button>Button component </Button>
      </PreviewBox>

      <Typography className="mb-2" variant="h3">
        Secondary
      </Typography>

      <PreviewBox displayedCode={displayedCodes.secondary} className="mb-8">
        <Button variant="secondary">Button component </Button>
      </PreviewBox>

      <Typography className="mb-2" variant="h3">
        Outline
      </Typography>

      <PreviewBox displayedCode={displayedCodes.outline} className="mb-8">
        <Button variant="outline">Button component </Button>
      </PreviewBox>

      <Typography className="mb-2" variant="h3">
        Ghost
      </Typography>

      <PreviewBox displayedCode={displayedCodes.ghost} className="mb-8">
        <Button variant="ghost">Button component </Button>
      </PreviewBox>

      <Typography className="mb-2" variant="h3">
        Link
      </Typography>

      <PreviewBox displayedCode={displayedCodes.link} className="mb-8">
        <Button variant="link">Button component </Button>
      </PreviewBox>
    </>
  );
};

Page.getLayout = function getLayout(Page: React.ReactElement) {
  return <DocsLayout>{Page}</DocsLayout>;
};

export default Page;
