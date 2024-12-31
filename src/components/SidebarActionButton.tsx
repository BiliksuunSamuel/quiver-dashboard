import {
  IconButton,
  IconButtonProps,
  Stack,
  alpha,
  useTheme,
} from "@mui/material";
import { Flex, PriorityIcon, SizedBox, Text } from ".";

import { ISidebarRouteItem } from "../interface";
import { useNavigate } from "react-router-dom";

interface IProps extends IconButtonProps {
  isActive?: boolean;
  info: ISidebarRouteItem;
}
export default function SidebarActionButton({
  isActive = false,
  info,
  ...others
}: IProps) {
  const theme = useTheme();
  const navigation = useNavigate();
  return (
    <IconButton
      sx={{
        width: "100%",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        borderRadius: 1,
        bgcolor: isActive ? alpha(theme.palette.common.black, 0.05) : "",
        padding: theme.spacing(1.25, 1.5),
        color: "#333333",
        "&:hover": {
          backgroundColor: isActive
            ? alpha(theme.palette.common.black, 0.05)
            : "transparent",
        },
      }}
      onClick={() => navigation(info.route ? info.route : "")}
      {...others}
    >
      {info.priority && <PriorityIcon variant={info.priority} />}
      {!info.priority && info.Icon && info.Icon}
      <SizedBox marginX={1} />
      <Text variant="body2">{info.title}</Text>
      {info.badgeCount && (
        <>
          <Flex />
          <Stack
            width="30px"
            height="30px"
            borderRadius={2}
            bgcolor={alpha(theme.palette.common.black, 0.085)}
            alignItems="center"
            justifyContent="center"
            fontSize={theme.spacing(1.5)}
            color="#0E3641"
          >
            {info.badgeCount}
          </Stack>
        </>
      )}
    </IconButton>
  );
}
