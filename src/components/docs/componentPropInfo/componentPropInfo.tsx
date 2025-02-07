import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import getComponentPropInfo from "@/lib/get-component-prop-info";

type ComponentPropInfoProps = {
  componentCode?: string;
};

const ComponentPropInfo = ({ componentCode }: ComponentPropInfoProps) => {
  if (!componentCode) return null;

  const props = getComponentPropInfo(componentCode);

  if (!props.length) return null;
  return (
    <div className="overflow-x-auto w-[1px] min-w-full mb-12">
      <table className="border border-ring border-separate rounded-md">
        <thead>
          <tr>
            <th className="w-[25%] p-4 text-left">Name</th>
            <th className="w-[35%] min-w-[160px] p-4 text-left">Description</th>
            <th className="w-[15%] p-4 text-left">Type</th>
            <th className="w-[25%] p-4 text-left">Required?</th>
          </tr>
        </thead>
        <tbody>
          {props.map(({ prop, description, type, required }) => {
            return (
              <tr>
                <td className="w-[25%] p-4">{prop}</td>
                <td className="w-[35%] min-w-[160px] text-sm md:text-base p-4">{description}</td>
                <td className="relative w-[15%] p-4">
                  <Tooltip>
                    <TooltipTrigger
                      className="font-mono text-sm border border-ring rounded-md p-1.5
                  overflow-hidden text-ellipsis whitespace-nowrap inline-block max-w-[160px]">
                      {type}
                    </TooltipTrigger>
                    <TooltipContent className="font-mono">{type}</TooltipContent>
                  </Tooltip>
                </td>
                <td className="w-[25%] p-4">{required ? "Yes" : "-"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ComponentPropInfo;
