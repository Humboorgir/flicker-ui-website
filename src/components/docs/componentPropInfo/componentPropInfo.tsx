import useComponentCode from "@/hooks/useComponentCode";
import getComponentPropInfo from "@/lib/get-component-prop-info";

type ComponentPropInfoProps = {
  componentName: string;
};

const ComponentPropInfo = ({ componentName }: ComponentPropInfoProps) => {
  if (!componentName) throw new Error("Component name was not provided");
  const { code } = useComponentCode(componentName, "ui");
  if (!code) return null;

  const props = getComponentPropInfo(code);

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
                <td className="w-[15%] p-4">
                  <span className="lowercase text-sm text-foreground/90 bg-secondary/40 border border-ring rounded-md p-1.5">
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
