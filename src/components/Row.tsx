import { Stack, StackProps } from "@mui/material";

interface IProps extends StackProps {}
export default function Row({ children, ...others }: IProps) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      {...others}
    >
      {children}
    </Stack>
  );
}
