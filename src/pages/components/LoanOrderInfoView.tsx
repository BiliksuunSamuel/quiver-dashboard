import {
  BackdropProps,
  Divider,
  IconButton,
  Stack,
  alpha,
  useTheme,
} from "@mui/material";
import { CustomBackDrop, Row, SizedBox, Text } from "../../components";
import { Minus } from "iconsax-react";
import { MouseEvent } from "react";
import { BiSolidCheckbox } from "react-icons/bi";

interface IProps extends BackdropProps {
  handleClose?: (e: MouseEvent<HTMLButtonElement>) => void;
}
export default function LoanOrderInfoView({ handleClose, ...others }: IProps) {
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
              borderRadius={2}
              height="120px"
              padding={theme.spacing(2, 1)}
              border={`1px solid ${alpha(theme.palette.common.black, 0.15)}`}
            >
              <Row height="100%" justifyContent="space-between" paddingX={2}>
                <Stack spacing={1}>
                  <Text color={alpha(theme.palette.common.black, 0.65)}>
                    Loan Amount
                  </Text>
                  <Text
                    fontSize={theme.spacing(3)}
                    fontWeight="bold"
                    color={theme.palette.primary.main}
                  >
                    $2,923.41
                  </Text>
                </Stack>
                <Stack spacing={1}>
                  <Text color={alpha(theme.palette.common.black, 0.65)}>
                    Collateral
                  </Text>
                  <Text fontSize={theme.spacing(3)} fontWeight="bold">
                    0.0781 BTC ≈ $1,800
                  </Text>
                </Stack>
              </Row>
            </Stack>
            <Stack
              borderRadius={2}
              height="120px"
              padding={theme.spacing(2, 1)}
              border={`1px solid ${alpha(theme.palette.common.black, 0.15)}`}
            >
              <Row
                height="100%"
                alignItems="center"
                justifyContent="center"
                paddingX={2}
              >
                <Stack alignItems="center" spacing={1}>
                  <Text color={alpha(theme.palette.common.black, 0.65)}>
                    Total Amount to payback
                  </Text>
                  <Text
                    fontSize={theme.spacing(3.5)}
                    fontWeight="bold"
                    color={theme.palette.primary.main}
                  >
                    $1,634.28
                  </Text>
                  <Text color={alpha(theme.palette.common.black, 0.65)}>
                    {`(Amount Borrowed + Interest)`}
                  </Text>
                </Stack>
              </Row>
            </Stack>
            <SizedBox height={3} />
            <Stack spacing={3}>
              <Stack spacing={2.5}>
                <Row width="100%" justifyContent="space-between">
                  <Text color={alpha(theme.palette.common.black, 0.65)}>
                    Request Date
                  </Text>
                  <Text>Apr 02,2022</Text>
                </Row>
                <Divider />
                <Row width="100%" justifyContent="space-between">
                  <Text color={alpha(theme.palette.common.black, 0.65)}>
                    Due Date
                  </Text>
                  <Text>Apr 02, 2023</Text>
                </Row>
                <Divider />
                <Row width="100%" justifyContent="space-between">
                  <Text color={alpha(theme.palette.common.black, 0.65)}>
                    Transaction ID
                  </Text>
                  <Text>led_126TPzIrHFcM1QdkincnSr</Text>
                </Row>
                <Divider />
                <Row width="100%" justifyContent="space-between">
                  <Text color={alpha(theme.palette.common.black, 0.65)}>
                    Liquidation at
                  </Text>
                  <Text>$40,410.19</Text>
                </Row>
                <Divider />
                <Row width="100%" justifyContent="space-between">
                  <Text color={alpha(theme.palette.common.black, 0.65)}>
                    BTC Margin Call at
                  </Text>
                  <Text>$44,823.09</Text>
                </Row>
                <Divider />
                <Row width="100%" justifyContent="space-between">
                  <Text color={alpha(theme.palette.common.black, 0.65)}>
                    Interest Rate
                  </Text>
                  <Text>0.18%</Text>
                </Row>
              </Stack>
              <SizedBox height={15} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </CustomBackDrop>
  );
}
