import { Stack } from "@mui/material";
import { FluidContainer } from "../../views";
import { NavbarView, SidebarView } from "../../shared";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ProfileMenuView } from "../MenuViews";
import { SendFlashMessage } from "../components";

export default function HomePage() {
  const [profileMenu, setProfileMenu] = useState<HTMLElement | null>(null);
  const [sendFlashMessage, setSendFlashMessage] = useState(false);

  return (
    <FluidContainer>
      <SendFlashMessage
        open={sendFlashMessage}
        handleClose={() => setSendFlashMessage(false)}
      />
      <Stack height="100%">
        <ProfileMenuView
          anchorEl={profileMenu}
          onClose={() => setProfileMenu(null)}
          open={Boolean(profileMenu)}
          handleClose={() => setProfileMenu(null)}
        />
        <SidebarView
          handleSendFlashMessageButton={() => setSendFlashMessage(true)}
          open
        />
        <Stack height="100%" paddingLeft="250px">
          <NavbarView
            handleProfileMenu={(e) => setProfileMenu(e.currentTarget)}
            profileMenu={profileMenu}
          />
          <Outlet />
        </Stack>
      </Stack>
    </FluidContainer>
  );
}
