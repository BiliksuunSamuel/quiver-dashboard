import {
  Divider,
  Drawer,
  DrawerProps,
  IconButton,
  Stack,
  alpha,
  useTheme,
} from "@mui/material";
import {
  AccountRoleChip,
  Column,
  Row,
  SidebarActionButton,
  SidebarSectionTitle,
  SizedBox,
  Text,
} from "../components";
import { LogoView } from ".";
import { MdOutlineUnfoldMore } from "react-icons/md";
import SidebarRoutes from "../routes/SidebarRoutes";
import { MessageText } from "iconsax-react";
import { useLocation } from "react-router-dom";
import { MouseEvent } from "react";
interface IProps extends DrawerProps {
  handleSendFlashMessageButton?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function SidebarView({
  handleSendFlashMessageButton,
  ...others
}: IProps) {
  const theme = useTheme();
  const location = useLocation();

  return (
    <Drawer variant="persistent" sx={{ zindex: -1 }} {...others}>
      <Stack
        sx={{
          borderRight: `1px solid ${alpha(theme.palette.info.dark, 0.25)}`,
          height: "100vh",
          width: "250px",
          overflow: "hidden",
        }}
        spacing={1}
      >
        <Stack height="40px" paddingX={0.25} paddingY={0.5}>
          <Row justifyContent="space-evenly" paddingX={0} width="100%">
            <LogoView variant="light" />
            <AccountRoleChip>Super admin</AccountRoleChip>
            <IconButton size="small">
              <MdOutlineUnfoldMore />
            </IconButton>
          </Row>
        </Stack>
        <SizedBox height={0.004} />
        <Divider />
        <Stack
          style={{
            overflowY: "auto",
            height: "100vh",
          }}
          spacing={2}
          paddingY={1}
          paddingX={2}
        >
          {SidebarRoutes().map((routeInfo, index) => (
            <>
              <Stack spacing={0.5}>
                <SidebarSectionTitle>{routeInfo.header}</SidebarSectionTitle>
                {routeInfo.routes.map((cate) => (
                  <SidebarActionButton
                    isActive={location.pathname === cate.route}
                    key={cate.title}
                    info={cate}
                  />
                ))}
              </Stack>
              {index + 1 !== SidebarRoutes().length}
            </>
          ))}
        </Stack>
        <IconButton
          sx={{
            padding: theme.spacing(0, 2),
            borderRadius: 0,
            width: "100%",
            "&:hover": {
              bgcolor: "transparent",
            },
            bgcolor: "transparent",
          }}
          onClick={handleSendFlashMessageButton}
        >
          <Stack
            style={{ backgroundColor: theme.palette.primary.main }}
            height="50px"
            borderRadius={theme.spacing(1, 1, 0, 0)}
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            padding={theme.spacing(0, 2)}
            spacing={1}
          >
            <Stack
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "30px",
                backgroundColor: theme.palette.primary.dark,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MessageText size="18" color={theme.palette.common.white} />
            </Stack>
            <Column flex={1}>
              <Text
                textAlign="left"
                color={alpha(theme.palette.common.white, 0.8)}
              >
                Send Message
              </Text>
              <Text
                color={alpha(theme.palette.common.white, 0.85)}
                fontSize={theme.spacing(1.2)}
              >
                Send flash message to all users
              </Text>
            </Column>
          </Stack>
        </IconButton>
      </Stack>
    </Drawer>
  );
}
