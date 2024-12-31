import { Backdrop, BackdropProps, useTheme } from "@mui/material";

interface IProps extends BackdropProps {}
export default function CustomBackDrop({ children, ...others }: IProps) {
  const theme = useTheme();
  return (
    <Backdrop
      sx={{
        zIndex: theme.zIndex.drawer + 1,
        overflow: "hidden",
        height: "100vh",
        width: "100vw",
      }}
      {...others}
    >
      {children}
    </Backdrop>
  );
}
