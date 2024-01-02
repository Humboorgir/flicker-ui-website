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
    <Row items="center" justify="center" className="py-2">
      {links.map((link, i) => {
        return (
          <Button
            key={i}
            variant="link"
            size="lg"
            href={link.href}
            className="text-lg text-foreground decoration-foreground">
            {link.title}
          </Button>
        );
      })}
    </Row>
  );
};

export default Navbar;
