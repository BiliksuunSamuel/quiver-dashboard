import { IconButton, Stack, StackProps, alpha, useTheme } from "@mui/material";
import { Column, Row, SearchInput, Text } from "../components";
import { ArrowDown2, ArrowUp2, Notification } from "iconsax-react";
import { MouseEvent } from "react";

interface IProps extends StackProps {
  handleProfileMenu?: (e: MouseEvent<HTMLButtonElement>) => void;
  profileMenu: HTMLElement | null;
}
export default function NavbarView({
  handleProfileMenu,
  profileMenu,
  ...others
}: IProps) {
  const theme = useTheme();
  return (
    <Stack
      borderBottom={`1px solid ${alpha(theme.palette.common.black, 0.085)}`}
      height="35px"
      //   bgcolor="red"
      padding={theme.spacing(2, 4)}
      {...others}
    >
      <Row justifyContent="space-between">
        <SearchInput />
        <Stack alignItems="center" spacing={1} direction="row">
          <Notification color={alpha(theme.palette.common.black, 0.5)} />
          <Stack
            borderRight={`1px solid ${alpha(theme.palette.common.black, 0.35)}`}
            width="0px"
            height="40px"
          />
          <Row minWidth="300px" spacing={2.5}>
            <Stack
              width="35px"
              height="35px"
              borderRadius="35px"
              bgcolor={alpha(theme.palette.common.black, 0.085)}
            ></Stack>
            <Column>
              <Row>
                <Text>Omololu Bimisile</Text>
                <IconButton
                  style={{ width: "30px", height: "30px", marginLeft: "40px" }}
                  size="small"
                  onClick={handleProfileMenu}
                >
                  {profileMenu ? <ArrowUp2 /> : <ArrowDown2 />}
                </IconButton>
              </Row>
              <Text
                fontSize="12px"
                color={alpha(theme.palette.common.black, 0.5)}
                style={{ marginTop: -3 }}
              >
                lolu@quiverfinance.com
              </Text>
            </Column>
          </Row>
        </Stack>
      </Row>
    </Stack>
  );
}
