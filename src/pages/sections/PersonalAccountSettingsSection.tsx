import {
  Divider,
  Stack,
  StackProps,
  alpha,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  CustomIconButton,
  CustomInput,
  PrimaryButton,
  Row,
  Text,
} from "../../components";

interface IProps extends StackProps {}
export default function PersonalAccountSettingsSection({ ...others }: IProps) {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.between("xs", "sm"));

  return (
    <Stack spacing={6} {...others}>
      <Stack maxWidth={isSmallDevice ? "100%" : "80%"}>
        <Row spacing={2} alignItems="flex-start">
          <Stack flex={1}>
            <Text variant="body2">Profile Photo</Text>
          </Stack>
          <Stack alignItems="flex-start" flex={3}>
            <Row spacing={2}>
              <Stack
                width="60px"
                height="60px"
                borderRadius="60px"
                bgcolor={alpha(theme.palette.common.black, 0.25)}
              ></Stack>
              <Text
                width="280px"
                color={alpha(theme.palette.common.black, 0.65)}
                variant="body2"
              >
                Upload images in PNG or JPG format, with a maximum size of 5MB
              </Text>
            </Row>
            <Row spacing={2}>
              <Stack></Stack>
              <Row paddingLeft={"60px"}>
                <PrimaryButton
                  style={{
                    height: "50px",
                    boxShadow: `${alpha(
                      theme.palette.primary.dark,
                      0.065
                    )} 0 0 0 0.2rem`,
                  }}
                >
                  Upload Image
                </PrimaryButton>
                <CustomIconButton text="Remove image" />
              </Row>
            </Row>
          </Stack>
        </Row>
      </Stack>

      <Divider />
      <Stack maxWidth={isSmallDevice ? "100%" : "80%"}>
        <Row spacing={3} alignItems="flex-start">
          <Stack flex={1}>
            <Text>Name</Text>
            <Text width="80%" color={alpha(theme.palette.common.black, 0.5)}>
              Changes made to your name would be visible to others on the team
            </Text>
          </Stack>
          <Stack flex={2}>
            <Stack direction="row" justifyContent="flex-start" spacing={3}>
              <CustomInput
                style={{
                  backgroundColor: alpha(theme.palette.primary.main, 0.085),
                  height: "55px",
                  borderRadius: theme.spacing(1),
                  border: `1px solid ${theme.palette.primary.main}`,
                }}
                label="First name"
                placeholder="Omololu"
              />
              <CustomInput
                style={{
                  backgroundColor: alpha(theme.palette.primary.main, 0.085),
                  height: "55px",
                  borderRadius: theme.spacing(1),
                  border: `1px solid ${theme.palette.primary.main}`,
                }}
                label="Last name"
                placeholder="Basimile"
              />
            </Stack>
          </Stack>
        </Row>
      </Stack>

      <Divider />
      <Stack maxWidth={isSmallDevice ? "100%" : "80%"}>
        <Row spacing={3} alignItems="flex-start">
          <Stack flex={1}>
            <Text>Email Address</Text>
            <Text width="80%" color={alpha(theme.palette.common.black, 0.5)}>
              Changes made to your email address would be visible to others on
              the team
            </Text>
          </Stack>
          <Stack flex={2}>
            <Stack direction="row" justifyContent="flex-start" spacing={3}>
              <CustomInput
                style={{
                  backgroundColor: alpha(theme.palette.primary.main, 0.085),
                  height: "55px",
                  borderRadius: theme.spacing(1),
                  border: `1px solid ${theme.palette.primary.main}`,
                }}
                type="email"
                label="Email address"
                placeholder="lolu@quiverfinance.com"
              />
            </Stack>
          </Stack>
        </Row>
      </Stack>
      <Stack maxWidth={isSmallDevice ? "100%" : "80%"}>
        <Row width="100%" justifyContent="flex-end">
          <PrimaryButton style={{ height: "60px", width: "200px" }}>
            Save Changes
          </PrimaryButton>
        </Row>
      </Stack>
    </Stack>
  );
}
