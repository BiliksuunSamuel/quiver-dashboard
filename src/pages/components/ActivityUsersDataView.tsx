import {
  Stack,
  StackProps,
  Table,
  TableBody,
  TableHead,
  alpha,
  useTheme,
} from "@mui/material";
import { CustomTablRow, CustomTableCell, Row, Text } from "../../components";
import { userImages } from "../../resources";
import { BiSolidCheckbox } from "react-icons/bi";

interface IProps extends StackProps {
  status?: "Online" | "Offline";
}
export default function ActivityUsersDataView({
  status = "Online",
  ...others
}: IProps) {
  const theme = useTheme();
  return (
    <Stack {...others}>
      <Table>
        <TableHead>
          <CustomTablRow>
            {["Name", "Email address", "Role", "Activity"].map((header) => (
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
          {Array.from({ length: 4 }).map((_, index) => (
            <CustomTablRow key={index}>
              <CustomTableCell align="left">
                <Row justifyContent="flex-start" spacing={1}>
                  <Stack
                    width="30px"
                    height="30px"
                    borderRadius="30px"
                    bgcolor={alpha(theme.palette.common.black, 0.25)}
                    overflow="hidden"
                  >
                    <img src={userImages[2]} alt="user-alt" />
                  </Stack>
                  <Text>Omololu Basmisile</Text>
                </Row>
              </CustomTableCell>
              <CustomTableCell align="left">
                lolu@quiverfinance.com
              </CustomTableCell>
              <CustomTableCell align="left">Super admin</CustomTableCell>
              <CustomTableCell>
                <Stack
                  direction="row"
                  color={
                    status === "Online"
                      ? theme.palette.primary.main
                      : alpha(theme.palette.common.black, 0.45)
                  }
                  alignItems="center"
                >
                  <BiSolidCheckbox fontSize="large" />
                  <Text>{status}</Text>
                </Stack>
              </CustomTableCell>
            </CustomTablRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  );
}
