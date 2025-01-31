import Dropdown from "@/components/ui/dropdown";

const Preview = () => {
  const dropdownItems = [
    { name: "Home", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "About us", href: "#" },
    { name: "Contact", href: "#" },
  ];
  return <Dropdown links={dropdownItems}>Click here</Dropdown>;
};

export default Preview;
