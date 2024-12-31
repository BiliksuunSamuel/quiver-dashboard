import {
  Divider,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  alpha,
  useTheme,
} from "@mui/material";
import {
  CustomTab,
  CustomTablRow,
  CustomTableCell,
  CustomTabsView,
  PriorityIcon,
  Row,
  SectionTitleView,
  StatusChip,
  Text,
  TrendingCollateralView,
} from "../../components";
import { ContentContainer } from "../../views";
import {
  StatisticsData,
  TrendingCollaterals,
  WalletFundings,
} from "../../data";
import { BarChartView2 } from "../../charts";
import { useState } from "react";
import { ArrowDown2 } from "iconsax-react";

export default function ContentPage() {
  const theme = useTheme();
  const [activeTab, _] = useState("Wallet Funding");
  return (
    <ContentContainer
      spacing={3}
      style={{
        overflowY: "auto",
        height: "100vh",
      }}
    >
      <SectionTitleView header="Statistics" />
      {/*Statistics section */}
      <Stack
        padding={theme.spacing(4)}
        borderRadius={1.5}
        bgcolor={theme.palette.primary.main}
        height="80px"
      >
        <Row justifyContent="space-evenly" spacing={2}>
          {StatisticsData.map((stats, index) => (
            <>
              <Stack direction="row" spacing={2}>
                <Stack spacing={2}>
                  <Text
                    fontSize="14px"
                    color={alpha(theme.palette.common.white, 0.65)}
                  >
                    {stats.label}
                  </Text>

                  <Text
                    color={theme.palette.common.white}
                    fontWeight="bold"
                    fontSize="24px"
                  >
                    {stats.value}
                  </Text>
                </Stack>
              </Stack>
              {index + 1 !== StatisticsData.length && (
                <Stack
                  key={index}
                  borderRight={`2px solid ${alpha(
                    theme.palette.common.white,
                    0.45
                  )}`}
                  height="60px"
                />
              )}
            </>
          ))}
        </Row>
      </Stack>
      {/*Chart section */}
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
            height="360px"
            spacing={1}
            border={`1px solid ${alpha(theme.palette.common.black, 0.25)}`}
          >
            <Stack paddingX={4}>
              <Text>Loan Requests</Text>
            </Stack>
            {/* <BarChartView /> */}
            <BarChartView2 />
          </Stack>
        </Stack>
        <Stack flex={1}>
          <Stack
            padding={2}
            borderRadius={2}
            spacing={1}
            height="360px"
            border={`1px solid ${alpha(theme.palette.common.black, 0.25)}`}
          >
            <Stack paddingX={4}>
              <Text>Trending Collaterals</Text>
            </Stack>
            <Stack>
              <Stack
                spacing={1}
                padding={2}
                direction="row"
                alignItems="center"
                justifyContent="space-evenly"
              >
                <TableContainer component={Stack} padding={0}>
                  <Table>
                    <TableBody>
                      {TrendingCollaterals.map((info, index) => (
                        <TrendingCollateralView key={index} info={info} />
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      {/*Recent transactions*/}
      <SectionTitleView header="Recent Transactions" />
      <Stack spacing={2}>
        <Stack>
          <CustomTabsView value={activeTab}>
            {[
              "Wallet Funding",
              "Withdrawal",
              "Savings",
              "Transfer",
              "Receive",
              "Swap",
              "Loan Request",
              "Add Collateral",
              "Loan Repayment",
              "Forced Liquidation",
            ].map((tab) => (
              <CustomTab key={tab} value={tab} label={tab} />
            ))}
          </CustomTabsView>
          <Divider />
        </Stack>
        <Stack>
          <Table>
            <TableHead>
              <CustomTablRow>
                <CustomTableCell align="left">Date</CustomTableCell>
                <CustomTableCell align="left">User</CustomTableCell>
                <CustomTableCell align="left">Transaction ID</CustomTableCell>
                <CustomTableCell align="left">Priority</CustomTableCell>
                <CustomTableCell align="left">Status</CustomTableCell>
                <CustomTableCell align="left">Amount</CustomTableCell>
              </CustomTablRow>
            </TableHead>
            <TableBody>
              {WalletFundings.map((info, index) => (
                <CustomTablRow key={info.transactionId + index}>
                  <CustomTableCell align="left">{info.date}</CustomTableCell>
                  <CustomTableCell align="left">{info.email}</CustomTableCell>
                  <CustomTableCell>{info.transactionId}</CustomTableCell>
                  <CustomTableCell align="left">
                    <Row justifyContent="flex-start" spacing={1}>
                      <PriorityIcon variant={info.priority} />
                      <Text>{info.priority}</Text>
                      <ArrowDown2 />
                    </Row>
                  </CustomTableCell>
                  <CustomTableCell>
                    <StatusChip status={info.status} />
                  </CustomTableCell>
                  <CustomTableCell>${info.amount}</CustomTableCell>
                </CustomTablRow>
              ))}
            </TableBody>
          </Table>
        </Stack>
      </Stack>
    </ContentContainer>
  );
}
