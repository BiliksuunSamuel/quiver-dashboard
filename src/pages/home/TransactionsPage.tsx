import {
  Divider,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableHead,
  alpha,
  useTheme,
} from "@mui/material";
import {
  CustomDropdown,
  CustomIconButton,
  CustomTab,
  CustomTablRow,
  CustomTableCell,
  CustomTabsView,
  PrimaryButton,
  Row,
  SectionTitleView,
  StatusChip,
} from "../../components";
import { ContentContainer } from "../../views";
import { useState } from "react";
import { MdMoreVert } from "react-icons/md";

export default function TransactionsPage() {
  const [activeTab, setActiveTab] = useState("Wallet Funding");
  const theme = useTheme();
  return (
    <ContentContainer>
      <SectionTitleView header="Transactions" />
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
          ].map((tab) => (
            <CustomTab
              key={tab}
              value={tab}
              label={tab}
              onClick={() => setActiveTab(tab)}
            />
          ))}
        </CustomTabsView>
        <Divider />
      </Stack>
      <Stack width="100%">
        <Row spacing={5} justifyContent="flex-start">
          <Row spacing={1}>
            {["Start date", "End date", "Amount", "Method", "Status"].map(
              (ft) => (
                <CustomDropdown placeholder={ft} key={ft} />
              )
            )}
          </Row>
          <Row spacing={1}>
            <PrimaryButton>Apply Filters</PrimaryButton>
            <CustomIconButton text="Clear filter" />
          </Row>
        </Row>
      </Stack>

      <Stack>
        <Table>
          <TableHead>
            <CustomTablRow>
              {[
                "Date",
                "User",
                "Transaction ID",
                "Method",
                "Status",
                "Amount",
              ].map((header) => (
                <CustomTableCell
                  style={{
                    color: alpha(theme.palette.common.black, 0.8),
                    fontSize: theme.spacing(1.85),
                  }}
                  align="left"
                  key={header}
                >
                  {header}
                </CustomTableCell>
              ))}
              <CustomTableCell></CustomTableCell>
            </CustomTablRow>
          </TableHead>
          <TableBody>
            {Array.from({ length: 11 }).map((_, index) => (
              <CustomTablRow key={index}>
                <CustomTableCell align="left">Apr 01,2022</CustomTableCell>
                <CustomTableCell align="left">
                  debra.holt@example.com
                </CustomTableCell>
                <CustomTableCell>led_126TPzIrHFcM1QdkincnSr</CustomTableCell>
                <CustomTableCell align="left">Giftcard</CustomTableCell>
                <CustomTableCell>
                  <StatusChip
                    status={
                      index == 1
                        ? "Processing"
                        : index === 6
                        ? "Failed"
                        : "Succcessful"
                    }
                  />
                </CustomTableCell>
                <CustomTableCell>$475.22</CustomTableCell>
                <CustomTableCell>
                  <IconButton>
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
