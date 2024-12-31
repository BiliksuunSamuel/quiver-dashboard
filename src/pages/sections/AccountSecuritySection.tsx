import {
  Stack,
  StackProps,
  alpha,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { CustomInput, PrimaryButton, Row, Text } from "../../components";

interface IProps extends StackProps {}
export default function AccountSecuritySection({ ...others }: IProps) {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.between("xs", "sm"));

  return (
    <Stack spacing={6} {...others}>
      <Stack maxWidth={isSmallDevice ? "100%" : "80%"}>
        <Row spacing={3} alignItems="flex-start">
          <Stack flex={1}>
            <Text>Password</Text>
            <Text width="80%" color={alpha(theme.palette.common.black, 0.5)}>
              Changing your password would automatically log you out, and
              require you to login with your new password.
            </Text>
          </Stack>
          <Stack flex={2}>
            <Stack spacing={3}>
              <CustomInput
                style={{
                  height: "55px",
                  borderRadius: theme.spacing(1),
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.5)}`,
                }}
                label="Current Password"
                type="password"
              />
              <CustomInput
                style={{
                  height: "55px",
                  borderRadius: theme.spacing(1),
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.5)}`,
                }}
                label="New password"
                type="password"
              />
              <CustomInput
                style={{
                  height: "55px",
                  borderRadius: theme.spacing(1),
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.5)}`,
                }}
                type="password"
                label="Confirm new password"
              />
            </Stack>
          </Stack>
        </Row>
      </Stack>

      <Stack maxWidth={isSmallDevice ? "100%" : "80%"}>
        <Row width="100%" justifyContent="flex-end">
          <PrimaryButton disabled style={{ height: "60px", width: "200px" }}>
            Change Password
          </PrimaryButton>
        </Row>
      </Stack>
    </Stack>
  );
}
