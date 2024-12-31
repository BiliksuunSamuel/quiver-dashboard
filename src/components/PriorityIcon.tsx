import { Stack, StackProps } from "@mui/material";
import { PriorityTypes } from "../types";
import { getPriorityColor } from "../utils";

interface IProps extends StackProps {
  variant: PriorityTypes;
}
export default function PriorityIcon({ variant, ...others }: IProps) {
  return (
    <Stack
      width="14px"
      height="14px"
      bgcolor={getPriorityColor(variant)}
      borderRadius="14px"
      {...others}
    />
  );
}
