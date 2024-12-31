import { Stack, StackProps } from "@mui/material";
import { Text } from ".";

interface IProps extends StackProps {
  header?: string;
}
export default function SectionTitleView({
  children,
  header,
  title,
  ...others
}: IProps) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="flex-start"
      {...others}
    >
      {children ? (
        children
      ) : (
        <Text variant="body1" fontSize={(theme) => theme.spacing(2.65)}>
          {header}
        </Text>
      )}
    </Stack>
  );
}
