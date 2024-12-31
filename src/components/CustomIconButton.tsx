import {
  IconButton,
  IconButtonProps,
  Stack,
  SvgIconTypeMap,
  alpha,
  useTheme,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { IconType } from "react-icons";
import { MdClose } from "react-icons/md";
import { Text } from ".";
import { Icon } from "iconsax-react";
import { ErrorShades } from "../theme/AppColors";

interface IProps extends IconButtonProps {
  Icon?: IconType | OverridableComponent<SvgIconTypeMap<{}, "svg">> | Icon;
  textColor?: string;
  text?: string;
  bgColor?: string;
  foreground?: string;
}
export default function CustomIconButton({
  textColor,
  text,
  foreground,
  Icon,
  bgColor = ErrorShades[500],
  ...others
}: IProps) {
  const theme = useTheme();
  return (
    <IconButton
      sx={{
        borderRadius: 0,
        "&:hover": {
          bgcolor: "transparent",
        },
      }}
      {...others}
    >
      <Stack
        width="35px"
        height="35px"
        borderRadius="35px"
        alignItems="center"
        justifyContent="center"
        marginRight={1}
        bgcolor={bgColor ?? alpha(bgColor, 0.085)}
        sx={{ color: foreground ?? "inherit" }}
      >
        {Icon ? <Icon /> : <MdClose />}
      </Stack>
      <Text color={textColor ?? theme.palette.error.main}>
        {text ?? "Clear filter"}
      </Text>
    </IconButton>
  );
}
