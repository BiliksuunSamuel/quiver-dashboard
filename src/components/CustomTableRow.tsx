import { TableRow, TableRowProps } from "@mui/material";

interface IProps extends TableRowProps {}
export default function CustomTableRow({ children, ...others }: IProps) {
  return <TableRow {...others}>{children}</TableRow>;
}
