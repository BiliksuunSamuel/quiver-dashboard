import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Stack,
} from "@mui/material";
import {
  NumberBadgeChip,
  Row,
  SectionTitleView,
  SizedBox,
  Text,
} from "../../components";
import { ContentContainer } from "../../views";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import { useState } from "react";
import { ActivityUsersDataView } from "../components";

export default function ActivitiesPage() {
  const [expandOnlineSection, setExpandOnlineSection] = useState(false);
  const [expandOfflineSection, setExpandOfflineSection] = useState(false);
  return (
    <ContentContainer>
      <SectionTitleView header="Activities" />
      <SizedBox height={6} />

      <Accordion
        onChange={(_, s) => {
          setExpandOnlineSection(s);
        }}
        variant="outlined"
        sx={{
          borderStyle: "none",
          "&:before": {
            display: "none",
          },
        }}
      >
        <AccordionSummary>
          <Stack width="100%">
            <Row spacing={1.5} justifyContent="flex-start">
              <Text>Online</Text>
              <NumberBadgeChip isActive={expandOnlineSection}>
                24
              </NumberBadgeChip>
              {expandOnlineSection ? <ArrowUp2 /> : <ArrowDown2 />}
              <Stack flex={1}>
                <Divider />
              </Stack>
            </Row>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <ActivityUsersDataView />
        </AccordionDetails>
      </Accordion>

      <Accordion
        onChange={(_, s) => {
          setExpandOfflineSection(s);
        }}
        variant="outlined"
        sx={{
          borderStyle: "none",
          "&:before": {
            display: "none",
          },
        }}
      >
        <AccordionSummary>
          <Stack width="100%">
            <Row spacing={1.5} justifyContent="flex-start">
              <Text>Offline</Text>
              <NumberBadgeChip isActive={expandOfflineSection}>
                24
              </NumberBadgeChip>
              {expandOfflineSection ? <ArrowUp2 /> : <ArrowDown2 />}
              <Stack flex={1}>
                <Divider />
              </Stack>
            </Row>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <ActivityUsersDataView status="Offline" />
        </AccordionDetails>
      </Accordion>
    </ContentContainer>
  );
}
