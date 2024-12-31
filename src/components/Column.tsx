import { Stack, StackProps } from "@mui/material";

interface IProps extends StackProps {}
export default function Column({ children, ...others }: IProps) {
  return (
    <Stack spacing={0.25} {...others}>
      {children}
    </Stack>
  );
}
