import { Button, ButtonProps, alpha } from "@mui/material";

interface IProps extends ButtonProps {}
export default function PrimaryButton({
  disabled = false,
  children,
  ...others
}: IProps) {
  return (
    <Button
      variant="contained"
      size="small"
      sx={(theme) => ({
        color: theme.palette.common.white,
        textTransform: "none",
        height: "40px",
        minWidth: "120px",
        borderRadius: theme.spacing(1),
        backgroundColor: disabled
          ? alpha(theme.palette.primary.main, 0.25)
          : "",
        "&.Mui-disabled": {
          bgcolor: alpha(theme.palette.primary.main, 0.225),
        },
      })}
      disabled={disabled}
      disableElevation
      {...others}
    >
      {children}
    </Button>
  );
}
