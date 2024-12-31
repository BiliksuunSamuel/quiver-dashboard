import { Tabs, TabsProps } from "@mui/material";

interface IProps extends TabsProps {}
export default function CustomTabsView({ children, ...others }: IProps) {
  return (
    <Tabs
      textColor="inherit"
      TabIndicatorProps={{ style: { height: "4px" } }}
      scrollButtons="auto"
      variant="scrollable"
      {...others}
    >
      {children}
    </Tabs>
  );
}
