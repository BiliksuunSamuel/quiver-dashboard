import { Stack, StackProps } from "@mui/material";

interface IProps extends StackProps {}
export default function ContentContainer({ children, ...others }: IProps) {
  return (
    <Stack
      style={{
        overflowY: "auto",
        height: "100vh",
      }}
      spacing={2}
      padding={4}
      {...others}
    >
      {children}
    </Stack>
  );
}
