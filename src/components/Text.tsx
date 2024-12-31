import { Typography, TypographyProps } from "@mui/material";

interface IProps extends TypographyProps<"label"> {}
export default function Text({ children, ...others }: IProps) {
  return (
    <Typography variant="body1" {...others}>
      {children}
    </Typography>
  );
}
