import HomeLayout from "@/layouts/homeLayout";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

const Home = () => {
  return (
    <Container
      className="w-full min-w-[1px] flex flex-col items-center justify-center
     text-center py-12 pb-28">
      <h1
        className="text-3xl text-white md:text-6xl 
        font-extrabold mb-1 z-60 transition-all duration-400 ease-out">
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-foreground to-primary">
          Your Own
        </span>{" "}
        Component Library
      </h1>
      <p className="text-lg md:text-2xl text-foreground-light mb-4 z-10">
        Well-animated tailwindcss components inspired by Shadcn-UI & Material-UI
      </p>

      {/* Button group  */}
      <div className="flex items-center justify-center">
        <Button className="mr-4 w-[180px] md:w-[280px] md:text-xl md:py-3" href="/components">
          View Components
        </Button>
        <Button
          className="w-[180px] md:w-[280px] md:text-xl md:py-3"
          href="/docs/installation"
          variant="outline">
          See Docs
        </Button>
      </div>
    </Container>
  );
};

Home.getLayout = function Layout(Page: React.ReactElement) {
  return <HomeLayout>{Page}</HomeLayout>;
};

export default Home;
