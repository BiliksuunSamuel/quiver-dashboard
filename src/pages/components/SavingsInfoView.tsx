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
  Flex,
  Row,
  SectionTitleView,
  Text,
} from "../../components";
import { Minus } from "iconsax-react";
import { MouseEvent } from "react";
import resources from "../../resources";
import LeaderBoardCard from "./LeaderBoardCard";

interface IProps extends BackdropProps {
  handleClose?: (e: MouseEvent<HTMLButtonElement>) => void;
}
export default function SavingsInfoView({ handleClose, ...others }: IProps) {
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
                width="100%"
                height="160px"
                borderRadius={3}
                position="relative"
                bgcolor={alpha(theme.palette.common.black, 0.045)}
                border={`1px solid ${alpha(theme.palette.common.black, 0.05)}`}
              >
                <Row padding={2} justifyContent="flex-start" spacing={1}>
                  <Stack
                    width="30px"
                    height="30px"
                    borderRadius="30px"
                    bgcolor={alpha(theme.palette.common.black, 0.045)}
                    overflow="hidden"
                  >
                    <img src={resources.savingIcon} alt="saving-icon" />
                  </Stack>
                  <Text>1.5345 BUSD Daily</Text>
                </Row>
                <Stack position="absolute" right={10} top={10} bottom={0}>
                  <img src={resources.slideBars} alt="slide-bars" />
                </Stack>
                <Flex />
                <Row padding={2} justifyContent="flex-start">
                  <Text fontSize={theme.spacing(2.45)} fontWeight="400">
                    Crypto Kings
                  </Text>
                </Row>
              </Stack>
            </Stack>
            <Stack spacing={0.6}>
              <Row justifyContent="space-between">
                <Text
                  variant="body1"
                  color={alpha(theme.palette.common.black, 0.55)}
                  fontSize={theme.spacing(2.25)}
                >
                  Total Challenge balance
                </Text>
                <Text
                  color={alpha(theme.palette.common.black, 0.55)}
                  fontSize={theme.spacing(2.25)}
                >
                  Interest Rate
                </Text>
              </Row>
              <Row justifyContent="space-between">
                <Row justifyContent="flex-start" spacing={1}>
                  <Stack
                    width="30px"
                    height="30px"
                    borderRadius="30px"
                    bgcolor={alpha(theme.palette.common.black, 0.045)}
                    overflow="hidden"
                  >
                    <img src={resources.savingIcon} alt="saving-icon" />
                  </Stack>
                  <Text fontWeight="500" fontSize={theme.spacing(2.65)}>
                    15.00 BUSD
                  </Text>
                </Row>
                <Text
                  fontSize={theme.spacing(2.65)}
                  color={theme.palette.primary.main}
                  fontWeight="500"
                >
                  +10.0%
                </Text>
              </Row>
            </Stack>
            <Divider />
            <SectionTitleView header="Leaderboard" />

            <Stack
              height="60%"
              style={{ overflowY: "auto" }}
              spacing={3}
              paddingBottom={10}
            >
              {Array.from({ length: 7 }).map((_, index) => (
                <LeaderBoardCard
                  flow={index > 0 && index < 3 ? "down" : "up"}
                  key={index}
                  scorePosition={index + 1}
                />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </CustomBackDrop>
  );
}
