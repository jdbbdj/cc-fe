import { FilterSelect, FilterOption } from "./styled";
import Typography from "../Typography";

type Props = {
  data: any;
  type: any;
};

export const ReusableSelect = ({ data, type }: Props) => {
  return (
    <FilterSelect>
      {type !== "default" && (
        <FilterOption disabled defaultValue={data.title}>
          {data.title}
        </FilterOption>
      )}

      {data.options.map((options: any, index: any) => {
        return <FilterOption key={index}>{options.name}</FilterOption>;
      })}
    </FilterSelect>
  );
};
