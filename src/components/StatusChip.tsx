import { Typography, TypographyProps, alpha, useTheme } from "@mui/material";
import { TransactionStatus } from "../types";
import { getStatusColor } from "../utils";

interface IProps extends TypographyProps {
  status: TransactionStatus;
}
export default function StatusChip({ status, ...others }: IProps) {
  const theme = useTheme();

  return (
    <Typography
      sx={{
        bgcolor: alpha(getStatusColor(status), 0.25),
        borderRadius: theme.spacing(2),
        textAlign: "center",
        color: getStatusColor(status),
        fontSize: "14px",
        padding: theme.spacing(0.45, 0),
        width: "100px",
      }}
      {...others}
    >
      {status}
    </Typography>
  );
}
