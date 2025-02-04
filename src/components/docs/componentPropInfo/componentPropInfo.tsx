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
                  <span
                    className="peer font-mono text-sm text-foreground/90 bg-secondary/40 border border-ring rounded-md p-1.5
                  overflow-hidden text-ellipsis whitespace-nowrap inline-block max-w-[160px]">
                    {type}
                  </span>
                  {/* TODO: This has terrible UX. 
                  Create a component for it and replace it with this 
                  */}
                  <span
                    className="absolute left-0 bottom-[calc(100%-8px)] bg-background rounded-md
                  font-mono text-sm text-blue-400 border border-blue-400/50 p-2 opacity-0 scale-75
                  peer-hover:opacity-100 peer-hover:scale-100 transition ease-out duration-200 w-max max-w-[90vw]">
                    {type}
                  </span>
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
