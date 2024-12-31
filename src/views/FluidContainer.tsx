import { Stack, StackProps } from "@mui/material";

interface IProps extends StackProps {}

export default function FluidContainer({ children, ...others }: IProps) {
  return (
    <Stack {...others} height="100vh">
      {children}
    </Stack>
  );
}
