import { Text } from ".";
import { TypographyProps } from "@mui/material";

interface IProps extends TypographyProps<"label"> {}
export default function SidebarSectionTitle({ children, ...others }: IProps) {
  return (
    <Text
      style={{
        fontFamily: "poppins",
        fontSize: "12px",
        color: "#828282",
      }}
      {...others}
    >
      {children}
    </Text>
  );
}
