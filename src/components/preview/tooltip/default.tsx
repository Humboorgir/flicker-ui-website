import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const Preview = () => {
  return (
    <Tooltip>
      <TooltipTrigger>Hover over this</TooltipTrigger>
      <TooltipContent>Thank you</TooltipContent>
    </Tooltip>
  );
};

export default Preview;
