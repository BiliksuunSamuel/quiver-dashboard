import { IconButton, Stack, alpha, useTheme } from "@mui/material";
import {
  Column,
  CustomComboBox,
  CustomDialog,
  CustomIconButton,
  CustomInput,
  PrimaryButton,
  Row,
  SectionTitleView,
  SizedBox,
  Text,
} from "../../components";
import { IModalProps } from "../../interface";
import { Minus } from "iconsax-react";
import { PrimaryShades } from "../../theme/AppColors";
import { RiTimerLine } from "react-icons/ri";

interface IProps extends IModalProps {
  handleClose?: () => void;
}
export default function SendFlashMessage({ handleClose, ...others }: IProps) {
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
              <Text fontWeight="bold" fontSize={theme.spacing(2.25)}>
                Send a message
              </Text>
              <Text color={alpha(theme.palette.common.black, 0.65)}>
                Send flash message to all users
              </Text>
            </Column>
          </SectionTitleView>
          <IconButton onClick={handleClose}>
            <Minus />
          </IconButton>
        </Row>
        <Stack padding={2} spacing={3} width="70%" alignSelf="center">
          <SizedBox height={3} />
          <CustomComboBox label="Users" placeholder="Search member" />
          <CustomInput
            label="Compose message"
            style={{
              borderRadius: theme.spacing(1.5),
              backgroundColor: alpha(theme.palette.common.black, 0.025),
              padding: theme.spacing(2),
            }}
            multiline
            minRows={10}
          />

          <SizedBox height={1} />
          <Stack>
            <Row spacing={2} justifyContent="flex-start">
              <PrimaryButton
                disabled
                style={{ height: "60px", width: "240px" }}
              >
                Send message now
              </PrimaryButton>
              <CustomIconButton
                foreground={PrimaryShades[500]}
                Icon={RiTimerLine}
                text="Schedule for later"
                textColor={PrimaryShades[500]}
                bgColor={""}
              />
            </Row>
          </Stack>
        </Stack>
      </Stack>
    </CustomDialog>
  );
}
