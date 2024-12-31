import {
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  Stack,
  alpha,
  useTheme,
} from "@mui/material";
import {
  Column,
  CustomDatePicker,
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
export default function CreateNewSavingsPlan({
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
              <Text>New Plan</Text>
              <Text color={alpha(theme.palette.common.black, 0.65)}>
                Create a new savings plan
              </Text>
            </Column>
          </SectionTitleView>
          <IconButton onClick={handleClose}>
            <Minus />
          </IconButton>
        </Row>
        <Stack padding={2} spacing={3} width="70%" alignSelf="center">
          <SizedBox height={3} />
          <CustomInput
            label="Give plan a name"
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
            label="Select cryptocurrency"
          />
          <CustomInput
            label="Amount"
            style={{
              height: "60px",
              borderRadius: theme.spacing(0.5),
            }}
            endAdornment={<InputAdornment position="end">BTC</InputAdornment>}
            type="number"
            placeholder="0.00"
          />
          <Stack spacing={1} alignItems="flex-start">
            <Text>Frequency</Text>
            <RadioGroup>
              {["Daily", "Weekly", "Monthly"].map((freq) => (
                <Row justifyContent="flex-start" spacing={1}>
                  <Radio size="medium" key={freq} value={freq} id={freq} />
                  <Text component="label" htmlFor={freq}>
                    {freq}
                  </Text>
                </Row>
              ))}
            </RadioGroup>
          </Stack>
          <Stack>
            <Row spacing={2} justifyContent="space-between">
              <CustomDatePicker label="Start Date" />
              <CustomDatePicker label="Maturity Date" />
            </Row>
          </Stack>
          <SizedBox height={1} />
          <Stack>
            <Row justifyContent="flex-start">
              <PrimaryButton
                disabled
                style={{ height: "60px", width: "200px" }}
              >
                Create Plan
              </PrimaryButton>
            </Row>
          </Stack>
        </Stack>
      </Stack>
    </CustomDialog>
  );
}
