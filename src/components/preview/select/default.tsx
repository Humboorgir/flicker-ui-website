import Select from "@/components/ui/select";

const Preview = () => {
  const options = [
    {
      name: `Light theme`,
      value: "light",
    },
    {
      name: "Dark theme",
      value: "dark",
    },
    {
      name: "Use system",
      value: "system",
    },
  ];
  return (
    <Select
      variant="outline"
      options={options}
      onChange={(option) => {
        // Open the console to see this for yourself!
        console.log(option);
      }}>
      Theme
    </Select>
  );
};

export default Preview;
