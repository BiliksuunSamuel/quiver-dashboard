import { ContentContainer } from "../../views";
import {
  CustomTab,
  CustomTabsView,
  NumberBadgeChip,
  PrimaryButton,
  Row,
  SectionTitleView,
  Text,
} from "../../components";
import { Divider, Stack, useTheme } from "@mui/material";
import { useState } from "react";
import { AgentsDataView, InvitationsDataView } from "../sections";
import { Add } from "iconsax-react";
import { InviteNewTeamMember } from "../components";

export default function AgentsPage() {
  const [activeTab, setActiveTab] = useState("People");
  const theme = useTheme();
  const [showInvitation, setShowInvitation] = useState(false);
  return (
    <ContentContainer>
      <Row
        justifyContent={
          activeTab === "Invitations" ? "space-between" : "flex-start"
        }
      >
        <InviteNewTeamMember
          handleClose={() => setShowInvitation(false)}
          open={showInvitation}
        />
        <SectionTitleView header="Agents" />
        {activeTab === "Invitations" && (
          <PrimaryButton
            style={{ height: "55px", borderRadius: theme.spacing(1) }}
            onClick={() => setShowInvitation(true)}
          >
            <Row spacing={1}>
              <Add />
              <Text>Invite a new team member</Text>
            </Row>
          </PrimaryButton>
        )}
      </Row>
      <Stack>
        <CustomTabsView value={activeTab}>
          {[
            { option: "People", badge: 24 },
            { option: "Invitations", badge: 3 },
          ].map((tab) => (
            <CustomTab
              key={tab.option}
              value={tab.option}
              onClick={() => setActiveTab(tab.option)}
              label={
                <Row spacing={1}>
                  <Text>{tab.option}</Text>
                  <NumberBadgeChip isActive={activeTab === tab.option}>
                    {tab.badge}
                  </NumberBadgeChip>
                </Row>
              }
            />
          ))}
        </CustomTabsView>
        <Divider />
      </Stack>
      {activeTab === "People" && <AgentsDataView />}
      {activeTab === "Invitations" && <InvitationsDataView />}
    </ContentContainer>
  );
}
