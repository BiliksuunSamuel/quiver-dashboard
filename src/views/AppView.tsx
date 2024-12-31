import { Stack, StackProps } from "@mui/material";

interface IProps extends StackProps {}
export default function AppView({ children, ...others }: IProps) {
  return (
    <Stack
      height="100vh"
      padding={0}
      margin={0}
      bgcolor={(theme) =>
        theme.palette.mode === "light"
          ? theme.palette.common.white
          : theme.palette.common.black
      }
      {...others}
    >
      {children}
    </Stack>
  );
}
