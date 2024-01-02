import Button from "@/components/ui/button";
import Row from "@/components/ui/row";

const Navbar = () => {
  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Discord",
      href: "/",
    },
    {
      title: "Components",
      href: "/",
    },
    {
      title: "Docs",
      href: "/",
    },
  ];
  return (
    <Row items="center" className="py-2 px-4 md:px-12 fixed bg-background w-full z-20 border-b border-b-ring">
      <span className="font-bold text-xl mr-auto bg-gradient-to-br from-primary to-foreground/50 text-transparent bg-clip-text">
        Flicker UI
      </span>
      {links.map((link) => {
        return (
          <Button variant="link" href={link.href} className="text-foreground decoration-foreground">
            {link.title}
          </Button>
        );
      })}
    </Row>
  );
};

export default Navbar;
