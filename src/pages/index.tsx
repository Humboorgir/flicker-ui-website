import HomeLayout from "@/layouts/homeLayout";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

const Home = () => {
  return (
    <Container
      className="w-full min-w-[1px] flex flex-col justify-center py-12 pb-28
    text-center items-center md:text-left md:items-start">
      <div className="waves hidden md:block">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"></path>
          <defs>
            <linearGradient id="WaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="5%" stop-color="#0069d9" />
              <stop offset="95%" stop-color="#0069d984" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <h1
        className="text-4xl leading-[1] sm:text-[40px] text-foreground md:text-6xl mb-6
        font-extrabold max-w-sm md:max-w-xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-foreground to-primary">
          Your Own
        </span>{" "}
        Component Library
      </h1>
      <p className="max-w-sm md:max-w-xl text-lg md:text-xl text-slate-500 mb-8 md:mb-6 z-10">
        Kinda like if MUI and ShadcnUI had a child! Production-ready React
        components made with Tailwindcss and Framer-motion.
      </p>

      {/* Button group  */}
      <div className="flex w-full md:w-fit flex-col md:flex-row items-center justify-center">
        <Button
          className="shrink-0 mb-3 md:mb-0 md:mr-4 w-full max-w-[380px] md:max-w-none md:w-fit md:text-lg md:py-3"
          href="/components">
          View Components
        </Button>
        <Button
          className="w-full max-w-[380px] md:max-w-[280px] md:text-lg md:py-3"
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
