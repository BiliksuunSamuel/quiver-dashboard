import { useState } from "react";
import { CustomTab, CustomTabsView, SectionTitleView } from "../../components";
import { ContentContainer } from "../../views";
import { Divider, Stack } from "@mui/material";
import {
  AccountSecuritySection,
  PersonalAccountSettingsSection,
} from "../sections";

export default function AccountSettingsPage() {
  const [activeTab, setActiveTab] = useState("Personal Settings");
  return (
    <ContentContainer spacing={3}>
      <SectionTitleView header="Settings" />
      <Stack>
        <CustomTabsView value={activeTab}>
          {["Personal Settings", "Account Security"].map((tab) => (
            <CustomTab
              onClick={() => setActiveTab(tab)}
              key={tab}
              value={tab}
              label={tab}
            />
          ))}
        </CustomTabsView>
        <Divider />
      </Stack>
      {activeTab === "Personal Settings" && <PersonalAccountSettingsSection />}
      {activeTab === "Account Security" && <AccountSecuritySection />}
    </ContentContainer>
  );
}
