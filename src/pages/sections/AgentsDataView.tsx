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
import { CustomTablRow, CustomTableCell, Row, Text } from "../../components";
import { userImages } from "../../resources";
import { BiSolidCheckbox } from "react-icons/bi";
import { MdMoreVert } from "react-icons/md";

interface IProps extends StackProps {}
export default function AgentsDataView({ ...others }: IProps) {
  const theme = useTheme();
  return (
    <Stack {...others}>
      <Table>
        <TableHead>
          <CustomTablRow>
            <CustomTableCell>
              <Checkbox />
            </CustomTableCell>
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
          {Array.from({ length: 11 }).map((_, index) => (
            <CustomTablRow key={index}>
              <CustomTableCell>
                <Checkbox />
              </CustomTableCell>
              <CustomTableCell align="left">
                <Row justifyContent="flex-start" spacing={1}>
                  <Stack
                    width="35px"
                    height="30px"
                    borderRadius="30px"
                    bgcolor={alpha(theme.palette.common.black, 0.25)}
                    overflow="hidden"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={userImages[1]}
                      alt="user-alt"
                    />
                  </Stack>
                  <Text>Omololu Bamisile</Text>
                </Row>
              </CustomTableCell>
              <CustomTableCell align="left">
                lolu@quiverfinance.com
              </CustomTableCell>
              <CustomTableCell align="left">Super admin</CustomTableCell>
              <CustomTableCell>
                <Stack
                  direction="row"
                  color={theme.palette.primary.main}
                  alignItems="center"
                >
                  <BiSolidCheckbox fontSize="large" />
                  <Text>Active</Text>
                </Stack>
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
