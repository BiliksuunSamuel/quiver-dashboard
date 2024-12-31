import { Grid, Stack, useTheme } from "@mui/material";
import { PrimaryButton, Row, SectionTitleView, Text } from "../../components";
import { ContentContainer } from "../../views";
import { Add } from "iconsax-react";
import {
  CreateNewSavingsPlan,
  SavingsCard,
  SavingsInfoView,
} from "../components";
import { useState } from "react";

export default function SavingsPage() {
  const theme = useTheme();
  const [showInfo, setShowInfo] = useState(false);
  const [showCreateSavingsPlanModal, setShowSavingsPlanModal] = useState(false);
  return (
    <ContentContainer spacing={3}>
      <CreateNewSavingsPlan
        open={showCreateSavingsPlanModal}
        showCloseIcon={false}
        zIndex={10001}
        handleClose={() => setShowSavingsPlanModal(false)}
      />
      <SavingsInfoView open={showInfo} handleClose={() => setShowInfo(false)} />
      <Row justifyContent="space-between">
        <SectionTitleView header="Savings" />
        <PrimaryButton
          style={{ height: "55px", borderRadius: theme.spacing(1) }}
          onClick={() => setShowSavingsPlanModal(true)}
        >
          <Row spacing={1}>
            <Add />
            <Text>Create new savings plan</Text>
          </Row>
        </PrimaryButton>
      </Row>
      <Stack>
        <Grid columnSpacing={2} rowSpacing={2} container>
          {Array.from({ length: 3 }).map((_, index) => (
            <SavingsCard handleShowInfo={() => setShowInfo(true)} key={index} />
          ))}
        </Grid>
      </Stack>

      <SectionTitleView header="Created Plans & Challenges" />
      <Stack>
        <Grid columnSpacing={2} rowSpacing={2} container>
          {Array.from({ length: 4 }).map((_, index) => (
            <SavingsCard handleShowInfo={() => setShowInfo(true)} key={index} />
          ))}
        </Grid>
      </Stack>
    </ContentContainer>
  );
}
