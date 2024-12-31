import { Stack, StackProps, alpha, useTheme } from "@mui/material";

interface IProps extends StackProps {
  isActive?: boolean;
}

export default function NumberBadgeChip({
  children,
  isActive,
  ...others
}: IProps) {
  const theme = useTheme();
  return (
    <Stack
      width="30px"
      height="30px"
      borderRadius={theme.spacing(1)}
      bgcolor={
        isActive
          ? theme.palette.primary.main
          : alpha(theme.palette.common.black, 0.15)
      }
      color={
        isActive
          ? theme.palette.common.white
          : alpha(theme.palette.common.black, 1)
      }
      alignItems="center"
      justifyContent="center"
      fontSize={theme.spacing(1.5)}
      {...others}
    >
      {children}
    </Stack>
  );
}
