import {
  Checkbox,
  IconButton,
  Stack,
  StackProps,
  Table,
  TableBody,
  TableHead,
  alpha,
  useTheme,
} from "@mui/material";
import {
  CustomTablRow,
  CustomTableCell,
  Row,
  StatusChip,
  Text,
} from "../../components";
import { MdMoreVert } from "react-icons/md";

interface IProps extends StackProps {}
export default function InvitationsDataView({ ...others }: IProps) {
  const theme = useTheme();
  return (
    <Stack {...others}>
      <Table>
        <TableHead>
          <CustomTablRow>
            <CustomTableCell>
              <Checkbox />
            </CustomTableCell>
            {[
              "Name",
              "Email address",
              "Role",
              "Invited by",
              "Invitation status",
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
            <CustomTableCell></CustomTableCell>
          </CustomTablRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: 3 }).map((_, index) => (
            <CustomTablRow key={index}>
              <CustomTableCell>
                <Checkbox />
              </CustomTableCell>
              <CustomTableCell align="left">
                <Row justifyContent="flex-start" spacing={1}>
                  <Stack
                    width="55px"
                    height="35px"
                    borderRadius="30px"
                    bgcolor={alpha(theme.palette.primary.main, 0.15)}
                    overflow="hidden"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text color={theme.palette.primary.main}>RD</Text>
                  </Stack>
                  <Text>Omololu Bamisile</Text>
                </Row>
              </CustomTableCell>
              <CustomTableCell align="left">
                lolu@quiverfinance.com
              </CustomTableCell>
              <CustomTableCell align="left">
                {index < 2 ? "Member" : "Support"}
              </CustomTableCell>
              <CustomTableCell>
                <Stack
                  direction="row"
                  color={theme.palette.primary.main}
                  alignItems="center"
                >
                  <Text>Omololu Bamisile</Text>
                </Stack>
              </CustomTableCell>
              <CustomTableCell>
                <StatusChip status={index < 2 ? "Pending" : "Expired"} />
              </CustomTableCell>

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
  );
}
