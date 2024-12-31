import { Stack, StackProps } from "@mui/material";
import resources from "../resources";

interface IProps extends StackProps {
  variant?: "primary" | "light";
}
export default function LogoView({ variant = "light", ...others }: IProps) {
  return (
    <Stack height="50px" width="60px" overflow="hidden" {...others}>
      <img
        src={variant === "primary" ? resources.logo : resources.logoAlt}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        alt="quiver-finance-logo"
      />
    </Stack>
  );
}
