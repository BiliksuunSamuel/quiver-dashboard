import {
  Checkbox,
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
  CustomTab,
  CustomTablRow,
  CustomTableCell,
  CustomTabsView,
  Row,
  SectionTitleView,
  Text,
} from "../../components";
import { ContentContainer } from "../../views";
import { useState } from "react";
import { Users } from "../../data";
import { BiSolidCheckbox } from "react-icons/bi";
import { CustomPagination } from "../sections";
import { Setting2 } from "iconsax-react";
import { MdMoreVert } from "react-icons/md";
import { UserInfoView } from "../components";
import { userImages } from "../../resources";

export default function UsersPage() {
  const [activeTab, setActiveTab] = useState("All Users");
  const theme = useTheme();
  const [showInfo, setShowInfo] = useState(false);
  return (
    <ContentContainer spacing={2}>
      <UserInfoView handleClose={() => setShowInfo(false)} open={showInfo} />
      <Row justifyContent="space-between">
        <SectionTitleView header="Users" />
        <Row spacing={1}>
          <Setting2 />
          <Text>Settings</Text>
        </Row>
      </Row>
      <Stack>
        <CustomTabsView value={activeTab}>
          {["All Users", "Active Users", "Inactive"].map((tab) => (
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
      <Stack>
        <Table>
          <TableHead>
            <CustomTablRow>
              <CustomTableCell>
                <Checkbox />
              </CustomTableCell>
              {[
                "Quivertag",
                "Email address",
                "Last seen Active",
                "Referred by",
                "NO. of Referrals",
                "KYC Level",
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
            {Users.map((user, index) => (
              <CustomTablRow key={user.id + index}>
                <CustomTableCell>
                  <Checkbox />
                </CustomTableCell>
                <CustomTableCell align="left">
                  <Row justifyContent="flex-start" spacing={1}>
                    <Stack
                      width="30px"
                      height="30px"
                      borderRadius="30px"
                      bgcolor={alpha(theme.palette.common.black, 0.25)}
                      overflow="hidden"
                    >
                      <img src={userImages[0]} alt="user-alt" />
                    </Stack>
                    <Text>{user.quiverTag}</Text>
                  </Row>
                </CustomTableCell>
                <CustomTableCell align="left">{user.email}</CustomTableCell>
                <CustomTableCell>
                  {user.isActive ? (
                    <Stack
                      direction="row"
                      color={theme.palette.primary.main}
                      alignItems="center"
                    >
                      <BiSolidCheckbox fontSize="large" />
                      <Text>Active</Text>
                    </Stack>
                  ) : (
                    user.lastSeen
                  )}
                </CustomTableCell>
                <CustomTableCell align="left">
                  {user.referredBy ?? "--"}
                </CustomTableCell>
                <CustomTableCell>{user.numberOfReferrals}</CustomTableCell>
                <CustomTableCell
                  style={{
                    color:
                      user.kycLevel === "Completed"
                        ? theme.palette.primary.dark
                        : alpha(theme.palette.common.black, 0.5),
                  }}
                >
                  {user.kycLevel}
                </CustomTableCell>
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
      <CustomPagination />
    </ContentContainer>
  );
}
