import {
  BackdropProps,
  Divider,
  IconButton,
  Stack,
  alpha,
  useTheme,
} from "@mui/material";
import {
  CustomBackDrop,
  CustomInput,
  PrimaryButton,
  Row,
  SizedBox,
  Text,
} from "../../components";
import { MessageText, Minus, Star } from "iconsax-react";
import { MouseEvent } from "react";
import { BiSolidCheckbox } from "react-icons/bi";

interface IProps extends BackdropProps {
  handleClose?: (e: MouseEvent<HTMLButtonElement>) => void;
}
export default function UserInfoView({ handleClose, ...others }: IProps) {
  const theme = useTheme();
  return (
    <CustomBackDrop {...others}>
      <Stack
        direction="row"
        justifyContent="flex-end"
        height="100vh"
        width="100%"
        style={{ overflowY: "hidden" }}
        position="fixed"
      >
        <Stack
          sx={{ overflowY: "auto", paddingBottom: theme.spacing(4) }}
          width="500px"
          bgcolor={theme.palette.common.white}
          spacing={3}
        >
          <Stack
            height="100vh"
            bgcolor={theme.palette.common.white}
            padding={theme.spacing(4)}
            spacing={3}
          >
            <Row justifyContent="flex-start" width="100%">
              <IconButton onClick={handleClose}>
                <Minus />
              </IconButton>
            </Row>
            <Stack width="100%" alignItems="center">
              <Stack
                width="140px"
                height="140px"
                borderRadius="140px"
                bgcolor={alpha(theme.palette.common.black, 0.15)}
                border={`1px solid ${alpha(theme.palette.common.black, 0.15)}`}
              ></Stack>
            </Stack>
            <Stack alignItems="center">
              <Text variant="body1" fontSize={theme.spacing(2.5)}>
                $philipM
              </Text>
              <Text color={alpha(theme.palette.common.black, 0.65)}>
                philip.masoan@example.com
              </Text>
            </Stack>
            <Row spacing={1}>
              <Text
                color={alpha(theme.palette.common.black, 0.65)}
                variant="body1"
              >
                Last seen active
              </Text>
              <BiSolidCheckbox
                color={alpha(theme.palette.common.black, 0.35)}
              />
              <Text
                color={alpha(theme.palette.common.black, 0.65)}
                variant="body1"
              >
                2mins. ago
              </Text>
            </Row>
            <Stack
              bgcolor={theme.palette.primary.main}
              borderRadius={2}
              height="120px"
              padding={theme.spacing(2, 0)}
            >
              <Row height="100%" justifyContent="space-evenly">
                <Stack spacing={1}>
                  <Text color={alpha(theme.palette.common.white, 0.95)}>
                    Fiat balance
                  </Text>
                  <Text
                    fontSize={theme.spacing(3)}
                    fontWeight="bold"
                    color={theme.palette.common.white}
                  >
                    $2,923.41
                  </Text>
                </Stack>{" "}
                <Stack
                  borderRight={`2px solid ${alpha(
                    theme.palette.common.white,
                    0.45
                  )}`}
                  height="60px"
                />
                <Stack spacing={1}>
                  <Text color={alpha(theme.palette.common.white, 0.95)}>
                    Total QPs
                  </Text>
                  <Row>
                    <Star color={theme.palette.common.white} />
                    <Text
                      fontSize={theme.spacing(3)}
                      fontWeight="bold"
                      color={theme.palette.common.white}
                    >
                      1,287
                    </Text>
                  </Row>
                </Stack>
                <Stack
                  borderRight={`2px solid ${alpha(
                    theme.palette.common.white,
                    0.45
                  )}`}
                  height="60px"
                />
                <Stack spacing={1}>
                  <Text color={alpha(theme.palette.common.white, 0.95)}>
                    Loans
                  </Text>
                  <Text
                    fontSize={theme.spacing(3)}
                    fontWeight="bold"
                    color={theme.palette.common.white}
                  >
                    -$1,500
                  </Text>
                </Stack>
              </Row>
            </Stack>
            <SizedBox height={15} />
            <Stack spacing={3}>
              <Stack spacing={2.5}>
                <Row width="100%" justifyContent="space-between">
                  <Text color={alpha(theme.palette.common.black, 0.65)}>
                    Referred by
                  </Text>
                  <Text>$wilson</Text>
                </Row>
                <Divider />
                <Row width="100%" justifyContent="space-between">
                  <Text color={alpha(theme.palette.common.black, 0.65)}>
                    NO. of Referrals
                  </Text>
                  <Text>5</Text>
                </Row>
                <Divider />
                <Row width="100%" justifyContent="space-between">
                  <Text color={alpha(theme.palette.common.black, 0.65)}>
                    KYC Level
                  </Text>
                  <Text color={theme.palette.primary.main}>Completed</Text>
                </Row>
                <Divider />
                <Row width="100%" justifyContent="space-between">
                  <Text color={alpha(theme.palette.common.black, 0.65)}>
                    Joined
                  </Text>
                  <Text>April 14,2022</Text>
                </Row>
              </Stack>
              <SizedBox height={15} />
              <CustomInput
                label="Send a message"
                style={{
                  minHeight: "120px",
                  backgroundColor: alpha(theme.palette.common.black, 0.05),
                  borderRadius: theme.spacing(1),
                }}
                multiline
                minRows={4}
              />
            </Stack>
            <PrimaryButton
              style={{
                height: "70px",
                padding: theme.spacing(2, 0),
              }}
            >
              <Row spacing={1}>
                <MessageText />
                <Text>Send a message</Text>
              </Row>
            </PrimaryButton>
          </Stack>
        </Stack>
      </Stack>
    </CustomBackDrop>
  );
}
