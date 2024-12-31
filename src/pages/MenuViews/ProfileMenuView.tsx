import { MenuProps, alpha } from "@mui/material";
import { MenuItemView, MenuView, Row, Text } from "../../components";
import { Lock, Logout, Setting2 } from "iconsax-react";
import { useNavigate } from "react-router-dom";

interface IProps extends MenuProps {
  handleClose: () => void;
}
export default function ProfileMenuView({ handleClose, ...others }: IProps) {
  const navigation = useNavigate();
  return (
    <MenuView
      sx={(theme) => ({
        ".MuiPaper-root": {
          borderRadius: theme.spacing(1),
          padding: theme.spacing(4),
          width: "300px",
          marginTop: theme.spacing(3),
          boxShadow: `${alpha(theme.palette.action.hover, 0.065)} 0 0 0 0.2rem`,
        },
        ".MuiList-root": {
          padding: 0,
          border: `1px solid ${(theme.palette.common.black, 0.5)}`,
        },
      })}
      {...others}
    >
      <MenuItemView
        sx={(theme) => ({
          "&.MuiMenuItem-root": {
            padding: theme.spacing(1),
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
          marginBottom: theme.spacing(1),
        })}
        onClick={() => {
          handleClose();
          navigation("/dashboard/account-settings");
        }}
      >
        <Row spacing={2.5}>
          <Setting2 />
          <Text>Settings</Text>
        </Row>
      </MenuItemView>
      <MenuItemView
        sx={(theme) => ({
          "&.MuiMenuItem-root": {
            padding: theme.spacing(1),
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
          marginBottom: theme.spacing(1),
        })}
      >
        <Row spacing={2.5}>
          <Lock />
          <Text>Account Security</Text>
        </Row>
      </MenuItemView>
      <MenuItemView
        sx={(theme) => ({
          "&.MuiMenuItem-root": {
            color: theme.palette.error.main,
            padding: theme.spacing(1),
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
        })}
      >
        <Row spacing={2.5}>
          <Logout />
          <Text>Logout</Text>
        </Row>
      </MenuItemView>
    </MenuView>
  );
}
