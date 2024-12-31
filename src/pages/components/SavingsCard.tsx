import {
  Grid,
  GridProps,
  IconButton,
  Stack,
  alpha,
  useTheme,
} from "@mui/material";
import { Flex, Row, SizedBox, Text } from "../../components";
import { MdMoreVert } from "react-icons/md";
import { userImages } from "../../resources";

interface IProps extends GridProps {
  handleShowInfo?: () => void;
}
export default function SavingsCard({ handleShowInfo, ...others }: IProps) {
  const theme = useTheme();
  return (
    <Grid item sm={6} xs={6} md={5} lg={4} xl={3} {...others}>
      <Stack
        boxShadow={`0 1px 2px 0px ${alpha(theme.palette.common.black, 0.25)}`}
        padding={2}
        border={`1px solid ${alpha(theme.palette.common.black, 0.05)}`}
        borderRadius={2.5}
        height="350px"
        spacing={2.5}
      >
        <Row justifyContent="space-between">
          <Text fontSize={theme.spacing(2.45)}>Crypto Kings</Text>
          <IconButton onClick={handleShowInfo}>
            <MdMoreVert />
          </IconButton>
        </Row>
        <Stack spacing={1}>
          <Row spacing={1} justifyContent="flex-start">
            <Stack
              width="30px"
              height="30px"
              borderRadius="30px"
              bgcolor={theme.palette.primary.main}
              color={theme.palette.common.white}
              alignItems="center"
              justifyContent="center"
            >
              T
            </Stack>
            <Text
              color={alpha(theme.palette.common.black, 0.65)}
              fontSize={theme.spacing(2.25)}
            >
              1.00 USDT Daily
            </Text>
          </Row>
          <Text fontSize={theme.spacing(2.45)} fontWeight="bold">
            15.00 USDT
          </Text>
          <Text color={alpha(theme.palette.common.black, 0.45)}>
            saved so far
          </Text>
        </Stack>
        <Stack>
          <Text
            fontSize={theme.spacing(2.85)}
            color={theme.palette.primary.main}
            fontWeight="bold"
          >
            + 5.0%
          </Text>
        </Stack>
        <Flex />
        <Stack paddingX={2}>
          <Row justifyContent="flex-start" spacing={1}>
            <Row justifyContent="flex-start">
              {userImages.map((imgUrl, index) => (
                <Stack
                  width="45px"
                  height="45px"
                  borderRadius="45px"
                  marginLeft="-10px"
                  bgcolor={alpha(theme.palette.common.black, 0.45)}
                  overflow="hidden"
                  key={index}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                    }}
                    src={imgUrl}
                    alt="user-log"
                  />
                </Stack>
              ))}
            </Row>
            <Text fontSize={theme.spacing(2.25)} fontWeight="500">
              +750
            </Text>
          </Row>
        </Stack>
        <SizedBox height={2} />
      </Stack>
    </Grid>
  );
}
