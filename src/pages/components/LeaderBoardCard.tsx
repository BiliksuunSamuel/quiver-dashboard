import { ListItem, Stack, StackProps, alpha, useTheme } from "@mui/material";
import { Flex, Row, Text } from "../../components";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import resources from "../../resources";
import { PiShootingStarFill } from "react-icons/pi";

interface IProps extends StackProps {
  flow?: "up" | "down";
  scorePosition: number;
}
export default function LeaderBoardCard({
  flow = "up",
  scorePosition,
  ...others
}: IProps) {
  const theme = useTheme();
  return (
    <Stack {...others}>
      <ListItem divider>
        <Row width="100%" spacing={2} justifyContent="flex-start">
          {flow === "up" ? (
            <BiSolidUpArrow size={24} color={theme.palette.primary.dark} />
          ) : (
            <BiSolidDownArrow size={24} color={theme.palette.error.dark} />
          )}
          <Stack
            width="50px"
            height="50px"
            borderRadius="50px"
            bgcolor={alpha(theme.palette.common.black, 0.025)}
            overflow="hidden"
          >
            <img src={resources.leaderIcon} />
          </Stack>
          <Stack>
            <Text fontSize={theme.spacing(2.8)} fontWeight="500">
              $charlieM
            </Text>
            <Row spacing={1}>
              <PiShootingStarFill
                size={30}
                style={{ rotate: "45deg" }}
                color={theme.palette.primary.main}
              />
              <Text
                color={alpha(theme.palette.common.black, 0.65)}
                fontSize={theme.spacing(2.8)}
                fontWeight="300"
              >
                {(1285 / scorePosition).toFixed(0)}
              </Text>
            </Row>
          </Stack>
          <Flex />
          <Text fontWeight="600" fontSize={theme.spacing(2.45)}>
            {scorePosition}
          </Text>
        </Row>
      </ListItem>
    </Stack>
  );
}
