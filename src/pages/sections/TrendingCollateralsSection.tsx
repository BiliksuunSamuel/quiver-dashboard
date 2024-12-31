import { Stack, Table, TableBody, TableContainer } from "@mui/material";
import { TrendingCollaterals } from "../../data";
import { TrendingCollateralView } from "../../components";

export default function TrendingCollateralsSection() {
  return (
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
  );
}
