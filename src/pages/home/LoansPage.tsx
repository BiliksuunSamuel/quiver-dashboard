import {
  IconButton,
  Stack,
  Table,
  TableBody,
  TableHead,
  alpha,
  useTheme,
} from "@mui/material";
import {
  CustomTablRow,
  CustomTableCell,
  SectionTitleView,
  Text,
} from "../../components";
import { ContentContainer } from "../../views";
import { BarChartView2 } from "../../charts";
import { LoanRequestsStatistics } from "../../data";
import { LoanOrderInfoView, LoanRequestStatisticsCard } from "../components";
import { MdMoreVert } from "react-icons/md";
import { useState } from "react";

export default function LoansPage() {
  const theme = useTheme();
  const [showInfo, setShowInfo] = useState(false);
  return (
    <ContentContainer spacing={3}>
      <LoanOrderInfoView
        open={showInfo}
        handleClose={() => setShowInfo(false)}
      />
      <SectionTitleView header="Loans" />
      <Stack
        direction="row"
        sx={{
          [theme.breakpoints.down("sm")]: {
            display: "flex",
            flexDirection: "column",
          },
        }}
        width="100%"
        spacing={1}
      >
        <Stack flex={1}>
          <Stack
            padding={2}
            borderRadius={2}
            height="320px"
            spacing={1}
            border={`1px solid ${alpha(theme.palette.common.black, 0.05)}`}
            bgcolor={alpha(theme.palette.primary.main, 0.035)}
          >
            <Stack paddingX={4}>
              <Text>Loan Requests</Text>
            </Stack>
            <BarChartView2 />
          </Stack>
        </Stack>
        <Stack flex={1}>
          <Stack
            padding={2}
            borderRadius={2}
            spacing={1}
            height="320px"
            border={`1px solid ${alpha(theme.palette.common.black, 0.25)}`}
          >
            <Stack
              spacing={1}
              height="100%"
              justifyContent="space-evenly"
              padding={2}
            >
              {LoanRequestsStatistics.map((req, index) => (
                <LoanRequestStatisticsCard key={index} info={req} />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <SectionTitleView header="Loan Orders" />
      <Stack>
        <Table>
          <TableHead>
            <CustomTablRow>
              <CustomTableCell align="left">Date</CustomTableCell>
              <CustomTableCell align="left">User</CustomTableCell>
              <CustomTableCell align="left">Transaction ID</CustomTableCell>
              <CustomTableCell align="left">Due Date</CustomTableCell>
              <CustomTableCell align="left">Amount</CustomTableCell>
              <CustomTableCell align="left">Collateral</CustomTableCell>
              <CustomTableCell align="left"></CustomTableCell>
            </CustomTablRow>
          </TableHead>
          <TableBody>
            {Array.from({ length: 6 }).map((_, index) => (
              <CustomTablRow key={index}>
                <CustomTableCell align="left">Apr 01,2022</CustomTableCell>
                <CustomTableCell align="left">
                  debra.holt@example.com
                </CustomTableCell>
                <CustomTableCell>led_126TPzIrHFcM1QdkincnSr</CustomTableCell>
                <CustomTableCell>Apr 02,2023</CustomTableCell>
                <CustomTableCell align="left">1500 USDT</CustomTableCell>
                <CustomTableCell>{`Bitcoin (BTC)`}</CustomTableCell>
                <CustomTableCell>
                  <IconButton onClick={() => setShowInfo(true)}>
                    <MdMoreVert />
                  </IconButton>
                </CustomTableCell>
              </CustomTablRow>
            ))}
          </TableBody>
        </Table>
      </Stack>
    </ContentContainer>
  );
}
