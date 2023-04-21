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
        <FilterOption disabled selected>
          {data.title}
        </FilterOption>
      )}

      {data.options.map((options: any, index: any) => {
        return (
          <FilterOption key={index}>
            <Typography
              classType={`text-${options.code}`}
              type="product-filter-black"
              text={options.name}
            />
          </FilterOption>
        );
      })}
    </FilterSelect>
  );
};
