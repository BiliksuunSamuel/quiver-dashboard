import { TableCell, TableCellProps, alpha, useTheme } from "@mui/material";

interface IProps extends TableCellProps {}
export default function CustomTableData({ children, ...others }: IProps) {
  const theme = useTheme();
  return (
    <TableCell
      style={{ color: alpha(theme.palette.common.black, 0.65) }}
      {...others}
    >
      {children}
    </TableCell>
  );
}
