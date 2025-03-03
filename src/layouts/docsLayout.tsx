import { docsPages } from "@/config/docs";
import { useRouter } from "next/router";

import Container from "@/components/ui/container";
import Navbar from "@/components/docs/navbar";
import Sidebar from "@/components/docs/sidebar";
import TableOfContent from "@/components/docs/tableOfContent";
import Footer from "@/components/ui/footer";

import Head from "next/head";
import Row from "@/components/ui/row";
import Typography from "@/components/ui/typography";
import Button from "@/components/ui/button";
import PreviewBox from "@/components/docs/previewBox";

import { FaArrowLeftLong as ArrowBack, FaArrowRight as ArrowForward } from "react-icons/fa6";
import { IoIosArrowForward as Arrow } from "react-icons/io";
import Column from "@/components/ui/column";
import ComponentPropInfo from "@/components/docs/componentPropInfo/componentPropInfo";

type DocsLayoutProps = {
  children: React.ReactNode;
  tableOfContent?: any;
  componentCode?: string;
  meta: {
    title: string;
    description: string;
    preview?: string;
    componentName?: string;
  };
};
const DocsLayout = ({ children, componentCode, tableOfContent, meta }: DocsLayoutProps) => {
  const router = useRouter();

  const allPages = docsPages.map((category) => category.items).flat();
  const currentPageIndex = allPages.findIndex((page) => page.href == router.pathname);
  const prevPage = allPages[currentPageIndex - 1] ? allPages[currentPageIndex - 1] : null;
  const nextPage = allPages[currentPageIndex + 1] ? allPages[currentPageIndex + 1] : null;

  const metaTitle = `${meta.title} ~ Flicker UI`;
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <div className="grid grid-rows-[auto,1fr,auto] min-h-screen bg-background">
        <Navbar />
        <Container className="flex w-full max-w-[90rem] px-0 md:px-0">
          <Sidebar />
          {/* Main page content  */}
          <div className="py-8 px-6 md:px-12 mr-auto min-h-screen w-full">
            <Row className="mb-4 text-sm">
              <span className="flex items-center text-foreground-muted mr-2">
                Docs <Arrow className="h-3.5 w-3.5 ml-2" />
              </span>
              <span className="font-medium text-foreground">{meta.title}</span>
            </Row>
            <Typography className="mb-4 md:text-4xl" variant="h2">
              {meta.title}
            </Typography>
            <Typography variant="lead">{meta.description}</Typography>

            {meta.preview ? <PreviewBox className="mt-4 mb-16" component={meta.preview} /> : <br />}
            {meta.componentName && <ComponentPropInfo componentCode={componentCode} />}
            {children}

            <div className="mt-12 sm:mt-32 space-y-5 sm:space-y-0 flex flex-col items-center sm:items-stretch sm:flex-row">
              {prevPage && (
                <Column className="sm:mr-auto w-full sm:w-auto" items="start">
                  <Typography className="ml-1.5" variant="lead">
                    Previous
                  </Typography>
                  <Button
                    href={prevPage.href}
                    size="lg"
                    className="flex w-full sm:w-auto text-base items-center
                     bg-gray-300/20 dark:bg-gray-400/10 border border-neutral-300/80 dark:border-neutral-800 mr-auto"
                    variant="outline">
                    <ArrowBack className="w-4 h-4 mr-2" />
                    {prevPage.label}
                  </Button>
                </Column>
              )}
              {nextPage && (
                <Column className="sm:ml-auto w-full sm:w-auto" items="start">
                  <Typography className="ml-1.5" variant="lead">
                    Next
                  </Typography>
                  <Button
                    href={nextPage.href}
                    size="lg"
                    className="flex w-full sm:w-auto text-base items-center
                     bg-gray-300/20 dark:bg-gray-400/10 border border-neutral-300/80 dark:border-neutral-800"
                    variant="outline">
                    {nextPage.label}
                    <ArrowForward className="w-4 h-4 ml-2" />
                  </Button>
                </Column>
              )}
            </div>
          </div>

          <TableOfContent tableOfContent={tableOfContent} />
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default DocsLayout;
