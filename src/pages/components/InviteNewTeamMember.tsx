import { IconButton, Stack, alpha, useTheme } from "@mui/material";
import {
  Column,
  CustomDialog,
  CustomInput,
  PrimaryButton,
  Row,
  SectionTitleView,
  SizedBox,
  Text,
} from "../../components";
import { IModalProps } from "../../interface";
import { Minus } from "iconsax-react";
import CustomSelect from "../../components/CustomSelect";

interface IProps extends IModalProps {
  handleClose?: () => void;
}
export default function InviteNewTeamMember({
  handleClose,
  ...others
}: IProps) {
  const theme = useTheme();
  return (
    <CustomDialog
      sx={(theme) => ({
        borderRadius: theme.spacing(0),
        ".MuiDialog-scrollPaper": {
          bgcolor: theme.palette.common.white,
          padding: theme.spacing(0),
          justifyContent: "center",
          alignItems: "center",
        },
        ".MuiPaper-root": {
          borderRadius: theme.spacing(0.5),
          backgroundColor: theme.palette.background.paper,
        },
        justifyContent: "center",
        alignItems: "center",
      })}
      fullScreen
      header="New Plan"
      subHeading="Create a new savings plan"
      maxWidth="lg"
      {...others}
    >
      <Stack height="100%" padding={theme.spacing(4)}>
        <Row justifyContent="space-between">
          <SectionTitleView>
            <Column>
              <Text>Invite new team member</Text>
              <Text color={alpha(theme.palette.common.black, 0.65)}>
                Send an invitation to your new team member
              </Text>
            </Column>
          </SectionTitleView>
          <IconButton onClick={handleClose}>
            <Minus />
          </IconButton>
        </Row>
        <Stack padding={2} spacing={3} width="70%" alignSelf="center">
          <SizedBox height={3} />
          <Row spacing={2}>
            <CustomInput
              label="First name"
              style={{
                height: "60px",
                borderRadius: theme.spacing(0.5),
              }}
            />
            <CustomInput
              label="Last name"
              style={{
                height: "60px",
                borderRadius: theme.spacing(0.5),
              }}
            />
          </Row>
          <CustomInput
            label="Email address"
            style={{
              height: "60px",
              borderRadius: theme.spacing(0.5),
            }}
          />
          <CustomSelect
            style={{
              height: "60px",
              borderRadius: theme.spacing(0.5),
            }}
            variant="outlined"
            label="Assign role"
          />

          <SizedBox height={1} />
          <Stack>
            <Row justifyContent="flex-start">
              <PrimaryButton
                disabled
                style={{ height: "60px", width: "200px" }}
              >
                Send Invitation
              </PrimaryButton>
            </Row>
          </Stack>
        </Stack>
      </Stack>
    </CustomDialog>
  );
}
