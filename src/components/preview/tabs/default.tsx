import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// This is a styled version, make a raw version too
const Preview = () => {
  return (
    <Tabs openByDefault="one">
      <TabsList>
        <TabsTrigger value="one">Tab One</TabsTrigger>
        <TabsTrigger value="two">Tab Two</TabsTrigger>
      </TabsList>

      <TabsContent value="one">Hey, this is tab one! Click on 'Tab Two' to open the second tab.</TabsContent>
      <TabsContent value="two">
        You can put anything here. That includes text, React components, etc.
      </TabsContent>
    </Tabs>
  );
};

export default Preview;
