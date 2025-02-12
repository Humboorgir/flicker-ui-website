import HomeLayout from "@/layouts/homeLayout";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

const Home = () => {
  return (
    <Container
      className="w-full min-w-[1px] flex flex-col justify-center py-12 pb-28
    text-center items-center md:text-left md:items-start">
      <h1
        className="text-4xl leading-[1] sm:text-[40px] text-foreground md:text-6xl mb-6
        font-black max-w-sm md:max-w-xl">
        <span>Your Own</span> Component Library
      </h1>
      <p className="max-w-sm md:max-w-xl text-lg md:text-xl text-slate-500 mb-8 md:mb-6 z-10">
        Kinda like if MUI and ShadcnUI had a child! Production-ready React
        components made with Tailwindcss and Framer-motion.
      </p>

      {/* Button group  */}
      <div className="flex w-full md:w-fit flex-col md:flex-row items-center justify-center">
        <Button
          className="shrink-0 mb-3 md:mb-0 md:mr-4 w-full max-w-[380px] md:max-w-none md:w-fit"
          size="lg"
          href="/docs/components/overview">
          View Components
        </Button>
        <Button
          className="w-full max-w-[380px] md:max-w-[280px]"
          size="lg"
          href="/docs/installation"
          variant="outline">
          Documentation
        </Button>
      </div>
    </Container>
  );
};

Home.getLayout = function Layout(Page: React.ReactElement) {
  return <HomeLayout>{Page}</HomeLayout>;
};

export default Home;
