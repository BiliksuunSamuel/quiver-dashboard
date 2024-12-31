import { Typography, TypographyProps } from "@mui/material";

interface IProps extends TypographyProps {}
export default function AccountRoleChip({ children, ...others }: IProps) {
  return (
    <Typography
      sx={(theme) => ({
        bgcolor: "#D7EACF",
        borderRadius: theme.spacing(5),
        minWidth: "20px",
        height: "15px",
        fontSize: theme.spacing(1.25),
        padding: theme.spacing(0.5, 1),
        fontFamily: "Poppins",
        fontWeight: 400,
        color: "#0E3641",
      })}
      {...others}
    >
      {children}
    </Typography>
  );
}
