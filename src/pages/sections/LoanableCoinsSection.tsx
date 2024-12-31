import {
  Stack,
  StackProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  useTheme,
} from "@mui/material";
import resources from "../../resources";
import { Column, CustomSwitch, Row, Text } from "../../components";
import { TitleTextShades } from "../../theme/AppColors";

interface IProps extends StackProps {}
export default function LoanableCoinsSection({ ...others }: IProps) {
  const theme = useTheme();
  return (
    <Stack {...others}>
      <TableContainer>
        <Table>
          <TableBody>
            {Array.from({ length: 5 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell align="left">
                  <Row justifyContent="flex-start" spacing={2}>
                    <Stack width="35px" height="35px">
                      <img src={resources.bitcoin} alt="bitcoin" />
                    </Stack>
                    <Column color={TitleTextShades[500]}>
                      <Text fontSize="14px">USDT</Text>
                      <Text style={{ marginTop: -3 }} fontWeight="bold">
                        Tether
                      </Text>
                    </Column>
                  </Row>
                </TableCell>
                <TableCell>
                  <Column alignItems="flex-start">
                    <Text color="#828282" fontSize={theme.spacing(1.85)}>
                      Amount Borrowed
                    </Text>
                    <Text fontWeight="bold" variant="body1">
                      3,750
                    </Text>
                  </Column>
                </TableCell>
                <TableCell>
                  <CustomSwitch checked />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
