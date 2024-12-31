import { Stack, StackProps } from "@mui/material";

interface IProps extends StackProps {}
export default function SizedBox({ ...others }: IProps) {
  return <Stack {...others} />;
}
